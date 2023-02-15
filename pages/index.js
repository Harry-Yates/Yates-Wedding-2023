import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import { enGB, svSE, itIT } from "@/translations";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import Image from "next/image";
import Footer from "@/components/Footer";
// import Map from "@/components/shared/Map";
import Head from "next/head";
import flowersMain from "@/public/decoration/flowers-main.png.webp";

import Slider from "../components/shared/Slider";
// Link to docs
// https://keen-slider.io/docs#usage

export default function Home({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  const handleLanguageToggle = (e) => {
    router.push("/", "/", { locale: e.target.value });
  };

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <>
        <Head>
        <title>#MB2</title>
                <meta name="title" content="#MB2" />
                <meta
                    name="description"
                    content="MB2 is a series of art vinyl toys, with limited quantities available. "
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mb2.vercel.app/" />
                <meta property="og:title" content="#MB2" />
                <meta
                    property="og:description"
                    content="MB2 is a series of art vinyl toys, with limited quantities available."
                />
                <meta
                    property="og:image"
                    content="https://user-images.githubusercontent.com/82885837/187440582-baa60537-da05-4b6e-8915-19bf8378630e.png"
                />

                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://mb2.vercel.app/"
                />
                <meta property="twitter:title" content="#MB2" />
                <meta
                    property="twitter:description"
                    content="MB2 is a series of art vinyl toys, with limited quantities available."
                />
                <meta
                    property="twitter:image"
                    content="https://user-images.githubusercontent.com/82885837/187440582-baa60537-da05-4b6e-8915-19bf8378630e.png"
                />


            {/* Flavicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>


    <BaseLayout>
      <BasePage>

        <select value={locale} onChange={handleLanguageToggle}>
          <option value="en-GB">GB 🇬🇧</option>
          <option value="sv-SE">SE 🇸🇪</option>
          <option value="it-IT">IT 🇮🇹</option>
        </select>
        {/* <h1 className="index__title">Welcome</h1> */}
        <div className="index__title--nameContainer">
          {/* <h2 className="index__title--name ohhfancy">Johanna & Harry</h2> */}
          <h2 className="index__title--name ohhfancy title-style">Johanna</h2>
          <h2 className="index__title--name ohhfancy title-style sign">{t.home_title_and}</h2>
          <h2 className="index__title--name ohhfancy title-style">Harry</h2>
        </div>
        <h2 className="index__title--invite ohhfancy-medium">{t.home_title_invite}</h2>

        <h2 className="index__title--invite ohhfancy-medium">
          8<sup>th</sup> – 9<sup>th</sup> {t.home_footer_title_date}
        </h2>
        {/* <h2 className="index__title--invite ohhfancy-tiny">in</h2> */}
        <h2 className="index__title--invite ohhfancy-tiny">Colognola di Casazza, Italy</h2>

        <div className="flowers-main">
          <Image src={flowersMain} alt="flowersMain" width="130" priority />
        </div>
        <Slider/>
        {/* <Map /> */}
        <Footer />
      </BasePage>
    </BaseLayout>
    </>
  );
}
