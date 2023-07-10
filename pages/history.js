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

  const [activeTab, setActiveTab] = useState("church");

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <BaseLayout>
      <BasePage>
        <Head>
          <title>{t.history_title}</title>
        </Head>
        <h1 className="page-title">{t.history_title}</h1>
        <div className="flowers-main">
          <Image
            src={flowersMain}
            alt="flowersMain"
            width="130"
          />
        </div>

        <div className="tabs-history">
          <button
            className="tab-history-button"
            onClick={() => setActiveTab("church")}>
            {t.history_church_btn}
          </button>
          <button
            className="tab-history-button"
            onClick={() => setActiveTab("casazza")}>
            {t.history_casazza_btn}
          </button>
          <button
            className="tab-history-button"
            onClick={() => setActiveTab("cly")}>
            {t.history_cly_btn}
          </button>
          <button
            className="tab-history-button"
            onClick={() => setActiveTab("colognola")}>
            {t.history_colognola_btn}
          </button>
          <button
            className="tab-history-button"
            onClick={() => setActiveTab("tower")}>
            {t.history_tower_btn}
          </button>
          <button
            className="tab-history-button"
            onClick={() => setActiveTab("suardi")}>
            {t.history_suardi_btn}
          </button>
          <button
            className="tab-history-button"
            onClick={() => setActiveTab("lodi")}>
            {t.history_lodi_btn}
          </button>
        </div>

        {activeTab === "church" && (
          <section>
            <h2>{t.history_church_title}</h2>
            <p className="p-history">{t.history_church_p1}</p>
            <p className="p-history">{t.history_church_p2}</p>
            <p className="p-history">{t.history_church_p3}</p>
            <p className="p-history">{t.history_church_p4}</p>
            <p className="p-history">{t.history_church_p5}</p>
            <p className="p-history">{t.history_church_p6}</p>
            <p className="p-history">{t.history_church_p7}</p>
            <p className="p-history">{t.history_church_p8}</p>
            <p className="p-history">{t.history_church_p9}</p>
            <p className="p-history">{t.history_church_p10}</p>
            <p className="p-history">{t.history_church_p11}</p>
          </section>
        )}

        {activeTab === "casazza" && (
          <section>
            <h2>{t.history_casazza_title}</h2>
            <p className="p-history">{t.history_casazza_p1}</p>
            <p className="p-history">{t.history_casazza_p2}</p>
            <p className="p-history">{t.history_casazza_p3}</p>
            <p className="p-history">{t.history_casazza_p4}</p>
          </section>
        )}

        {activeTab === "cly" && (
          <section>
            <h2>{t.history_cly_title}</h2>
            <p className="p-history">{t.history_cly_p1}</p>
            <p className="p-history">{t.history_cly_p2}</p>
            <p className="p-history">{t.history_cly_p3}</p>
            <p className="p-history">{t.history_cly_p4}</p>
            <p className="p-history">{t.history_cly_p5}</p>
          </section>
        )}

        {activeTab === "colognola" && (
          <section>
            <h2>{t.history_colognola_title}</h2>
            <p className="p-history">{t.history_colognola_p1}</p>
            <p className="p-history">{t.history_colognola_p2}</p>
          </section>
        )}

        {activeTab === "tower" && (
          <section>
            <h2>{t.history_tower_title}</h2>
            <p className="p-history">{t.history_tower_p1}</p>
            <p className="p-history">{t.history_tower_p2}</p>
            <p className="p-history">{t.history_tower_p3}</p>
            <p className="p-history">{t.history_tower_p4}</p>
            <p className="p-history">{t.history_tower_p5}</p>
          </section>
        )}

        {activeTab === "suardi" && (
          <section>
            <h2>{t.history_suardi_title}</h2>
            <p className="p-history">{t.history_suardi_p1}</p>
            <p className="p-history">{t.history_suardi_p2}</p>
            <p className="p-history">{t.history_suardi_p3}</p>
            <p className="p-history">{t.history_suardi_p4}</p>
            <p className="p-history">{t.history_suardi_p5}</p>
          </section>
        )}

        {activeTab === "lodi" && (
          <section>
            <h2>{t.history_lodi_title}</h2>
            <p>{t.history_lodi_p1}</p>
            <p>{t.history_lodi_p2}</p>
            <p>{t.history_lodi_p3}</p>
            <p>{t.history_lodi_p4}</p>
            <p>{t.history_lodi_p5}</p>
          </section>
        )}

        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
