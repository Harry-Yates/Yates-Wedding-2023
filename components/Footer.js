import React from "react";
import { enGB, svSE, itIT } from "@/translations";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import consts from "consts";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  return (
    <footer>
      <div className='container'>
        <div className='container-left'>
          <h3>8-9 September 2023</h3>
          <h3>Colognola Di Casazza, Bergamo</h3>
          <h4>#YatesWedding23</h4>
        </div>
        <div className='container-right'>
          <button
            className='btn'
            id='btn--logout'
            onClick={(e) => {
              e.preventDefault();
              const cookies = new Cookies();
              cookies.remove(consts.SiteReadCookie, { path: "/" });
              window.location.href = "/login";
            }}>
            {t.header_logout}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
