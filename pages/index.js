import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import { enGB, svSE, itIT } from "@/translations";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

export default function Home({ hasReadPermission }) {
  const router = useRouter();
  const { locale } = router;

  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  const handleLanguageToggle = (e) => {
    router.push("/", "/", { locale: e.target.value });
  };

  return (
    <BaseLayout>
      <BasePage>
        <select value={locale} onChange={handleLanguageToggle}>
          <option value='en-GB'>GB 🇬🇧</option>
          <option value='sv-SE'>SE 🇸🇪</option>
          <option value='it-IT'>IT 🇮🇹</option>
        </select>
        <h1>{t.homePageTitle}</h1>
      </BasePage>
    </BaseLayout>
  );
}
