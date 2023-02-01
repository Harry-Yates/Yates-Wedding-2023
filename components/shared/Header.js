import { useState } from "react";
import Link from "next/link";
import { enGB, svSE, itIT } from "@/translations";
import { useRouter } from "next/router";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className='containerLeft'></div>
      <div className='containerCenter'>
        <Link href='/'>
          <h1 className='navbar-logo'>Harry & Johanna</h1>
        </Link>
        <div>
          <div className='menu-icon' onClick={() => setIsOpen(!isOpen)}>
            <i>{isOpen ? <FaTimes /> : <FaBars />}</i>
          </div>
          <div className={!isOpen ? "nav-menu-active" : "nav-menu"}>
            <ul className={!isOpen ? "nav-menu-active" : "nav-menu"}>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/faq'>faq</Link>
              </li>
              <li>
                <Link href='/rspv'>rspv</Link>
              </li>
              <li>
                <Link href='/schedule'>schedule</Link>
              </li>
              <li>
                <Link href='/travel'>travel</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='containerRight'></div>
    </nav>
  );
}
