import Link from "next/link";
import { enGB, svSE, itIT } from "@/translations";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

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
