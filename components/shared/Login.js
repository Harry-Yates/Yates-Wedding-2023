import { useState } from "react";
import Cookies from "universal-cookie";
import consts from "consts";
import Image from "next/image";
import yatesLogo from "@/public//loginImages/yates-logo.png";

const Login = ({ redirectPath }) => {
  const [password, setPassword] = useState("");

  return (
    <div className='c-login'>
      <form>
        <label className='c-login__label'>
          <Image src={yatesLogo} alt='yates logo' className='c-login-logo' />
          <h1 className='c-login__title'>Guest Area</h1>
          <input
            type='text'
            className='c-login__input'
            placeholder='Enter rspv password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <button
          type='submit'
          className='c-btn c-btn--login'
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
  );
};

export default Login;
