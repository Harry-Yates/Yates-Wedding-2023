import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import { enGB, svSE, itIT } from "@/translations";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Countdown from "react-countdown";

//! IMAGES
import hurlingham from "@/public/slider/hurlingham.png";
import midsommar from "@/public/slider/midsommar.png";
import leaving from "@/public/slider/leaving.png";
import cyprusbluedress from "@/public/slider/cyprus-bluedress.png";
import johannabday from "@/public/slider/johannabday.png";
import arholma from "@/public/slider/arholma.png";
import sunset from "@/public/slider/sunset.png";
import venicepink from "@/public/slider/venicepink.png";
import whisky from "@/public/slider/whisky.png";
import fields from "@/public/slider/fields.png";
import walks from "@/public/slider/walks.png";
import cray from "@/public/slider/cray.png";
import jsea from "@/public/slider/jsea.png";
import imran from "@/public/slider/imran.png";
import carnival from "@/public/slider/carnival.png";
import cabin from "@/public/slider/cabin.png";
import mountain from "@/public/slider/mountain.png";
import venice from "@/public/slider/venice.png";
import jacket from "@/public/slider/jacket.png";
import jitaly from "@/public/slider/jitaly.png";
import italy3 from "@/public/slider/italy3.png";
import flowersMain from "@/public/decoration/flowers-main.png";

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
        {/* <h1 className='index__title'>Welcome</h1> */}
        <div className='index__title--nameContainer'>
          {/* <h2 className='index__title--name ohhfancy'>Johanna & Harry</h2> */}
          <h2 className='index__title--name ohhfancy title-style'>Johanna</h2>
          <h2 className='index__title--name ohhfancy  title-style sign'>and</h2>
          <h2 className='index__title--name ohhfancy title-style'>Harry</h2>
        </div>
        <h2 className='index__title--invite ohhfancy-medium'>{t.home_title_invite}</h2>
        <h2 className='index__title--invite ohhfancy-medium'>
          8<sup>th</sup>  – 9
          <sup>th</sup>
          {" "}{t.home_footer_title_date}
        </h2>
        {/* <h2 className='index__title--invite ohhfancy-tiny'>in</h2> */}
        <h2 className='index__title--invite ohhfancy-tiny'>Colognola di Casazza, Italy</h2>

        <div className='flowers-main' >
          <Image  src={flowersMain} alt='flowersMain' width='130' />
        </div>
        <div ref={sliderRef} className='keen-slider'>
          <Image
            src={midsommar}
            alt='midsommar'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={sunset}
            alt='sunset'
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
            src={hurlingham}
            alt='hurlingham'
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
            src={cabin}
            alt='cabin'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={imran}
            alt='imran'
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
            src={italy3}
            alt='italy3'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={jsea}
            alt='jsea'
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
            src={arholma}
            alt='arholma'
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
            src={fields}
            alt='fields'
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
            src={venicepink}
            alt='venicepink'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={cray}
            alt='cray'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={carnival}
            alt='carnival'
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
            src={whisky}
            alt='whisky'
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
        </div>
        <div className='pinkwave' />
        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
