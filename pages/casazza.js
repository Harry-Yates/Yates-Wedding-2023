import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";
import Footer from "@/components/Footer";
import flowersMain from "@/public/decoration/flowers-main.png.webp";
import Link from "next/link";
import Map from "@/components/shared/Map";

export default function Casazza({ hasReadPermission }) {
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

      if (!section1Visible && window.pageYOffset > 0) {
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
          <title>Casazza</title>
        </Head>
        <h1 className='page-title'>{t.casazza_title}</h1>
        <div className='flowers-main'>
          <Image src={flowersMain} alt='flowersMain' width='130' />
        </div>

        {/* <div className='icon-scroll'>
          <div className='mouse'>
            <div className='wheel'></div>
          </div>
        </div> */}

        <div className='casazza-container'>
          <section className='cazazza-hotel-container'>
            <h2 className='page-title-secondary'>{t.casazza_header}</h2>
            <h3 className='margin'>{t.casazza_booking_title}</h3>
            <div className='cazazza-hotel-family' id='cazazza-hotel-family'>
              <br />
              <li className='white-helper'>
                <Link
                  id='white-helper'
                  className='cazazza-hotel-link shake'
                  href='https://www.hotelsanpancrazio.it/en/'
                  target={"_blank"}>
                  {t.casazza_hotel_one}*
                </Link>
              </li>
              <p>{t.casazza_hotel_address}</p>
              <br />

              <p>*{t.casazza_mention_one}</p>
              <p>
                <b>‘Yates Wedding’</b>
              </p>
              <p>{t.casazza_mention_two}</p>
            </div>

            <div className='cazazza-hotel'>
              <h3>{t.casazza_transport_a}</h3>
              <p>{t.casazza_transport_b}</p>

              <div className='cazazza-hotel'>
                <li id='green'>
                  <Link
                    className='cazazza-hotel-link'
                    // id='white'
                    href='https://vulcanovillage.it/chi-siamo/'
                    target={"_blank"}>
                    {t.casazza_hotel_two}
                  </Link>
                </li>
                <p>{t.casazza_hotel_address_two}</p>
              </div>
              <div className='cazazza-hotel'>
                <li id='green'>
                  <Link
                    className='cazazza-hotel-link'
                    // id='white'
                    href='https://locandadelboscaiolo.it/'
                    target={"_blank"}>
                    {t.casazza_hotel_three}
                  </Link>
                </li>
                <p>{t.casazza_hotel_address_three}</p>
              </div>
            </div>

            <div className='cazassa-hotel--details'>
              <p>{t.casazza_hotel_details_a}</p>
              <p>{t.casazza_hotel_details_b}</p>
              <p>{t.casazza_hotel_details_c}</p>
            </div>
          </section>

          <section className={`section ${section1Visible ? "visible" : ""}`}>
            <h2 className='page-title-secondary'>{t.casazza_flights_title}</h2>
            <p>{t.casazza_flights_header}</p>
            <h3 className='airport'>Bergamo {t.casazza_flights_airport} (BGY)</h3>
            {/* <b>Bergamo Airport (BGY)</b>. */}
            <br />
            <p>{t.casazza_flights_method}</p>
            <br />
            {t.casazza_flights_other}
            <div>
              <h3 className='airport'>Milano Linate (LIN)</h3>
              <p className='airport'> {t.casazza_flights_or} </p>
              <h3 className='airport'>Malpensa {t.casazza_flights_airport} (MXP)</h3>
            </div>
          </section>

          <section className={`section ${section2Visible ? "visible" : ""}`}>
            <h2>{t.casazza_flights_title_two}</h2>
            <Map />
          </section>

          {/* <section className={`section ${section3Visible ? "visible" : ""}`}>
            <h2>History of Casazza</h2>
            <p>This is the third section</p>
          </section> */}
        </div>
        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
