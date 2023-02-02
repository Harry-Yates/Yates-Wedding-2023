import { useState } from "react";
import Link from "next/link";
import { enGB, svSE, itIT } from "@/translations";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";
import consts from "consts";

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  }

  return (
    //  Nav Bar
    <nav>
      <div className='logo'>
        <Link href='/'>{t.headerTitle}</Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link href='/faq'>{t.faqPageTitle}</Link>
        </li>
        <li>
          <Link href='/schedule'>{t.schedulePageTitle}</Link>
        </li>
        <li>
          <Link href='/travel'>{t.travelPageTitle}</Link>
        </li>
        <li id='highlight'>
          <Link href='/rsvp' className='colorHigh'>
            {t.rsvpPageTitle}
          </Link>
        </li>
        <li>
          <button
            className='btn'
            id='btn--logout'
            onClick={(e) => {
              e.preventDefault();
              const cookies = new Cookies();
              cookies.remove(consts.SiteReadCookie, { path: "/" });
              window.location.href = "/login";
            }}>
            Logout
          </button>
        </li>
      </ul>
      {/* Burger Menu */}
      <div className='burger' onClick={navSlide}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
}

{
  /* <Link href='/faq'>faq</Link> */
}
