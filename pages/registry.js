import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";
import Footer from "@/components/Footer";

export default function Casazza({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <BaseLayout>
      <BasePage>
        <Head>
          <title>Registry</title>
        </Head>
        {isLoading && <div className='loader'>Loading...</div>}
        <iframe
          src='https://www.honeyfund.com/site/blomstedt-nelson-yates-09-09-2023'
          title='Example Website'
          width='100%'
          height='1000'
          frameBorder='0'
          allowFullScreen
          onLoad={handleLoad}></iframe>
        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
