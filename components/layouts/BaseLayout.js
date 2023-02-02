import Header from "../shared/Header";
import { useRouter } from "next/router";
import { enGB, svSE, itIT } from "@/translations";

const BaseLayout = (props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en-GB" ? enGB : locale === "sv-SE" ? svSE : itIT;

  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default BaseLayout;
