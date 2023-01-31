import Head from "next/head";
import { useRouter } from "next/router";
import Login from "@/components/shared/Login";
import Header from "@/components/shared/Header";

export default function Home({ hasReadPermission }) {
  const router = useRouter();

  if (!hasReadPermission) {
    return <Login redirectPath={router.asPath} />;
  }

  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <h1>Home Page</h1>
        <Header />
      </main>
    </div>
  );
}
