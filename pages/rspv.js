import Head from "next/head"
import { useRouter } from "next/router"
import Login from "@/components/shared/Login"
import Header from "@/components/shared/Header"

export default function RSPV({ hasReadPermission }) {

	const router = useRouter()

	if (!hasReadPermission) {
		return <Login redirectPath={router.asPath} />
	  }

  return (
    <div>
      <Head>
        <title>RSPV Page</title>
      </Head>

      <main><h1>RSPV Page</h1> <Header /></main>
    </div>
  )
}