import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import { enGB, svSE, itIT } from "@/translations";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

export default function Home({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;
  const [sliderRef] = useKeenSlider(
    {
      loop: true
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      }
    ]
  );

  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  const handleLanguageToggle = (e) => {
    router.push("/", "/", { locale: e.target.value });
  };

  return (
    <BaseLayout>
      <BasePage>
        <select value={locale} onChange={handleLanguageToggle}>
          <option value='en-GB'>GB 🇬🇧</option>
          <option value='sv-SE'>SE 🇸🇪</option>
          <option value='it-IT'>IT 🇮🇹</option>
        </select>
        <h1>{t.home_title}</h1>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide number-slide1'>1</div>
          <div className='keen-slider__slide number-slide2'>2</div>
          <div className='keen-slider__slide number-slide3'>3</div>
          <div className='keen-slider__slide number-slide4'>4</div>
          <div className='keen-slider__slide number-slide5'>5</div>
          <div className='keen-slider__slide number-slide6'>6</div>
        </div>
      </BasePage>
    </BaseLayout>
  );
}
