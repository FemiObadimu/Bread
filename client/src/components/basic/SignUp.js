import React, { useState, useEffect, useContext } from "react";
import Loading from "./Loading";
import AuthContext from "../../context/auth/authContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Disclosure } from "@headlessui/react";
import Logo from "../assets/images/bigbread.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const authContext = useContext(AuthContext);
  const history = useNavigate();

  const { isAuthenticated, error, clearErrors, register } = authContext;

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
    } else if (error == null) {
      return;
    } else {
      toast("User with this Email Exist", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || password === "" || email === " ") {
      toast("Kindly Fill All Fields!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    } else if (password !== password2) {
      toast("Passwords do not Match!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    } else {
      register({
        name,
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
        <div>
          <Disclosure as="nav" className="bg-white">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                      <h1>
                        <img
                          src={Logo}
                          alt="Mart-Bread"
                          className="h-8 w-auto"
                        />
                      </h1>
                      <h1 className="special main-clr font-medium text-2xl">
                        Mart Bread
                      </h1>
                    </div>
                    <div className="flex">
                      <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Link
                          to="/"
                          className="main-clr text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                          Home
                        </Link>
                        <Link
                          to="/login"
                          className="main-clr text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                          For More Enquiries Call 09034664244
                        </Link>
                      </div>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset main-clr">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="pt-2 pb-3 space-y-1">
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <Link
                      to="/"
                      className="border-transparent main-clr block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to="/login"
                      className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                      For More Enquiries call 09034664244
                    </Link>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <div className="content">
            <div className="min-h-screen bg-white flex">
              <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                toastClassName={({ type }) =>
                  contextClass[password !== password2 ? `warning` : `error`] +
                  " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
                }
                bodyClassName={() => "text-sm font-white font-med block p-3"}
              />
              <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6  lg:px-20 xl:px-24">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                  <div>
                    {/* {Input Your Logo Here} */}
                    <h2 className="mt-6 text-3xl font-extrabold main-clr special">
                      Sign Up with Mart Bread
                    </h2>
                  </div>

                  <div className="mt-8">
                    <div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Sign Up with Mart-Bread
                        </p>
                      </div>

                      {/* <div className="mt-6 relative">
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
                  </div> */}
                    </div>

                    <div className="mt-6">
                      <form className="space-y-6" autoComplete="off">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Full Name
                          </label>
                          <div className="mt-1">
                            <input
                              onChange={onChange}
                              value={name}
                              id="name"
                              name="name"
                              type="text"
                              autoComplete="off"
                              required
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none main-clr sm:text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
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
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none main-clr sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
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
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none main-clr sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Confirm Password
                          </label>
                          <div className="mt-1">
                            <input
                              onChange={onChange}
                              value={password2}
                              id="password2"
                              name="password2"
                              type="password"
                              autoComplete="off"
                              required
                              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none main-clr sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 main-clr border-gray-300 rounded"
                            />
                            <label
                              htmlFor="remember-me"
                              className="ml-2 block text-sm text-gray-900"
                            >
                              Remember me
                            </label>
                          </div> */}

                          {/* <div className="text-sm">
                            <a href="/signup" className="font-medium main-clr">
                              Forgot your password?
                            </a>
                          </div> */}
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white main-bg"
                            onClick={onSubmit}
                          >
                            Sign Up
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
