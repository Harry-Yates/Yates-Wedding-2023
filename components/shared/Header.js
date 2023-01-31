import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { locale, locales, push, pathname } = useRouter();

  const handleClick = (l) => () => {
    push(pathname, undefined, { locale: l });
  };

  return (
    <>
      <h1>{locale}</h1>
      {/* {locales.map((l) => (
        <button key={l} onClick={handleClick(l)}>
          {l}
        </button>
      ))} */}
      <Link href='/'>Home</Link>
      <Link href='/faq'>faq</Link>
      <Link href='/rspv'>rspv</Link>
      <Link href='/schedule'>schedule</Link>
      <Link href='/travel'>travel</Link>
    </>
  );
}
