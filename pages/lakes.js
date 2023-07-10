import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";
import Footer from "@/components/Footer";
import flowersMain from "@/public/decoration/flowers-main.png.webp";

export default function ItalianLakes({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  const [activeTab, setActiveTab] = useState("garda");

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <BaseLayout>
      <BasePage>
        <Head>
          <title>{t.lakes_title}</title>
        </Head>
        <h1 className="page-title">{t.lakes_title}</h1>
        <div className="flowers-main">
          <Image
            src={flowersMain}
            alt="flowersMain"
            width="130"
          />
        </div>

        <div className="tabs">
          <button
            className="tab-button"
            onClick={() => setActiveTab("garda")}>
            {t.lakes_Garda_btn}
          </button>
          <button
            className="tab-button"
            onClick={() => setActiveTab("maggiore")}>
            {t.lakes_Maggiore_btn}
          </button>
          <button
            className="tab-button"
            onClick={() => setActiveTab("como")}>
            {t.lakes_Como_btn}
          </button>
          <button
            className="tab-button"
            onClick={() => setActiveTab("iseo")}>
            {t.lakes_Iseo_btn}
          </button>
        </div>

        {activeTab === "garda" && (
          <section>
            <h2>{t.lakes_Garda_title}</h2>
            <p className="p-lakes">{t.lakes_Garda_p1}</p>
            <p className="p-lakes">{t.lakes_Garda_p2}</p>
            <p className="p-lakes">{t.lakes_Garda_p3}</p>
            <p className="p-lakes">{t.lakes_Garda_p4}</p>
            <p className="p-lakes">{t.lakes_Garda_p5}</p>
          </section>
        )}

        {activeTab === "maggiore" && (
          <section>
            <h2>{t.lakes_Maggiore_title}</h2>
            <p className="p-lakes">{t.lakes_Maggiore_p1}</p>
            <p className="p-lakes">{t.lakes_Maggiore_p2}</p>
            <p className="p-lakes">{t.lakes_Maggiore_p3}</p>
            <p className="p-lakes">{t.lakes_Maggiore_p4}</p>
            <p className="p-lakes">{t.lakes_Maggiore_p5}</p>
            <p className="p-lakes">{t.lakes_Maggiore_p6}</p>
            <p className="p-lakes">{t.lakes_Maggiore_p7}</p>
            <p className="p-lakes">{t.lakes_Maggiore_p8}</p>
          </section>
        )}

        {activeTab === "como" && (
          <section>
            <h2>{t.lakes_Como_title}</h2>
            <p className="p-lakes">{t.lakes_Como_p1}</p>
            <p className="p-lakes">{t.lakes_Como_p2}</p>
            <p className="p-lakes">{t.lakes_Como_p3}</p>
            <p className="p-lakes">{t.lakes_Como_p4}</p>
          </section>
        )}

        {activeTab === "iseo" && (
          <section>
            <h2>{t.lakes_Iseo_title}</h2>
            <p className="p-lakes">{t.lakes_Iseo_p1}</p>
            <p className="p-lakes">{t.lakes_Iseo_p2}</p>
            <p className="p-lakes">{t.lakes_Iseo_p3}</p>
          </section>
        )}

        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
