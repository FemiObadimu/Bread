import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import AuthContext from "../../context/auth/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/images/bigbread.png";
const Login = () => {
  const authContext = useContext(AuthContext);
  const history = useNavigate();

  const { isAuthenticated, error, clearErrors, loginUser } = authContext;

  const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  useEffect(() => {
    if (isAuthenticated) {
      history("/dashboard");
    }

    if (error) {
      toast(`${error}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
      });
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const [users, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = users;

  const onChange = (e) =>
    setUser({ ...users, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast("Kindly Fill All Fields!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    } else {
      loginUser({
        email,
        password,
      });
    }
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="min-h-screen bg-white flex">
          <div className="hidden lg:block relative w-0 flex-1">
            <img
              className="absolute inset-0 h-full w-full object-contain"
              src={Logo}
              alt="Mart-Bread Logo"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                toastClassName={({ type }) =>
                  contextClass[`error`] +
                  " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
                }
                bodyClassName={() => "text-sm font-white font-med block p-3"}
              />
              <div>
                {/* {Input Your Logo Here} */}
                <h2 className="mt-6 text-4xl special font-extrabold main-clr">
                  Sign in to Mart Bread
                </h2>
                <p className="mt-2 text-sm text-gray-600">
                  Or{" "}
                  <a href="/login" className="font-medium main-clr">
                    start your 14-day free trial
                  </a>
                </p>
              </div>

              <div className="mt-8">
                <div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Sign in with
                    </p>
                  </div>

                  <div className="mt-6 relative">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <form
                    onSubmit={onSubmit}
                    className="space-y-6"
                    autoComplete="off"
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium main-clr text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          onChange={onChange}
                          value={email}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="off"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none  text-sm"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 main-clr"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <input
                          onChange={onChange}
                          value={password}
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="off"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 main-clr  border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="text-sm">
                        <a href="/login" className="font-medium main-clr">
                          Forgot your password?
                        </a>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white main-bg "
                      >
                        Sign in
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-gray-500 text-sm">
                          Don't Have An Account{" "}
                        </p>
                      </div>
                      <div className="font-medium main-clr">
                        <Link to="/signup">Sign Up</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
