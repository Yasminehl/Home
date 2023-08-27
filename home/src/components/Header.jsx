import useAuth from "../hooks/useAuth.jsx";

function Header() {
    const { login, logout } = useAuth();
  return (
    <header className="masthead">
       <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">AUTO ASSESSEMENT</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Your chatGPT tool suite to make your life easier in your missions, your career, and your relationship with your manager.</h2>
                        {/*<a className="btn btn-primary" href="/nexindex">Sign in</a>*/}
                        <button
                            type="button"
                            className="btn btn-primary me-lg-5"
                            onClick={login}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
    </header>
  );
}

export default Header;
