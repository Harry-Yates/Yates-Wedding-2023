import Head from "next/head";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import Header from "@/components/shared/Header";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = ({ hasReadPermission }) => {
  const { locale, locales, push, router } = useRouter();

  const { t } = useTranslation("copy");

  if (!hasReadPermission) {
    return <Login redirectPath={router?.asPath} />;
  }

  const handleClick = (l) => () => {
    push("/", undefined, { locale: l });
  };

  const changeLanguage = (event) => {
    const l = event.target.value;
    push("/", undefined, { locale: l });
  };

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <h1>Home Page</h1>
        <h2>{t("hello world")}</h2>
        {/* <div>
          {locales.map((l) => (
            <button key={l} onClick={handleClick(l)}>
              {l}
            </button>
          ))}
        </div> */}
        <select defaultValue={locale} onChange={changeLanguage}>
          <option value='en_GB'>EN</option>
          <option value='sv_SE'>SE</option>
          <option value='it_IT'>IT</option>
        </select>
        <Header />
      </main>
    </div>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["copy"]))
    }
  };
}

export default Home;
