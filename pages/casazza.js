import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import BaseLayout from "@/components/layouts/BaseLayout";
import { enGB, svSE, itIT } from "@/translations";
import BasePage from "../components/BasePage";
import Footer from "@/components/Footer";

export default function Casazza({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <BaseLayout>
      <BasePage>
        <h1>{t.casazza_title}</h1>
        <p>{t.welcome}</p>
        <Footer />
      </BasePage>
    </BaseLayout>
  );
}
