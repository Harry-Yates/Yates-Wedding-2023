import Head from "next/head"
import { useRouter } from "next/router"
import Login from "@/components/shared/Login"

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

      <main>I am supposed to be RSPV.</main>
    </div>
  )
}