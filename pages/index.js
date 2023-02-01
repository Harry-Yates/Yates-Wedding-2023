import Head from "next/head";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import Header from "@/components/shared/Header";
import { enGB, svSE, itIT } from "@/translations";

export default function Home({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  const handleLanguageToggle = (e) => {
    router.push("/", "/", { locale: e.target.value });
  };

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <h1>Home Page</h1>
        <p>{t.welcome}</p>
        <Header />
        <select value={locale} onChange={handleLanguageToggle}>
          <option value='en-GB'>GB 🇬🇧</option>
          <option value='sv-SE'>SE 🇸🇪</option>
          <option value='it-IT'>IT 🇮🇹</option>
        </select>
      </main>
    </div>
  );
}
