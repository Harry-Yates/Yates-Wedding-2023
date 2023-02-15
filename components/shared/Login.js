import { useState } from "react";
import Cookies from "universal-cookie";
import consts from "consts";
import Image from "next/image";
import yatesLogo from "@/public//loginImages/yates-logo.png";
import Head from "next/head";

const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState("");

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
      <form>
        <label className='c-login__label'>
          <Image src={yatesLogo} alt='yates logo' className='c-login-logo' />
          <h1 className='c-login__title'>Guest Area</h1>
          <input
            type='password'
            className='c-login__input'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <button
          type='submit'
          className='btn c-btn--login'
          onClick={(e) => {
            e.preventDefault();
            const cookies = new Cookies();
            cookies.set(consts.SiteReadCookie, password, {
              path: "/"
            });
            window.location.href = redirectPath ?? "/";
          }}>
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
