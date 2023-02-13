import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";
import Footer from "@/components/Footer";
import flowersMain from "@/public/decoration/flowers-main.png";
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

      if (!section2Visible && window.pageYOffset > 100) {
        setSection2Visible(true);
      } else if (section2Visible && isScrollingUp) {
        // setSection2Visible(false);
        setSection3Visible(true);
      }

      if (!section3Visible && window.pageYOffset > 200) {
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

        <div className='icon-scroll'>
          <div className='mouse'>
            <div className='wheel'></div>
          </div>
        </div>

        <div className='casazza-container'>
          <section className='cazazza-hotel-container'>
            <h2>Accomodation</h2>

            <div className='cazazza-hotel-family' id='cazazza-hotel-family'>
              <h3>We have booked rooms in the following hotels</h3>
              <br />
              <li className='white-helper'>
                <Link
                  id='white-helper'
                  className='cazazza-hotel-link shake'
                  href='https://www.hotelsanpancrazio.it/en/'
                  target={"_blank"}>
                  Hotel San Panrazio*
                </Link>
              </li>
              <p>Via Fratelli Calvi, 7, 24069 Trescore Balneario BG</p>
              <br />

              <p>
                *When reserving your room please mention <b>‘Yates Wedding’</b> for the staff to know
                you are a part of our event.
              </p>
            </div>

            <div className='cazazza-hotel-family'>
              <h3>We have reserved this hotel for the wedding party</h3>
              <p>We will reach out to you individually about this hotel</p>

              <div className='cazazza-hotel'>
                <li>
                  <Link
                    className='cazazza-hotel-link'
                    id='white'
                    href='https://vulcanovillage.it/chi-siamo/'
                    target={"_blank"}>
                    Vulcano Village
                  </Link>
                </li>
                <p>Piazza del Porto, 18, 24063 Castro BG</p>
              </div>
            </div>
            <div className='cazazza-hotel-family'>
              <h3>We have reserved this hotels for family.</h3>
              <p>We will reach out to you individually about this hotel</p>
              <div className='cazazza-hotel'>
                <li>
                  <Link
                    className='cazazza-hotel-link'
                    id='white'
                    href='https://locandadelboscaiolo.it/'
                    target={"_blank"}>
                    Locanda Del Boscaiolo
                  </Link>
                </li>
                <p>Via Montegrappa, 41, 24060 Monasterolo del Castello BG</p>
              </div>
            </div>

            <div className='cazassa-hotel--details'>
              <p>We will be organizing transport from these hotels to venues.</p>
              <br />
              <p>There are many other beautiful hotels and B&Bs in the area</p>
              <p>however we will not be able to support with transport from other Hotels. </p>
            </div>
          </section>

          <section className={`section ${section1Visible ? "visible" : ""}`}>
            <h2>Getting There</h2>
            <p>
              The most convenient airport for your travels will be <b>Bergamo Airport (BGY)</b>.
              <br />
              Then you can continue by car, taxi or bus to your hotel.
            </p>
            <br />
            <p>
              Other airports that are also convenient are <br /> <b>Milano Linate (LIN)</b> or{" "}
              <b>Malpensa Airport (MXP)</b>.
            </p>
          </section>

          <section className={`section ${section2Visible ? "visible" : ""}`}>
            <h2>Site Map</h2>
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
