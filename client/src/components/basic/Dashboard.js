import { Fragment, useContext, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  HomeIcon,
  MapIcon,
  MenuIcon,
  XIcon,
  LogoutIcon,
  UserCircleIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";
import Logo from "../assets/images/coilbread.png";
import Loading from "./Loading";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ProductContext from "../../context/product/productContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "../assets/images/product-b20.png";
import TImage1 from "../assets/images/product-b2.png";
import TImage2 from "../assets/images/cake-8.jpeg";
import TImage3 from "../assets/images/pie-2.jpeg";
import TImage4 from "../assets/images/cake-5.jpeg";
import TImage5 from "../assets/images/bread_2.png";
import TImage6 from "../assets/images/longbread.png";
import TImage7 from "../assets/images/scones-11.jpeg";
import TImage8 from "../assets/images/dough-bread.png";

import Image2 from "../assets/images/dough-bread.png";
import Image3 from "../assets/images/sausage-bread.png";
import Image4 from "../assets/images/product-b6.png";
import Image5 from "../assets/images/pie-2.jpeg";
import Image6 from "../assets/images/scones-13.jpeg";
import Image7 from "../assets/images/cake-5.jpeg";

const trendingProducts = [
  {
    id: 1,
    name: "Baguette Bread",
    price: "₦ 3500",
    to: "/dashboard/shop",
    imageSrc: `${TImage1}`,
    imageAlt: "Mart Bread",
  },
  {
    id: 2,
    name: "Scottish Cake Parfait",
    price: "₦ 3500",
    to: "/dashboard/shop",
    imageSrc: `${TImage2}`,
    imageAlt: "Mart Bread",
  },
  {
    id: 3,
    name: "Apple Pies",
    price: "₦ 2500",
    to: "/dashboard/shop",
    imageSrc: `${TImage3}`,
    imageAlt: "Mart Bread",
  },
  {
    id: 4,
    name: "Scottish Chocolate Cake",
    price: "₦ 4500",
    to: "/dashboard/shop",
    imageSrc: `${TImage4}`,
    imageAlt: "Mart Bread",
  },
  {
    id: 5,
    name: "1930's Flat Bread",
    price: "₦ 2500",
    to: "/dashboard/shop",
    imageSrc: `${TImage5}`,
    imageAlt: "Mart Bread",
  },
  {
    id: 6,
    name: "Baguette Long Bread",
    price: "₦ 4500",
    to: "/dashboard/shop",
    imageSrc: `${TImage6}`,
    imageAlt: "Mart Bread",
  },
  {
    id: 7,
    name: "Creamed Scones",
    price: "₦ 1500",
    to: "/dashboard/shop",
    imageSrc: `${TImage7}`,
    imageAlt: "Mart Bread",
  },
  {
    id: 8,
    name: "Doughnuts",
    price: "₦ 1000",
    to: "/dashboard/shop",
    imageSrc: `${TImage8}`,
    imageAlt: "Mart Bread",
  },
];
const collections = [
  {
    name: "Buttered Bread",
    description:
      "Nourishing You to the Fullest, Life's Good here at Mart Bread",
    imageSrc: `${Image4}`,
    imageAlt: "Mart Bread",
    to: "/dashboard/shop",
  },
  {
    name: "Milk Skimmed Vanilla Scones",
    description:
      "Get Nourished with our Skimmed Milk Scones, Enjoy th rich taste of goodness",
    imageSrc: `${Image6}`,
    imageAlt: "Mart Bread",
    to: "/dashboard/shop",
  },

  {
    name: "Cakes",
    description:
      "Cakes With different Sizes, Flavours and Flakes here  at Mart Bread",
    imageSrc: `${Image7}`,
    imageAlt: "Mart Bread",
    to: "/dashboard/shop",
  },

  {
    name: "Steak & Kidney , Chicken & Apple Pies",
    description: "Find Your Place at Mart Bread Today , Get Nourished !",
    imageSrc: `${Image5}`,
    imageAlt: "Mart Bread",
    to: "/dashboard/shop",
  },

  {
    name: "Sausages and Meat",
    description: "Enjoy Sausages with different flavours",
    imageSrc: `${Image3}`,
    imageAlt: "Mart Bread",
    to: "/dashboard/shop",
  },
  {
    name: "Doughnuts Flaked Milked",
    description:
      "Doughnuts, One of the Very Best you'd find at mart Bread today.",
    imageSrc: `${Image2}`,
    imageAlt: "Mart Bread",
    to: "/dashboard/shop",
  },
];
const testimonials = [
  {
    id: 1,
    quote:
      "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!",
    attribution: "Sarah Peters, New Orleans",
  },
  {
    id: 2,
    quote:
      "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!",
    attribution: "Kelly McPherson, Chicago",
  },
  {
    id: 3,
    quote:
      "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.",
    attribution: "Chris Paul, Phoenix",
  },
];

const Dashboard = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const history = useNavigate();
  const authContext = useContext(AuthContext);
  const productContext = useContext(ProductContext);

  const { loadUser, logOut, user } = authContext;

  const { cart } = productContext;

  useEffect(() => {
    loadUser();

    // eslint-disable-next-line
  }, []);

  const onLogOut = () => {
    // LogOut;
    logOut();
    history("/");
  };

  const navigation = [
    { name: "Dashboard", to: "/dashboard", icon: HomeIcon, current: true },
    {
      name: "Shop",
      to: "/dashboard/shop",
      icon: ShoppingBagIcon,
      current: false,
    },
    {
      name: `Cart (${cart.length})`,
      to: "/dashboard/cart",
      icon: ShoppingCartIcon,
      current: false,
    },
    {
      name: "Checkout",
      to: "/dashboard/checkout",
      icon: CreditCardIcon,
      current: false,
    },
    { name: "Office Map", to: "#", icon: MapIcon, current: false },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div>
      {loading ? (
        <div>
          <Loading />
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
            <div className="h-screen flex overflow-hidden bg-white">
              <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                  as="div"
                  static
                  className="fixed inset-0 flex z-40 lg:hidden"
                  open={sidebarOpen}
                  onClose={setSidebarOpen}
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
                    <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
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
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                          <button
                            type="button"
                            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <span className="sr-only">Close sidebar</span>
                            <XIcon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </Transition.Child>
                      <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                        <div className="flex-shrink-0 flex items-center px-4">
                          <h1 className="special main-clr text-xl">
                            <img
                              src={Logo}
                              alt="Mart-Bread"
                              width={50}
                              height={50}
                            />
                            Mart Bread
                          </h1>
                        </div>
                        <nav aria-label="Sidebar" className="mt-5">
                          <div className="px-2 space-y-1">
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                to={item.to}
                                className={classNames(
                                  item.current
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                  "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current
                                      ? "text-gray-500"
                                      : "text-gray-400 group-hover:text-gray-500",
                                    "mr-4 h-6 w-6"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </nav>
                      </div>
                      <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                        <div>
                          <UserCircleIcon
                            className="h-6 w-6 main-clr"
                            aria-hidden="true"
                          />
                          {user.name}
                        </div>
                        <Link to="/" className="flex-shrink-0 group block">
                          <div className="flex items-center">
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                                <LogoutIcon
                                  onClick={onLogOut}
                                  width="20"
                                  height="20"
                                />{" "}
                                Logout
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 w-14" aria-hidden="true">
                    {/* Force sidebar to shrink to fit close icon */}
                  </div>
                </Dialog>
              </Transition.Root>

              {/* Static sidebar for desktop */}
              <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-64">
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-gray-100">
                    <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                      <div className="flex items-center flex-shrink-0 px-4">
                        <h1 className="main-clr special">Mart Bread</h1>
                      </div>
                      <nav className="mt-5 flex-1" aria-label="Sidebar">
                        <div className="px-2 space-y-1">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              to={item.to}
                              className={classNames(
                                item.current
                                  ? "bg-gray-200 text-gray-900"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                              )}
                            >
                              <item.icon
                                className={classNames(
                                  item.current
                                    ? "text-gray-500"
                                    : "text-gray-400 group-hover:text-gray-500",
                                  "mr-3 h-6 w-6"
                                )}
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </nav>
                    </div>
                    <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                      <Link to="/" className="flex-shrink-0 w-full group block">
                        <div className="flex items-center">
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                              <span className="user-icon">
                                <UserCircleIcon
                                  className="h-6 w-6 main-clr"
                                  aria-hidden="true"
                                />
                              </span>
                              {user.name}
                            </p>
                            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                              <LogoutIcon
                                onClick={onLogOut}
                                width="20"
                                height="20"
                              />
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                <div className="lg:hidden">
                  <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                    <div>
                      <h1 className="main-clr text-xl special">
                        {" "}
                        <img
                          src={Logo}
                          alt="Mart-Bread"
                          width={50}
                          height={50}
                        />
                        Mart Bread
                      </h1>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                        onClick={() => setSidebarOpen(true)}
                      >
                        <span className="sr-only">Open sidebar</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative z-0 flex overflow-hidden">
                  <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                    {/* Start main area*/}

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                      <div className="sm:max-w-lg py-3">
                        <h1 className="text-3xl main-clr font font-extrabold tracking-tight pt-4 sm:text-4xl">
                          Mart Bread is Finally Here, Experience Like No Other
                        </h1>
                        <p className="mt-4 text-base text-gray-500">
                          This year, our new summer delicacies will nourish you
                          from the harsh elements of a world that doesn't care
                          if you live or die.
                        </p>
                      </div>
                      <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
                        <img
                          src={Cookie}
                          alt="Mart Braed"
                          className="w-full h-full object-center object-contain"
                        />
                      </div>
                    </div>

                    <section
                      aria-labelledby="trending-heading "
                      className="bg-white mt-20 pt-6"
                    >
                      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
                        <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                          <h2
                            id="trending-heading"
                            className="text-2xl font-extrabold tracking-tight text-gray-900"
                          >
                            Trending products
                          </h2>
                        </div>

                        <div className="mt-8 relative">
                          <div className="relative w-full overflow-x-auto">
                            <ul className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8">
                              {trendingProducts.map((product) => (
                                <li
                                  key={product.id}
                                  className="w-64 inline-flex flex-col text-center lg:w-auto"
                                >
                                  <div className="group relative">
                                    <div className="w-full rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                                      <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="w-full h-full object-center object-contain group-hover:opacity-75"
                                      />
                                    </div>
                                    <div className="mt-6">
                                      <h3 className="mt-1 font-semibold text-gray-900">
                                        <Link to={product.to}>
                                          <span className="absolute inset-0" />
                                          {product.name}
                                        </Link>
                                      </h3>
                                      <p className="mt-1 text-gray-900">
                                        {product.price}
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Collections */}
                    <section
                      aria-labelledby="collections-heading"
                      className="bg-gray-100"
                    >
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
                          <h2
                            id="collections-heading"
                            className="text-2xl font-extrabold text-gray-900"
                          >
                            Our Products Collections
                          </h2>
                          <p>Shop at Mart Bread Today!</p>

                          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                            {collections.map((collection) => (
                              <Link to={collection.to}>
                                <div
                                  key={collection.name}
                                  className="group relative"
                                >
                                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                      src={collection.imageSrc}
                                      alt={collection.imageAlt}
                                      className="w-full h-full object-center object-contain"
                                    />
                                  </div>
                                  <h3 className="mt-6 text-base text-gray-700 font-semibold ">
                                    <span className=" text-xl " />
                                    {collection.name}
                                  </h3>
                                  <p className="text-sm font-semibold text-gray-500">
                                    {collection.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Sale and testimonials */}
                    {/* Decorative background image and gradient */}
                    {/* <div aria-hidden="true" className="absolute inset-0">
                      <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-white bg-opacity-75" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
                    </div> */}

                    {/* Sale */}
                    <section
                      aria-labelledby="sale-heading"
                      className="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8"
                    >
                      <div className="max-w-2xl mx-auto lg:max-w-none">
                        <h2
                          id="sale-heading"
                          className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
                        >
                          Get 25% off during our one-time sale
                        </h2>
                        <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
                          Most of our products are limited releases that won't
                          come back. Get your favorite items while they're in
                          stock.
                        </p>
                        <Link
                          to="/dashboard/shop"
                          className="mt-6 inline-block w-full main-bg border border-transparent rounded-md py-3 px-8 font-medium text-white  sm:w-auto"
                        >
                          Get access to our one-time sale
                        </Link>
                      </div>
                    </section>

                    {/* Testimonials */}
                    <section
                      aria-labelledby="testimonial-heading"
                      className="relative py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:py-32 lg:px-8"
                    >
                      <div className="max-w-2xl mx-auto lg:max-w-none">
                        <h2
                          id="testimonial-heading"
                          className="text-2xl font-extrabold tracking-tight text-gray-900"
                        >
                          What are people saying?
                        </h2>

                        <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                          {testimonials.map((testimonial) => (
                            <blockquote
                              key={testimonial.id}
                              className="sm:flex lg:block"
                            >
                              <svg
                                width={24}
                                height={18}
                                viewBox="0 0 24 18"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="flex-shrink-0 main-clr"
                              >
                                <path
                                  d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                                  fill="currentColor"
                                />
                              </svg>
                              <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                                <p className="text-lg text-gray-600">
                                  {testimonial.quote}
                                </p>
                                <cite className="mt-4 block font-semibold not-italic text-gray-900">
                                  {testimonial.attribution}
                                </cite>
                              </div>
                            </blockquote>
                          ))}
                        </div>
                      </div>
                    </section>

                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
                      <div className="bg-gray-100 rounded-lg p-6 flex items-center sm:p-10">
                        <div className="max-w-sm mx-auto">
                          <h3 className="font-semibold text-gray-900">
                            Sign up for our newsletter
                          </h3>
                          <p className="mt-2 text-sm text-gray-500">
                            The latest news, articles, and resources, sent to
                            your inbox weekly.
                          </p>
                          <form className="mt-4 sm:mt-6 sm:flex">
                            <label htmlFor="email-address" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="email-address"
                              type="text"
                              autoComplete="email"
                              required
                              className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 "
                            />
                            <div className="mt-3 sm:flex-shrink-0 sm:mt-0 sm:ml-4">
                              <button
                                type="submit"
                                className="w-full main-bg border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                              >
                                Mart Bread
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div className="mt-6 relative py-12 px-6 flex items-center sm:py-16 sm:px-10 lg:mt-0">
                        <div className="absolute inset-0 rounded-lg overflow-hidden">
                          <img
                            src={Logo}
                            alt="Mart Bread"
                            className="w-full h-full filter saturate-0 object-center object-contain"
                          />
                          <div className="absolute inset-0 main-bg bg-opacity-100" />
                        </div>
                        <div className="relative max-w-sm mx-auto text-center">
                          <h3 className="text-2xl font-extrabold tracking-tight text-white">
                            Get early access
                          </h3>
                          <p className="mt-2 text-gray-200">
                            Did you sign up to the newsletter? If so, use the
                            keyword we sent you to get access.{" "}
                            <Link
                              to="/dashboard"
                              className="font-bold text-white whitespace-nowrap hover:text-gray-200"
                            >
                              Go now<span aria-hidden="true"> &rarr;</span>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* End main area */}
                  </main>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
