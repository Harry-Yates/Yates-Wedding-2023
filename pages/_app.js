import App from "next/app";
import Cookies from "universal-cookie";
import consts from "consts";
import "@/styles/main.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  const cookies =
    appContext.ctx && appContext.ctx.req && appContext.ctx.req.headers
      ? new Cookies(appContext.ctx.req.headers.cookie)
      : new Cookies();

  const password = cookies.get(consts.SiteReadCookie) || "";
  const appProps = await App.getInitialProps(appContext);

  appProps.pageProps.hasReadPermission = password === process.env.DB_PASS;

  return { ...appProps };
};

export default MyApp;
