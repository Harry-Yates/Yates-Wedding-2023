import Head from "next/head";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import Header from "@/components/shared/Header";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const FAQ = ({ hasReadPermission }) => {
  const router = useRouter();

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <div>
      <Head>
        <title>FAQ Page</title>
      </Head>
      <main>
        <h2>{t("hello world")}</h2>
        <h1>FAQ Page</h1> <Header />
      </main>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["copy"]))
    }
  };
}

export default FAQ;
