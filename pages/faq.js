import Head from "next/head";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import Header from "@/components/shared/Header";

export default function FAQ({ hasReadPermission }) {
  const router = useRouter();

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <div>
      <Head>
        <title>FAQ Page</title>
      </Head>

      <main>
        <h1>FAQ Page</h1>
        <Header />
      </main>
    </div>
  );
}
