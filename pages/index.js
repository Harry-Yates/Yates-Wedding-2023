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
import cyprusbluedress from "@/public/slider/cyprus-bluedress.png";
import johannabday from "@/public/slider/johannabday.png";
import arholma from "@/public/slider/arholma.png";
import shed from "@/public/slider/shed.png";
import sunset from "@/public/slider/sunset.png";
import venicepink from "@/public/slider/venicepink.png";
import whisky from "@/public/slider/whisky.png";
import fields from "@/public/slider/fields.png";
import abba from "@/public/slider/abba.png";
import walks from "@/public/slider/walks.png";
import cray from "@/public/slider/cray.png";
import jsea from "@/public/slider/jsea.png";
import imran from "@/public/slider/imran.png";
import snow from "@/public/slider/snow.png";
import carnival from "@/public/slider/carnival.png";
import ciro from "@/public/slider/ciro.png";
import cabin from "@/public/slider/cabin.png";
import boat from "@/public/slider/boat.png";
import mountain from "@/public/slider/mountain.png";
import venice from "@/public/slider/venice.png";
import jacket from "@/public/slider/jacket.png";
import jitaly from "@/public/slider/jitaly.png";
import italy3 from "@/public/slider/italy3.png";
import chuckle from "@/public/slider/chuckle.png";
import Footer from "@/components/Footer";
import Countdown from "react-countdown";

// Link to docs
// https://keen-slider.io/docs#usage

export default function Home({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;
  const Completionist = () => <p>Welcome to Italy 🇮🇹</p>;
  const weddingDate = new Date(Date.UTC(2023, 8, 9, 14, 0, 0, 0));
  // UTC 2:00pm September 9th 2023

  var now = new Date();
  var future = new Date(
    now.getTime() + 212 * 24 * 60 * 60 * 1000 + 17 * 60 * 60 * 1000 + 23 * 60 * 1000 + 27 * 1000
  );

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
        <h2 className='index__title--invite'>
          8<sup>th</sup>-9<sup>th</sup> September 2023
        </h2>
        <br />
        <Countdown date={weddingDate} renderer={renderer}>
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
            src={boat}
            alt='boat'
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
            src={abba}
            alt='abba'
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
          <Image
            src={snow}
            alt='snow'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={shed}
            alt='shed'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={ciro}
            alt='ciro'
            className='keen-slider__slide number-slidex'
            height={400}
            width={1000}
          />
          <Image
            src={chuckle}
            alt='chuckle'
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
