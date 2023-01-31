import { appWithTranslation } from "next-i18next";
import App from "next/app";
import Cookies from "universal-cookie";
import consts from "consts";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const cookies =
    appContext.ctx && appContext.ctx.req && appContext.ctx.req.headers
      ? new Cookies(appContext.ctx.req.headers.cookie)
      : new Cookies();

  const password = cookies.get(consts.SiteReadCookie) || undefined;
  const appProps = await App.getInitialProps(appContext);

  appProps.pageProps.hasReadPermission = password === "italy";

  return { ...appProps };
};

export default appWithTranslation(MyApp);
