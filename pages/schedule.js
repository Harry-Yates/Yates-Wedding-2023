import { useRouter } from "next/router";
import Image from "next/image";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";
import Footer from "@/components/Footer";
import hydrangea from "@/public/decoration/hydrangea.png";

export default function Schedule({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <BaseLayout>
      <BasePage>
        <h1>{t.schedule_title}</h1>
        <div className='hydrangea' >
          <Image  src={hydrangea} alt='hydrangea' width='50' />
          <Image  src={hydrangea} alt='hydrangea' width='100' />
          <Image  src={hydrangea} alt='hydrangea' width='50' />
        </div>
      </BasePage>
      <Footer />
    </BaseLayout>
  );
}
