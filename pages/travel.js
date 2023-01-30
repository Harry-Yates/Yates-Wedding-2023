import Head from "next/head"
import { useRouter } from "next/router"
import Login from "@/components/shared/Login"
import Header from "@/components/shared/Header"

export default function Travel({ hasReadPermission }) {

	const router = useRouter()

	if (!hasReadPermission) {
		return <Login redirectPath={router.asPath} />
	  }

  return (
    <div>
      <Head>
        <title>Travel Page</title>
      </Head>

      <main><h1>Travel Page</h1><Header /></main>
    </div>
  )
}