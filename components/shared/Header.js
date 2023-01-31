import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  // const { locale, locales, push, pathname } = useRouter();
  const router = useRouter();
  return (
    <>
      <Link href='/'>Home</Link>
      <Link href='/faq'>faq</Link>
      <Link href='/rspv'>rspv</Link>
      <Link href='/schedule'>schedule</Link>
      <Link href='/travel'>travel</Link>
    </>
  );
}
