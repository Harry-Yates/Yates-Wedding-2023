import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";
import Footer from "@/components/Footer";
import hydrangea from "@/public/decoration/hydrangea.png";
import Link from "next/link";

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

      if (!section1Visible && window.pageYOffset > -1) {
        setSection1Visible(true);
      } else if (section1Visible && isScrollingUp) {
        setSection1Visible(false);
      }

      if (!section2Visible && window.pageYOffset > 100) {
        setSection2Visible(true);
      } else if (section2Visible && isScrollingUp) {
        setSection2Visible(false);
      }

      if (!section3Visible && window.pageYOffset > 200) {
        setSection3Visible(true);
      } else if (section3Visible && isScrollingUp) {
        setSection3Visible(false);
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
        <h1>{t.casazza_title}</h1>
        <div className='hydrangea'>
          <Image src={hydrangea} alt='hydrangea' width='50' />
          <Image src={hydrangea} alt='hydrangea' width='100' />
          <Image src={hydrangea} alt='hydrangea' width='50' />
        </div>
        <div className='casazza-container'>
          <section className='casazza-section-start'>
            <h2>Casazza Accomodation</h2>
            <p>We have booked rooms in the following hotels</p>

            <div className='cazazza-hotel-container'>
              <Link
                className='cazazza-hotel-link'
                href='https://vulcanovillage.it/chi-siamo/'
                target={"_blank"}>
                Vulcano Village
              </Link>
              <p>iazza del Porto, 18, 24063 Castro BG</p>
            </div>

            <div className='cazazza-hotel-container'>
              <Link
                className='cazazza-hotel-link'
                href='https://locandadelboscaiolo.it/'
                target={"_blank"}>
                Locanda Del Boscaiolo
              </Link>
              <p>Via Montegrappa, 41, 24060 Monasterolo del Castello BG</p>
            </div>

            <div className='cazazza-hotel-container'>
              <Link
                className='cazazza-hotel-link'
                href='https://www.hotelsanpancrazio.it/en/'
                target={"_blank"}>
                Hotel San Panrazio
              </Link>
              <p>Via Fratelli Calvi, 7, 24069 Trescore Balneario BG</p>
            </div>
          </section>

          <section className={`section ${section1Visible ? "visible" : ""}`}>
            <h2>Section 1</h2>
            <p>This is the first section</p>
          </section>

          <section className={`section ${section2Visible ? "visible" : ""}`}>
            <h2>Section 2</h2>
            <p>This is the second section</p>
          </section>

          {/* <section className={`section ${section3Visible ? "visible" : ""}`}>
            <h2>Section 3</h2>
            <p>This is the third section</p>
          </section> */}
        </div>
        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
