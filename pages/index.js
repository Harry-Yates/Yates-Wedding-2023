import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import { enGB, svSE, itIT } from "@/translations";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Footer from "@/components/Footer";
// import Map from "@/components/shared/Map";
import Head from "next/head";

//! IMAGES
import flowersMain from "@/public/decoration/flowers-main.png.webp";
import midsommar from "@/public/slider/midsommar.png.webp";
import leaving from "@/public/slider/leaving.png.webp";
import cyprusbluedress from "@/public/slider/cyprus-bluedress.png.webp";
import johannabday from "@/public/slider/johannabday.png.webp";
import arholma from "@/public/slider/arholma.png.webp";
import sunset from "@/public/slider/sunset.png.webp";
import venicepink from "@/public/slider/venicepink.png.webp";
import whisky from "@/public/slider/whisky.png.webp";
import walks from "@/public/slider/walks.png.webp";
import mountain from "@/public/slider/mountain.png.webp";
import venice from "@/public/slider/venice.png.webp";
import jacket from "@/public/slider/jacket.png.webp";
import jitaly from "@/public/slider/jitaly.png.webp";
import italy3 from "@/public/slider/italy3.png.webp";
import austria from "@/public/slider/austria.png.webp";
import chloeplace from "@/public/slider/chloeplace.png.webp";
import walks2 from "@/public/slider/walks2.png.webp";
import climbers from "@/public/slider/climbers.png.webp";
import water from "@/public/slider/water.png.webp";
import smart from "@/public/slider/smart.png.webp";
import hyde from "@/public/slider/hyde.png.webp";
import henge from "@/public/slider/henge.png.webp";
// Link to docs
// https://keen-slider.io/docs#usage

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

  const handleLanguageToggle = (e) => {
    router.push("/", "/", { locale: e.target.value });
  };

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <BaseLayout>
      <BasePage>
        <Head>
          <title>Yates Wedding 2023</title>
          <meta name='title' content='Yates Wedding 2023' />
          <meta name='description' content=' 8th-9th September | Colognola di Casazza, Italy' />

          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.yates-wedding.com/' />
          <meta property='og:title' content='Yates Wedding 2023' />
          <meta
            property='og:description'
            content=' 8th-9th September | Colognola di Casazza, Italy'
          />
          <meta
            property='og:image'
            content='https://user-images.githubusercontent.com/82885837/218713112-da03d8d2-8dc9-4fc6-ba40-e3282b0def1d.png'
          />

          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:url' content='https://www.yates-wedding.com/' />
          <meta property='twitter:title' content='Yates Wedding 2023' />
          <meta
            property='twitter:description'
            content=' 8th-9th September | Colognola di Casazza, Italy'
          />
          <meta
            property='twitter:image'
            content='https://user-images.githubusercontent.com/82885837/218713112-da03d8d2-8dc9-4fc6-ba40-e3282b0def1d.png'></meta>
        </Head>

        <select value={locale} onChange={handleLanguageToggle}>
          <option value='en-GB'>GB 🇬🇧</option>
          <option value='sv-SE'>SE 🇸🇪</option>
          <option value='it-IT'>IT 🇮🇹</option>
        </select>
        {/* <h1 className='index__title'>Welcome</h1> */}
        <div className='index__title--nameContainer'>
          {/* <h2 className='index__title--name ohhfancy'>Johanna & Harry</h2> */}
          <h2 className='index__title--name ohhfancy title-style'>Johanna</h2>
          <h2 className='index__title--name ohhfancy title-style sign'>{t.home_title_and}</h2>
          <h2 className='index__title--name ohhfancy title-style'>Harry</h2>
        </div>
        <h2 className='index__title--invite ohhfancy-medium'>{t.home_title_invite}</h2>

        <h2 className='index__title--invite ohhfancy-medium'>
          8<sup>th</sup> – 9<sup>th</sup> {t.home_footer_title_date}
        </h2>
        {/* <h2 className='index__title--invite ohhfancy-tiny'>in</h2> */}
        <h2 className='index__title--invite ohhfancy-tiny'>Colognola di Casazza, Italy</h2>

        <div className='flowers-main'>
          <Image src={flowersMain} alt='flowersMain' width='130' priority />
        </div>
        <div ref={sliderRef} className='keen-slider'>
          <Image
            src={walks2}
            alt='walks2'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={midsommar}
            alt='midsommar'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
            priority
          />
          <Image
            src={sunset}
            alt='sunset'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={chloeplace}
            alt='chloeplace'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={jitaly}
            alt='jitaly'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={henge}
            alt='henge'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={hyde}
            alt='hyde'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={climbers}
            alt='climbers'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={johannabday}
            alt='johannabday'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={mountain}
            alt='mountain'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={water}
            alt='water'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={italy3}
            alt='italy3'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={arholma}
            alt='arholma'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={austria}
            alt='austria'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={cyprusbluedress}
            alt='cyprusbluedress'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={jacket}
            alt='jacket'
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
            src={venicepink}
            alt='venicepink'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={walks}
            alt='walks'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={venice}
            alt='venice'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={whisky}
            alt='whisky'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={smart}
            alt='smart'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
        </div>
        {/* <Map /> */}
        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
