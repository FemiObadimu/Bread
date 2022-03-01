import React, { useContext, useEffect, useState } from "react";
import Loading from "../Loading";
import ProductContext from "../../../context/product/productContext";
import Logo from "../../assets/images/bigbread.png";
import ImageBg from "../../assets/images/logo-bg.png";

import { Disclosure } from "@headlessui/react";

import {
  BellIcon,
  MenuIcon,
  XIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const footerNavigation = {
  products: [
    { id: "1", name: "Desserts", to: "/dashboard/shop" },
    { id: "2", name: "Cakes", to: "/dashboard/shop" },
    { id: "3", name: "Bread", to: "/dashboard/shop" },
    { id: "4", name: "Cookies ", to: "/dashboard/shop" },
    { id: "5", name: "Scones", to: "/dashboard/shop" },
  ],

  customerService: [
    { id: "1", name: "Contact", to: "/dashboard/shop" },
    { id: "2", name: "Shipping", to: "/dashboard/shop" },
    { id: "3", name: "Returns", to: "/dashboard/shop" },
    { id: "4", name: "Warranty", to: "/dashboard/shop" },
    { id: "5", name: "Secure Payments", to: "/dashboard/shop" },
    { id: "6", name: "FAQ", to: "/dashboard/shop" },
    { id: "7", name: "Find a store", to: "/dashboard/shop" },
  ],
};

const Shop = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const productContext = useContext(ProductContext);

  const { products, addProduct, getAll, cart } = productContext;

  useEffect(() => {
    getAll();

    // eslint-disable-next-line
  }, []);

  const date = new Date().getFullYear();

  const onAdd = (product) => {
    console.log(product);

    addProduct(product);
    toast.success("Product Added to Cart", {
      position: "top-right",
      hideProgressBar: true,
      closeOnClick: true,
    });
  };

  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                  <div className="relative flex justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset ">
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
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex-shrink-0 flex items-center">
                        <img
                          className="block lg:hidden h-8 w-auto"
                          src={Logo}
                          alt="Mart Bread"
                        />

                        <img
                          className="hidden lg:block h-8 w-auto"
                          src={Logo}
                          alt="Mart Bread"
                        />

                        <h1 className="main-clr font-bold text-base ">
                          Mart Bread
                        </h1>
                      </div>
                      <div className="hidden sm:ml-6 sm:flex sm:space-x-8 ">
                        {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                        <Link
                          to="/dashboard"
                          className="border-transparent text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                          Dashboard
                        </Link>
                        <Link
                          to="/dashboard/cart"
                          className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                          Cart
                          <ShoppingBagIcon className="  h-8 w-8 text-gray-600" />
                          ({cart.length})
                        </Link>
                        <Link
                          to="/dashboard/checkout"
                          className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                          Checkout
                        </Link>
                        <Link
                          to="/dashboard/shop"
                          className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                          Office
                        </Link>
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <button
                        type="button"
                        className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="pt-2 pb-4 space-y-1">
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <Disclosure.Button>
                      <Link
                        to="/dashboard"
                        className=" border-transparent main-clr block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      >
                        Dashboard
                      </Link>
                    </Disclosure.Button>
                    <Disclosure.Button>
                      <Link
                        to="/dashboard/cart"
                        className="border-transparent main-clr  block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      >
                        Cart
                        <ShoppingBagIcon className="  h-8 w-8 text-gray-600" />(
                        {cart.length})
                      </Link>
                    </Disclosure.Button>
                    <Disclosure.Button>
                      <Link
                        to="/dashboard/checkout"
                        className="border-transparent main-clr  pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      >
                        Checkout
                      </Link>
                    </Disclosure.Button>
                    <Disclosure.Button>
                      <Link
                        to="/dashboard/shop"
                        className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      ></Link>
                    </Disclosure.Button>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <div className="bg-gray-50">
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
            />
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block main-clr special">
                  Start and Get Nourished at MART BREAD today.
                </span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/dashboard/shop"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white main-bg"
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <Link
                    to="/dashboard/cart"
                    className="inline-flex items-center text-white justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md main-bg"
                  >
                    Cart Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-6 px-4 sm:py-18 sm:px-3 lg:max-w-7xl lg:px-8">
              <div className="bg-white py-6 lg:py-10">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="relative py-24 px-8 main-bg rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
                      <img
                        src={ImageBg}
                        alt="Mart Bread"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative lg:col-span-1">
                      <img
                        className="h-12 w-auto"
                        src={Logo}
                        alt="Mart Bread"
                      />
                      <blockquote className="mt-6 text-white">
                        <p className="text-xl font-medium sm:text-2xl">
                          Mart Bread has completely transformed how we shop for
                          delicacies online. We've seen record bookings, higher
                          customer satisfaction, and reduced churn.
                        </p>
                        <footer className="mt-6">
                          <p className="flex flex-col font-medium">
                            <span>Marie Chilvers</span>
                            <span>CEO, Mart Bread</span>
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-xl main-clr special text-center font-extrabold tracking-tight text-gray-900">
                Shopping Just Got Better with Mart Bread
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product._id} className="group relative">
                    <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                      <img
                        src={product.image_url}
                        alt="Mart Bread"
                        className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                      />
                    </div>
                    <div className="mt-4">
                      <div>
                        <h3 className=" font-bold text-base  text-gray-700">
                          <span>
                            <span aria-hidden="true" className="" />
                            {product.title}
                          </span>
                        </h3>
                        <p>{product.desc}</p>
                      </div>
                      add
                      <div className="flex justify-between">
                        <div className="mt-2 font-medium text-xl text-gray-700">
                          ₦ {product.price}
                        </div>
                        <div className="font-medium text-sm">
                          <button onClick={() => onAdd(product)}>
                            <ShoppingCartIcon className="  h-8 w-8 text-gray-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <footer
              aria-labelledby="footer-heading"
              className="bg-gray-50 my-6"
            >
              <h2 id="footer-heading" className="sr-only">
                Footer
              </h2>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-200 py-20">
                  <div className="grid grid-cols-1 md:grid-cols-12 md:grid-flow-col md:gap-x-8 md:gap-y-16 md:auto-rows-min">
                    {/* Image section */}
                    <div className="col-span-2 md:col-span-2  lg:row-start-1 lg:col-start-1">
                      <img
                        src={Logo}
                        alt=""
                        width={50}
                        height={50}
                        className="h-8 w-auto"
                      />
                      <h1 className="main-clr font-bold text-xl padding">
                        Mart Bread
                      </h1>
                    </div>

                    {/* Sitemap sections */}
                    <div className="mt-10 col-span-6  px-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
                      <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            Products
                          </h3>
                          <ul className="mt-6 space-y-6 ">
                            {footerNavigation.products.map((item) => (
                              <li key={item.id} className="text-sm">
                                <Link
                                  to={item.to}
                                  className="text-gray-500 hover:text-gray-600"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">
                          Customer Service
                        </h3>
                        <ul className="mt-6 space-y-6">
                          {footerNavigation.customerService.map((item) => (
                            <li key={item.id} className="text-sm">
                              <Link
                                to={item.to}
                                className="text-gray-500 hover:text-gray-600"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Newsletter section */}
                    <div className="mt-12 md:mt-0 md:row-start-2 md:col-start-3 md:col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4">
                      <h3 className="text-sm font-medium text-gray-900">
                        Sign up for our newsletter
                      </h3>
                      <p className="mt-6 text-sm text-gray-500">
                        The latest deals and savings, sent to your inbox weekly.
                      </p>
                      <form className="mt-2 flex sm:max-w-md">
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email-address"
                          type="text"
                          autoComplete="email"
                          required
                          className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none main-clr focus:ring-1 main-clr"
                        />
                        <div className="ml-4 flex-shrink-0">
                          <button className="w-full main-bg border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 py-10 text-center">
                  <p className="text-sm text-gray-500">
                    &copy; {date} Mart Bread, Inc. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
