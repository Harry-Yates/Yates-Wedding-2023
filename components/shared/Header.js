import Link from "next/link";
import { enGB, svSE, itIT } from "@/translations";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Countdown from "react-countdown";

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;
  const [showCountdown, setShowCountdown] = useState(false);
  const weddingDate = new Date(Date.UTC(2023, 8, 9, 14, 0, 0, 0));
  const Completionist = () => <p>Welcome to Italy 🇮🇹</p>;

  var now = new Date();
  var future = new Date(
    now.getTime() + 212 * 24 * 60 * 60 * 1000 + 17 * 60 * 60 * 1000 + 23 * 60 * 1000 + 27 * 1000
  );

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <span>
        {days} {t.header_countdown_days}, {hours} {t.header_countdown_hours}, {minutes}{" "}
        {t.header_countdown_minutes}, {seconds} {t.header_countdown_seconds}.
      </span>
    );
  };

  function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    // UTC 2:00pm September 9th 2023

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

  useEffect(() => {
    setShowCountdown(true);
  }, []);

  if (!showCountdown) return null;

  return (
    //  Nav Bar
    <nav>
      {/* <div className='logo'>
        <Link href='/'>{t.header_title}</Link>
      </div> */}
      <div className='logo'>
        <Link href='/'>
          <Countdown date={weddingDate} renderer={renderer}>
            <Completionist />
          </Countdown>
        </Link>
      </div>
      <ul className='nav-links'>
        <li>
          <Link href='/'>{t.header_welcome}</Link>
        </li>
        <li>
          <Link href='/faq'>{t.faq_title}</Link>
        </li>
        <li>
          <Link href='/schedule'>{t.schedule_title}</Link>
        </li>
        <li>
          <Link href='/casazza'>{t.casazza_title}</Link>
        </li>
        <li id='highlight'>
          <Link href='/rsvp' className='colorHigh'>
            {t.rsvp_title}
          </Link>
        </li>
        {/* <li>
          <Link href='/photos'>Photos</Link>
        </li> */}
        {/* <li>
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
        </li> */}
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
