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
        <div className='container-left '>
          <h4>
            8<sup>th</sup>-9<sup>th</sup> {t.home_footer_title_date} 2023
          </h4>
          <h4>Colognola Di Casazza, Italy</h4>
          <h5>#YatesWedding23</h5>
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
