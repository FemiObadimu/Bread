import React, { useContext } from "react";
import { Fragment, useState } from "react";
import { Dialog, Tab, Transition } from "@headlessui/react";
import {
  HomeIcon,
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
  ShoppingCartIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";

import { CheckIcon } from "@heroicons/react/solid";
import Logo from "../../assets/images/bigbread.png";
import ProductContext from "../../../context/product/productContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const footerNavigation = {
  products: [
    { name: "Bags", href: "/dashboard/cart" },
    { name: "Tees", href: "/dashboard/cart" },
    { name: "Objects", href: "/dashboard/cart" },
    { name: "Home Goods", href: "/dashboard/cart" },
    { name: "Accessories", href: "/dashboard/cart" },
  ],

  customerService: [
    { name: "Contact", href: "/dashboard/cart" },
    { name: "Taxes", href: "/dashboard/cart" },
    { name: "Returns", href: "/dashboard/cart" },
    { name: "Warranty", href: "/dashboard/cart" },
    { name: "Secure Payments", href: "/dashboard/cart" },
    { name: "FAQ", href: "/dashboard/cart" },
    { name: "Find a store", href: "/dashboard/cart" },
  ],
};

const Cart = () => {
  const date = new Date().getUTCFullYear();
  const [open, setOpen] = useState(false);

  const productContext = useContext(ProductContext);
  const { cart, deleteProduct } = productContext;

  const onDelete = (product_id) => {
    deleteProduct(product_id);
    toast.success("Product Removed from Cart", {
      position: "top-right",
      hideProgressBar: true,
      closeOnClick: true,
    });
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
            />
            <div className="bg-white">
              {/* Mobile menu */}
              <Transition.Root show={open} as={Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 flex z-40 lg:hidden"
                  onClose={setOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                      <div className="px-4 pt-5 pb-2 flex">
                        <button
                          type="button"
                          className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Links */}
                      <Tab.Group as="div" className="mt-2"></Tab.Group>
                      <div className="border-t border-gray-200 py-6 px-4">
                        <Link
                          to="/dashboard"
                          className="-m-2 p-2 flex items-center"
                        >
                          <span className="ml-3 block text-base font-medium text-gray-900">
                            <HomeIcon
                              className="text-gray-500
                                       text-gray-400 group-hover:text-gray-500
                                    mr-4 h-6 w-6"
                            />{" "}
                            Dashoard
                          </span>
                        </Link>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4">
                        <Link
                          to="/dashboard/shop"
                          className="-m-2 p-2 flex items-center"
                        >
                          <span className="ml-3 block text-base font-medium text-gray-900">
                            <ShoppingCartIcon
                              className="text-gray-500
                                       text-gray-400 group-hover:text-gray-500
                                    mr-4 h-6 w-6 "
                            />{" "}
                            Shop
                          </span>
                        </Link>
                      </div>
                      <div className="border-t border-gray-200 py-6 px-4">
                        <Link
                          to="/dashboard/checkout"
                          className="-m-2 p-2 flex items-center"
                        >
                          <span className="ml-3 block text-base font-medium text-gray-900">
                            <CreditCardIcon
                              className="text-gray-500
                                       text-gray-400 group-hover:text-gray-500
                                    mr-4 h-6 w-6"
                            />{" "}
                            Checkout
                          </span>
                        </Link>
                      </div>
                    </div>
                  </Transition.Child>
                </Dialog>
              </Transition.Root>

              <header className="relative bg-white">
                <nav
                  aria-label="Top"
                  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                  <div className="border-b border-gray-200">
                    <div className="h-16 flex items-center justify-between">
                      <div className="flex-1 flex items-center lg:hidden">
                        <button
                          type="button"
                          className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                          onClick={() => setOpen(true)}
                        >
                          <span className="sr-only">Open menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        <Link
                          to="/dashboard/cart"
                          className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Search</span>
                          <SearchIcon className="w-6 h-6" aria-hidden="true" />
                        </Link>
                      </div>

                      {/* Logo */}
                      <Link to="/dashboard/cart" className="flex">
                        <img className="h-8 w-auto" src={Logo} alt="" />
                        <h1 className=" main-clr text-xl font-bold">
                          {" "}
                          Mart Bread
                        </h1>
                      </Link>

                      <div className="flex-1 flex items-center justify-end">
                        <Link
                          to="/dashboard/cart"
                          className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center"
                        >
                          <span className="ml-3 block text-sm font-medium">
                            NGN
                          </span>
                          <span className="sr-only">currency</span>
                        </Link>

                        {/* Search */}
                        <Link
                          to="/dashboard/cart"
                          className="hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block"
                        >
                          <span className="sr-only">Search</span>
                          <SearchIcon className="w-6 h-6" aria-hidden="true" />
                        </Link>

                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-6">
                          <Link
                            to="/dashboard/cart"
                            className="group -m-2 p-2 flex items-center"
                          >
                            <ShoppingBagIcon
                              className="flex-shrink-0 h-10 w-8 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <span className="-ml-5 mt-2 text-red-500 text-sm font-bold ">
                              {cart.length}
                            </span>
                            <span className="sr-only">
                              items in cart, view bag
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>

              <main>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto pt-16">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Shopping Cart
                    </h1>

                    <form className="mt-12">
                      <section aria-labelledby="cart-heading">
                        <h2 id="cart-heading" className="sr-only">
                          Items in your shopping cart
                        </h2>

                        <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                          {cart.map((product, productIdx) => (
                            <li key={product.id} className="flex py-6 sm:py-10">
                              <div className="flex-shrink-0">
                                <img
                                  src={product.image_url}
                                  alt="mart-bread"
                                  className="w-24 h-24 rounded-lg object-center object-contain sm:w-20 sm:h-20"
                                />
                              </div>

                              <div className="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                <div>
                                  <div className="flex justify-between sm:grid sm:grid-cols-2">
                                    <div className="pr-6">
                                      <h3 className="text-sm font-bold">
                                        {product.title}
                                      </h3>
                                      <p className="text-sm text-gray-900 ">
                                        {product.tag}
                                      </p>
                                    </div>

                                    <p className="text-sm font-bold text-gray-900 text-right">
                                      ₦{product.price * product.quantity}
                                    </p>
                                  </div>

                                  <div className="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                                    <label
                                      htmlFor={`quantity-${productIdx}`}
                                      className="sr-only"
                                    >
                                      Quantity, {product.name}
                                    </label>
                                    <span
                                      className="cart-btn"
                                      onClick={() => deleteProduct()}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5  main-clr text-center "
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        onClick={() =>
                                          product.quantity <= 1
                                            ? product.quantity
                                            : product.quantity--
                                        }
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                                          clip-rule="evenodd"
                                        />
                                      </svg>
                                    </span>
                                    <span className="number p-2 special font-bold text-center">
                                      {product.quantity}
                                    </span>
                                    <span
                                      className="cart-btn"
                                      onClick={() => deleteProduct()}
                                    >
                                      <svg
                                        onClick={() => product.quantity++}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5 main-clr text-center"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                          clip-rule="evenodd"
                                        />
                                      </svg>
                                    </span>
                                    <button
                                      type="button"
                                      className="ml-4 text-sm font-medium main-clr sm:ml-0 sm:mt-3"
                                      onClick={() => onDelete(product._id)}
                                    >
                                      <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        ></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>

                                <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                                  <CheckIcon
                                    className="flex-shrink-0 h-5 w-5 main-clr"
                                    aria-hidden="true"
                                  />
                                  <span>Product in Stock</span>
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </section>

                      {/* Order summary */}
                      <section
                        aria-labelledby="summary-heading"
                        className="mt-10 sm:ml-32 sm:pl-6"
                      >
                        <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
                          <h2 id="summary-heading" className="sr-only">
                            Order summary
                          </h2>

                          <div className="flow-root">
                            <dl className="-my-4 text-sm divide-y divide-gray-200">
                              <div className="py-4 flex items-center justify-between">
                                <dt className="text-gray-600">Subtotal</dt>
                                <dd className="font-medium text-gray-900">
                                  ₦{" "}
                                  {cart.reduce(
                                    (accumulate, item) =>
                                      accumulate +
                                      parseInt(item.price) * item.quantity,
                                    0
                                  )}
                                </dd>
                              </div>
                              <div className="py-4 flex items-center justify-between">
                                <dt className="text-gray-600">Taxes (2% - 5%)</dt>
                                <dd className="font-medium text-gray-900">
                                  ₦
                                  {cart.reduce(
                                    (accumulate, item) =>
                                      accumulate +
                                      parseInt(item.price) * item.quantity,
                                    0
                                  ) * 0.02}
                                </dd>
                              </div>

                              <div className="py-4 flex items-center justify-between">
                                <dt className="text-base font-medium text-gray-900">
                                  Order total
                                </dt>
                                <dd className="text-xl font-bold text-gray-900">
                                  ₦{" "}
                                  {cart.reduce(
                                    (accumulate, item) =>
                                      accumulate +
                                      parseInt(item.price) * item.quantity,
                                    0
                                  ) *
                                    0.02 +
                                    cart.reduce(
                                      (accumulate, item) =>
                                        accumulate +
                                        parseInt(item.price) * item.quantity,
                                      0
                                    )}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                        <div className="mt-10">
                          <Link to="/dashboard/checkout">
                            <button className="w-full main-bg border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-whfocus:outline-none focus:ring-2 focus:ring-offset-2  text-white">
                              Checkout
                            </button>
                          </Link>
                        </div>

                        <div className="mt-6 text-sm text-center text-gray-500">
                          <p>
                            or{" "}
                            <a
                              href="/dashboard/shop"
                              className=" p-4 font-medium main-clr"
                            >
                              <span aria-hidden="true"> &rarr;</span> Continue
                              Shopping
                            </a>
                          </p>
                        </div>
                      </section>
                    </form>
                  </div>
                </div>
              </main>

              <footer
                aria-labelledby="footer-heading"
                className="bg-gray-50 mt-6"
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
                      <div className="mt-10 col-span-6 px-7 px-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
                        <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              Products
                            </h3>
                            <ul className="mt-6 space-y-6 ">
                              {footerNavigation.products.map((item) => (
                                <li key={item.name} className="text-sm">
                                  <a
                                    href={item.href}
                                    className="text-gray-500 hover:text-gray-600"
                                  >
                                    {item.name}
                                  </a>
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
                              <li key={item.name} className="text-sm">
                                <a
                                  href={item.href}
                                  className="text-gray-500 hover:text-gray-600"
                                >
                                  {item.name}
                                </a>
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
                          The latest deals and savings, sent to your inbox
                          weekly.
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
        </div>
      ) : (
        <div>
          <div>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
            />
            <div className="bg-white">
              {/* Mobile menu */}
              <Transition.Root show={open} as={Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 flex z-40 lg:hidden"
                  onClose={setOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                  >
                    <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                      <div className="px-4 pt-5 pb-2 flex">
                        <button
                          type="button"
                          className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>

                      {/* Links */}
                      <Tab.Group as="div" className="mt-2"></Tab.Group>
                      <div className="border-t border-gray-200 py-6 px-4">
                        <Link
                          to="/dashboard"
                          className="-m-2 p-2 flex items-center"
                        >
                          <span className="ml-3 block text-base font-medium text-gray-900">
                            <HomeIcon
                              className="text-gray-500
                                       text-gray-400 group-hover:text-gray-500
                                    mr-4 h-6 w-6"
                            />{" "}
                            Dashoard
                          </span>
                        </Link>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4">
                        <Link
                          to="/dashboard/shop"
                          className="-m-2 p-2 flex items-center"
                        >
                          <span className="ml-3 block text-base font-medium text-gray-900">
                            <ShoppingCartIcon
                              className="text-gray-500
                                       text-gray-400 group-hover:text-gray-500
                                    mr-4 h-6 w-6"
                            />{" "}
                            Shop
                          </span>
                        </Link>
                      </div>
                      <div className="border-t border-gray-200 py-6 px-4">
                        <Link
                          to="/dashboard/checkout"
                          className="-m-2 p-2 flex items-center"
                        >
                          <span className="ml-3 block text-base font-medium text-gray-900">
                            <CreditCardIcon
                              className="text-gray-500
                                       text-gray-400 group-hover:text-gray-500
                                    mr-4 h-6 w-6"
                            />{" "}
                            Checkout
                          </span>
                        </Link>
                      </div>
                    </div>
                  </Transition.Child>
                </Dialog>
              </Transition.Root>

              <header className="relative bg-white">
                <nav
                  aria-label="Top"
                  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                  <div className="border-b border-gray-200">
                    <div className="h-16 flex items-center justify-between">
                      <div className="flex-1 flex items-center lg:hidden">
                        <button
                          type="button"
                          className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                          onClick={() => setOpen(true)}
                        >
                          <span className="sr-only">Open menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        <Link
                          to="/dashboard/cart"
                          className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Search</span>
                          <SearchIcon className="w-6 h-6" aria-hidden="true" />
                        </Link>
                      </div>

                      {/* Logo */}
                      <a href="/dashboard/cart" className="flex">
                        <img className="h-8 w-auto" src={Logo} alt="" />
                        <h1 className=" main-clr text-xl font-bold">
                          {" "}
                          Mart Bread
                        </h1>
                      </a>

                      <div className="flex-1 flex items-center justify-end">
                        <Link
                          to="/dashboard/cart"
                          className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center"
                        >
                          <span className="ml-3 block text-sm font-medium">
                            NGN
                          </span>
                          <span className="sr-only">currency</span>
                        </Link>

                        {/* Search */}
                        <Link
                          to="/dashboard/cart"
                          className="hidden ml-6 p-2 text-gray-400 hover:text-gray-500 lg:block"
                        >
                          <span className="sr-only">Search</span>
                          <SearchIcon className="w-6 h-6" aria-hidden="true" />
                        </Link>

                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-6">
                          <Link
                            to="/dashboard/cart"
                            className="group -m-2 p-2 flex items-center"
                          >
                            <ShoppingBagIcon
                              className="flex-shrink-0 h-10 w-8 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                            <span className="-ml-5 mt-2 text-base font-bold text-red-500 ">
                              {cart.length}
                            </span>
                            <span className="sr-only">
                              items in cart, view bag
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </header>

              <main>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto pt-16">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Shopping Cart
                    </h1>

                    <form className="mt-12">
                      <section aria-labelledby="cart-heading">
                        <h2 id="cart-heading" className="sr-only">
                          Items in your shopping cart
                        </h2>

                        <h1 className="text-center text-xl font-bold">
                          Nothing is Here,{" "}
                          <Link to="/dashboard/shop" className="main-clr">
                            Go Shopping !!
                          </Link>
                        </h1>
                      </section>

                      {/* Order summary */}
                      <section
                        aria-labelledby="summary-heading"
                        className="mt-10 sm:ml-32 sm:pl-6"
                      >
                        <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
                          <h2 id="summary-heading" className="sr-only">
                            Order summary
                          </h2>

                          <div className="flow-root">
                            <dl className="-my-4 text-sm divide-y divide-gray-200">
                              <div className="py-4 flex items-center justify-between">
                                <dt className="text-gray-600">Subtotal</dt>
                                <dd className="font-medium text-gray-900">
                                  ₦{" "}
                                  {cart.reduce(
                                    (accumulate, item) =>
                                      accumulate +
                                      parseInt(item.price) * item.quantity,
                                    0
                                  )}
                                </dd>
                              </div>
                              <div className="py-4 flex items-center justify-between">
                                <dt className="text-gray-600">Taxes (2% - 5%)</dt>
                                <dd className="font-medium text-gray-900">
                                  ₦
                                  {cart.reduce(
                                    (accumulate, item) =>
                                      accumulate +
                                      parseInt(item.price) * item.quantity,
                                    0
                                  ) * 0.02}
                                </dd>
                              </div>

                              <div className="py-4 flex items-center justify-between">
                                <dt className="text-base font-medium text-gray-900">
                                  Order total
                                </dt>
                                <dd className="text-xl font-bold text-gray-900">
                                  ₦{" "}
                                  {cart.reduce(
                                    (accumulate, item) =>
                                      accumulate +
                                      parseInt(item.price) * item.quantity,
                                    0
                                  ) *
                                    0.02 +
                                    cart.reduce(
                                      (accumulate, item) =>
                                        accumulate +
                                        parseInt(item.price) * item.quantity,
                                      0
                                    )}
                                </dd>
                              </div>
                            </dl>
                          </div>
                        </div>
                        <div className="mt-10">
                          <Link to="/dashboard/checkout">
                            <button className="w-full main-bg border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-whfocus:outline-none focus:ring-2 focus:ring-offset-2  text-white">
                              Checkout
                            </button>
                          </Link>
                        </div>

                        <div className="mt-6 text-sm text-center text-gray-500">
                          <p>
                            or{" "}
                            <a
                              href="/dashboard/shop"
                              className=" p-4 font-medium main-clr"
                            >
                              <span aria-hidden="true"> &rarr;</span> Continue
                              Shopping
                            </a>
                          </p>
                        </div>
                      </section>
                    </form>
                  </div>
                </div>
              </main>

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
                      <div className="mt-10 col-span-6 px-7 px-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:mt-0 md:row-start-1 md:col-start-3 md:col-span-8 lg:col-start-2 lg:col-span-6">
                        <div className="grid grid-cols-1 gap-y-12 sm:col-span-2 sm:grid-cols-2 sm:gap-x-8">
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              Products
                            </h3>
                            <ul className="mt-6 space-y-6 ">
                              {footerNavigation.products.map((item) => (
                                <li key={item.name} className="text-sm">
                                  <Link
                                    to={item.href}
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
                              <li key={item.name} className="text-sm">
                                <Link
                                  to={item.href}
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
                          The latest deals and savings, sent to your inbox
                          weekly.
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
        </div>
      )}
    </div>
  );
};

export default Cart;
