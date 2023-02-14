import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";
import Footer from "@/components/Footer";
import flowersMain from "@/public/decoration/flowers-main.png.webp";
import Head from "next/head";

export default function Schedule({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      if (!section1Visible && window.pageYOffset > -1) {
        setSection1Visible(true);
      } else if (section1Visible && isScrollingUp) {
        // setSection1Visible(false);
        setSection3Visible(true);
      }

      if (!section2Visible && window.pageYOffset > 50) {
        setSection2Visible(true);
      } else if (section2Visible && isScrollingUp) {
        // setSection2Visible(false);
        setSection3Visible(true);
      }

      if (!section3Visible && window.pageYOffset > 450) {
        setSection3Visible(true);
      } else if (section3Visible && isScrollingUp) {
        // setSection3Visible(false);
        setSection3Visible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [section1Visible, section2Visible, section3Visible, prevScrollPos]);

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <BaseLayout>
      <BasePage>
        <Head>
          <title>Schedule</title>
        </Head>
        <h1 className='page-title'>{t.schedule_title}</h1>
        <div className='flowers-main'>
          <Image src={flowersMain} alt='flowersMain' width='130' />
        </div>

        <section className='event-section'>
          <h2>Friday 8th September</h2>

          <p>
            We want to kick the wedding weekend off with an Apericena by the beautiful Lake of
            Endine.
          </p>

          <p>
            The evening will be hosted at Locanda Del Boscaiolo, one of our favourite local
            restaurants.
          </p>

          <p>
            An evening where we get the chance to meet family & friends, make new acquaintances and
            warm up our dancing shoes. A standing Apericena will be served along with Bubbles and
            Spritz.
          </p>

          <p>When: from 6pm</p>
          <p>
            Where: Locanda Del Boscaiolo, Via Montegrappa, 41, 24060 Monasterolo del Castello BG
          </p>
          <p>Dress code: La Dolce Vita – Italian Riviera / Colourful dresses</p>
          <p>
            Transport: Buses will be organized from Vulcano Village hotel and Hotel SanPancrazio for
            pick up at 5.30pm. Return buses will be arriving for 10.30pm. You will find taxi company
            information under F&Q. There is parking available.
          </p>
        </section>

        <section className={`event-section ${section1Visible ? "visible" : ""}`}>
          <h2>Text</h2>
          <p>LALA</p>
        </section>

        <section className={`event-section ${section2Visible ? "visible" : ""}`}>
          <h2>Text</h2>
          <p>LALA</p>
        </section>

        {/* <section className={`section ${section3Visible ? "visible" : ""}`}>
          <h2 className='page-title-secondary'>Text</h2>
          <p>LALA</p>
        </section> */}
      </BasePage>
      <Footer />
    </BaseLayout>
  );
}
