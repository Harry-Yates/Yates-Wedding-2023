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

      if (!section1Visible && window.pageYOffset > 1) {
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

      if (!section3Visible && window.pageYOffset > 400) {
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

        <div className='schedule-container'>
          <section className='event-section-one'>
            <h2>{t.schedule_title_one}</h2>

            <p>{t.schedule_section_details_a}</p>

            <p>{t.schedule_section_details_b}</p>

            <p>{t.schedule_section_details_c}</p>
            <h3>{t.schedule_section_when}</h3>
            <p>{t.schedule_section_time}</p>
            <h3>{t.schedule_section_where}</h3>
            <p>{t.schedule_section_location}</p>
            <h3>{t.schedule_section_dresscode}</h3>
            <p>{t.schedule_section_theme}</p>
            <h3>{t.schedule_section_transport}</h3>
            <p>{t.schedule_section_Travel}</p>
          </section>

          <section className={`event-section ${section2Visible ? "visible" : ""}`}>
            <h2>{t.schedule_title_two}</h2>
            <h2>{t.schedule_title_two_title}</h2>

            <p>{t.schedule_title_two_address}</p>
            <p>{t.schedule_title_two_after}</p>

            <h3>{t.schedule_section_when}</h3>
            <p>2pm</p>

            <h3>{t.schedule_section_where}</h3>
            <p className='church-helepr'>{t.schedule_title_two_addresstwo}</p>

            <h3>{t.schedule_section_dresscode}</h3>
            <p>{t.schedule_title_two_dresscodesemi}</p>
            <h3>{t.schedule_section_transport}</h3>
            <p>{t.schedule_title_two_busses}</p>
            <p>{t.schedule_title_two_bussdeparts}</p>

            {/* <p>{t.schedule_title_two_house}</p>
            <p>{t.schedule_title_two_house_location}</p> */}
            {/* <p>{t.house_address}</p> */}
          </section>

          <section className={`event-section ${section3Visible ? "visible" : ""}`}>
            <h2>{t.schedule_title_reception_title}</h2>
            <p>{t.schedule_title_reception_after}</p>
            <p>{t.schedule_title_reception_dinner}</p>
            <h3>{t.schedule_section_when}</h3>
            <p>4:30pm</p>

            <h3>{t.schedule_section_where}</h3>
            <p>{t.house_address}</p>

            <h3>{t.schedule_section_dresscode}</h3>
            <p>{t.schedule_title_two_dresscodesemi}</p>

            <span>{t.speach}</span>
          </section>
        </div>
        {/* <section className={`event-section ${section2Visible ? "visible" : ""}`}>
          <h2>Text</h2>
          <p>LALA</p>
        </section> */}

        {/* <section className={`section ${section3Visible ? "visible" : ""}`}>
          <h2 className='page-title-secondary'>Text</h2>
          <p>LALA</p>
        </section> */}
      </BasePage>
      <Footer />
    </BaseLayout>
  );
}
