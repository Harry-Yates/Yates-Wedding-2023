import Cookies from "universal-cookie";
import Login from "@/components/shared/Login";
import consts from "consts";

export default function LoginPage({ hasReadPermission }) {
  if (hasReadPermission) {
    return (
      <>
        <div className='w-1/3 max-w-sm mx-auto'>
          <button
            className='mt-3 bg-green-400 text-white p-2 font-bold rounded hover:bg-green-600'
            onClick={(e) => {
              e.preventDefault();
              const cookies = new Cookies();
              cookies.remove(consts.SiteReadCookie, { path: "/" });
              window.location.href = "/login";
            }}>
            Logout
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Login redirectPath='/' />
    </>
  );
}
