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

export default function Casazza({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <BaseLayout>
      <BasePage>
        <Head>
          <title>Casazza</title>
        </Head>
        <h1 className='page-title'>{t.registry_title}</h1>
        <div className='flowers-main'>
          <Image src={flowersMain} alt='flowersMain' width='130' />
        </div>
        <div className='registry-container'>
          <p>{t.registry_link_copy_one}</p>
          <p>{t.registry_link_copy_two}</p>
        </div>
        <div className='cazazza-hotel'>
          <li id='green'>
            <Link
              className='cazazza-hotel-link'
              // id='white'
              href='https://www.honeyfund.com/site/blomstedt-nelson-yates-09-09-2023'
              target={"_blank"}>
              {t.registry_link_name}
            </Link>
          </li>
        </div>
        <div className='registry-container'></div>
        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
