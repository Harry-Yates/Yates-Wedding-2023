import Head from "next/head";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import Header from "@/components/shared/Header";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const RSPV = ({ hasReadPermission }) => {
  const { locale, locales, push, router } = useRouter();

  const { t } = useTranslation("copy");

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <div>
      <Head>
        <title>RSPV Page</title>
      </Head>
      <main>
        <h2>{t("hello world")}</h2>
        <h1>RSPV Page</h1> <Header />
      </main>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "copy"], null, [
        "en_GB",
        "sv_SE",
        "it_IT"
      ]))
    }
  };
}

export default RSPV;
