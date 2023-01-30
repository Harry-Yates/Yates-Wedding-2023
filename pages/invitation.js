import Head from "next/head"
import { useRouter } from "next/router"
import Login from "@/components/shared/Login"
import Header from "@/components/shared/Header"

export default function Invitation({ hasReadPermission }) {

	const router = useRouter()

	if (!hasReadPermission) {
		return <Login redirectPath={router.asPath} />
	  }

  return (
    <div>
      <Head>
        <title>Invitation Page</title>
      </Head>

      <main><h1>Invitation Page</h1><Header /></main>
    </div>
  )
}