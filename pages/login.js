import Cookies from "universal-cookie";
import Login from "@/components/shared/Login";
import consts from "consts";
import Head from "next/head";

export default function LoginPage({ hasReadPermission }) {
  if (hasReadPermission) {
    return (
      <>
      <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.yates-wedding.com/" />
          <meta property="og:title" content="Yates Wedding 2023" />
          <meta
            property="og:description"
            content=" 8th-9th September | Colognola di Casazza, Italy"
          />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/82885837/219110043-a29bdd1f-afc6-4612-b423-113f30c15a7f.png"
          />

          <title>Yates Wedding 2023</title>
          <meta name="title" content="Yates Wedding 2023" />
          <meta name="description" content=" 8th-9th September | Colognola di Casazza, Italy" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.yates-wedding.com/" />
          <meta property="twitter:title" content="Yates Wedding 2023" />
          <meta
            property="twitter:description"
            content=" 8th-9th September | Colognola di Casazza, Italy"
          />
          <meta
            property="twitter:image"
            content="https://user-images.githubusercontent.com/82885837/219110043-a29bdd1f-afc6-4612-b423-113f30c15a7f.png" />
        </Head>
        <div className='c-login'>
          {/* <h1 className='c-login__title'>Thank you</h1> */}
          <button
            className='btn'
            onClick={(e) => {
              e.preventDefault();
              const cookies = new Cookies();
              cookies.remove(consts.SiteReadCookie, { path: "/" });
              window.location.href = "/login";
            }}>
            Logout
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Login redirectPath='/' />
    </>
  );
}
