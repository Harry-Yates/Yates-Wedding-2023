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
        <Header />
        <h1>Protected Page</h1>
        <br />
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
        <ul>
          <li>list item</li>
          <li>list item</li>
        </ul>
        <p>Paragraph</p>
        <a href=''>Link 1</a>
        <br />
        <a href=''>Link 2</a>
      </main>
    </div>
  );
}
