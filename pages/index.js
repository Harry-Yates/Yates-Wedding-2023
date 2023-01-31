import Head from "next/head";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import Header from "@/components/shared/Header";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = ({ hasReadPermission }) => {
  const router = useRouter();

  const { t } = useTranslation("copy");

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <h2>{t("hello world")}</h2>
        <h1>Home Page</h1> <Header />
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

export default Home;
