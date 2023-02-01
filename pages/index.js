import Head from "next/head";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import Header from "@/components/shared/Header";
import { enGB, svSE } from "@/translations";

export default function Home({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en-GB" ? enGB : svSE;

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  const handleLanguageToggle = () => {
    switch (locale) {
      case "en-GB":
        router.push("/", "/", { locale: "sv-SE" });
        break;
      case "sv-SE":
        router.push("/", "/", { locale: "en-GB" });
        break;
    }
  };

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <h1>Home Page</h1>
        <p>{t.welcome}</p>
        <p onClick={handleLanguageToggle}>{locale}</p>
        <Header />
      </main>
    </div>
  );
}
