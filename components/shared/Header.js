import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { locale, locales, push, pathname } = useRouter();

  const handleClick = (l) => () => {
    push(pathname, undefined, { locale: l, shallow: true });
  };

  const changeLanguage = (event) => {
    const l = event.target.value;
    push(pathname, undefined, { locale: l, shallow: true });
  };

  return (
    <>
      <h1>{locale}</h1>
      <Link href='/'>Home</Link>
      <Link href='/faq'>faq</Link>
      <Link href='/rspv'>rspv</Link>
      <Link href='/schedule'>schedule</Link>
      <Link href='/travel'>travel</Link>
      <div>
        {locales.map((l) => (
          <button key={l} onClick={handleClick(l)}>
            {l}
          </button>
        ))}
      </div>
      <select defaultValue={locale} onChange={changeLanguage}>
        <option value='en_GB'>EN</option>
        <option value='sv_SE'>SE</option>
        <option value='it_IT'>IT</option>
      </select>
    </>
  );
}
