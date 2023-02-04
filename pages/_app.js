import App from "next/app";
import Cookies from "universal-cookie";
import consts from "consts";
import "@/styles/main.scss";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
  <Analytics />;
}

MyApp.getInitialProps = async (appContext) => {
  const cookies =
    appContext.ctx && appContext.ctx.req && appContext.ctx.req.headers
      ? new Cookies(appContext.ctx.req.headers.cookie)
      : new Cookies();

  const password = cookies.get(consts.SiteReadCookie) || "";
  const appProps = await App.getInitialProps(appContext);

  appProps.pageProps.hasReadPermission = password === process.env.NEXT_PUBLIC_PASS;

  return { ...appProps };
};

export default MyApp;
