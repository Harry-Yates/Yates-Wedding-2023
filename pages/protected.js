import Head from "next/head";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import Header from "@/components/shared/Header";
import { enGB, svSE, itIT } from "@/translations";

export default function Protected({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <div>
      <Head>
        <title>Protected Page</title>
      </Head>

      <main>
        <h1>Protected Page</h1>
        <p>{t.welcome}</p>
        <Header />
      </main>
    </div>
  );
}
