import Cookies from "universal-cookie";
import Login from "@/components/shared/Login";
import consts from "consts";

export default function LoginPage({ hasReadPermission }) {
  if (hasReadPermission) {
    return (
      <>
        <div className='c-login'>
          <button
            className='btn'
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
