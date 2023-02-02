import { useState } from "react";
import Link from "next/link";
import { enGB, svSE, itIT } from "@/translations";
import { useRouter } from "next/router";

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
        <Link href='/'>{t.welcome} </Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link href='/faq'>faq</Link>
        </li>
        <li>
          <Link href='/rspv'>RSVP</Link>
        </li>
        <li>
          <Link href='/schedule'>Schedule</Link>
        </li>
        <li>
          <Link href='/travel'>Casazza</Link>
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
