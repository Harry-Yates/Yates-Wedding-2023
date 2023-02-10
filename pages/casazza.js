import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";
import Footer from "@/components/Footer";
import hydrangea from "@/public/decoration/hydrangea.png";

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
            <h2>Section 0</h2>
            <p>This is the first section</p>
          </section>

          <section className={`section ${section1Visible ? "visible" : ""}`}>
            <h2>Section 1</h2>
            <p>This is the first section</p>
          </section>

          <section className={`section ${section2Visible ? "visible" : ""}`}>
            <h2>Section 2</h2>
            <p>This is the second section</p>
          </section>

          <section className={`section ${section3Visible ? "visible" : ""}`}>
            <h2>Section 3</h2>
            <p>This is the third section</p>
          </section>
        </div>
        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
