import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import { enGB, svSE, itIT } from "@/translations";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import hurlingham from "@/public/slider/hurlingham.png";
import midsommar from "@/public/slider/midsommar.png";
import leaving from "@/public/slider/leaving.png";
import birthday from "@/public/slider/birthday.png";
import Footer from "@/components/Footer";
import Countdown from "react-countdown";

// Link to docs
// https://keen-slider.io/docs#usage

export default function Home({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;
  const Completionist = () => <p>Welcome to Italy 🇮🇹</p>;
  const futureDate = new Date(2023, 8, 9);
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <span>
        {days} days {hours} hours {minutes} minutes {seconds} seconds
      </span>
    );
  };
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
        <h1 className='index__title'>Welcome</h1>
        <h2 className='index__title--name'>Johanna & Harry</h2>
        <h2 className='index__title--invite'>Invite you to Celebrate their wedding!</h2>
        <h2 className='index__title--invite'>8-9 SEPTEMBER 2023</h2>
        <br />
        <Countdown date={futureDate} renderer={renderer}>
          <Completionist />
        </Countdown>
        {/* <h4>8-9 September 2023</h4>
        <h4>Colognola Di Casazza, Italy</h4>
        <h5>#YatesWedding23</h5> */}
        <div ref={sliderRef} className='keen-slider'>
          {/* <div className='keen-slider__slide number-slide1'>1</div> */}
          <Image
            src={midsommar}
            alt='midsommar'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={leaving}
            alt='leaving'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={hurlingham}
            alt='hurlingham'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={birthday}
            alt='birthday'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          {/* <div className='keen-slider__slide number-slide2'>2</div>
          <div className='keen-slider__slide number-slide3'>3</div>
          <div className='keen-slider__slide number-slide4'>4</div>
          <div className='keen-slider__slide number-slide5'>5</div>
          <div className='keen-slider__slide number-slide6'>6</div> */}
        </div>
        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
