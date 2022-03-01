import React, { useState } from "react";
import { Disclosure, Tab } from "@headlessui/react";
import {
  MenuIcon,
  XIcon,
  CheckIcon,
  HeartIcon,
  MinusSmIcon,
  PlusSmIcon,
} from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Footer from "./Footer";
import Logo from "../assets/images/bigbread.png";
import Logobg from "../assets/images/bread-bg.jpg";
import Image1 from "../assets/images/coilbread.png";
import Image2 from "../assets/images/sausage-bread.png";
import Image3 from "../assets/images/longbread.png";
import Image4 from "../assets/images/dough-bread.png";
import Image5 from "../assets/images/logo-bg.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const hobbyFeatures = ["Bread Biscuits", "Caramels Creams", "Cheesecake"];
const scaleFeatures = [
  "Sweet Pudding",
  "Ginger Bread",
  "Caramels Creams",
  "Desert Jelly",
];
const growthFeatures = [
  "Great Desserts",
  "Sweet Muffins",
  "Fruit Cakes",
  "Pudding Tart",
  "Ginger Bread",
  "Croissant",
];

const features = [
  { name: "Loving Cupcakes", description: "Awesome Goodness,  Top-Notch" },
  {
    name: "Oreo Cupcakes",
    description: "Solid Almond Nuts with Creamed Skimmed Milk.",
  },
  { name: "Dimensions", description: '15" x 3.75" x .75"' },
  {
    name: "Moist Chocolate",
    description: "Moisty Chocolate with Fluffy weight",
  },
  {
    name: "Lemon Stone Cakes",
    description:
      "Great Awesome Sweetness , Tasty Loving Cakes with lemon flavours",
  },
  {
    name: "Puddings",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

const product = {
  name: "Baked Vanilla Bread",
  price: "₦ 3999",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Almond Flavour",
      src: `${Image1}`,
      alt: "mart-bread",
    },
    {
      id: 1,
      name: "Vannila Flavour",
      src: `${Image2}`,
      alt: "mart-bread",
    },
    {
      id: 1,
      name: "Banana Flavour",
      src: `${Image3}`,
      alt: "mart-bread",
    },
    {
      id: 1,
      name: "Chocolate Sardine Bread",
      src: `${Image4}`,
      alt: "Mart-bread",
    },
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>Taste Greatness at its Peak, Mart Bread is the perfect place for a brunch between Breakfast and Dinner. With Awesome Flavours, you can always make an order which will be delivered between the working hours, we have varieties as the way you'd want it, WE ARE MINDBLOWING!! </p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple step configurations",
        "Spacious interior with Toppings",
        "Great Taste Always",
        "Yummy, Sweet, Cruncy",
        "Nourishing The Inner MAN",
        "Satisfaction Beyound Grid",
        "",
      ],
    },

    {
      name: "Pricing",
      items: [
        "Awesome Simple Affordable",
        "Moisty Tasty Fluffy Pastries",
        "Affordable To Everyone",
        "Great Taste Nourishing You",
      ],
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

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
                      <h1 className="special main-clr font-bold text-xl">
                        Mart Bread
                      </h1>
                    </div>
                    <div className="flex">
                      <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <Link
                          to="/"
                          className="main-clr  text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                          Home
                        </Link>
                        <Link
                          to="/signup"
                          className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                          Sign Up
                        </Link>
                        <Link
                          to="/login"
                          className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                          Login
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
                            className="block h-6 w-6 font-bold"
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
                      to="/signup"
                      className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                      Sign Up
                    </Link>
                    <Link
                      to="/login"
                      className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    >
                      Login
                    </Link>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            // pagination={{ clickable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}

            className="hidden md:block"
          >
            <SwiperSlide>
              <div className="rounded-lg py-6 ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="image1">
                  <div className="pt-5">
                    <h1 className="text-gray-600 font-medium text-base text-center ">
                      Introducing Mart-Bread
                    </h1>
                    <p className="text-gray-600 font-medium text-base text-center">
                      Shop Online For Your Favourite Varieties of Bread
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg py-6 ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="image2">
                  <div className="pt-5">
                    <h1 className="text-gray-600 font-medium text-base text-center ">
                      Tasty Delicious,Awesome Greatness ...
                    </h1>
                    <p className="text-gray-600 font-medium text-base text-center">
                      Make Your Order, Now!!!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg py-6 ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="image3">
                  <div className="pt-2">
                    <h1 className="font-medium text-base text-center ">
                      Ginger Bread, Desserts, Topping and Many More..
                    </h1>
                    <p className="font-medium text-base text-center">
                      Shop Online Now !!!
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          {/* ------------------------Header After Carousel Starts-------------------------------- */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block main-clr"> Mart Bread</span>

                <span className="block">Ready to dive in? Order Now !</span>
                <span className="block">Start your free trial today.</span>
              </h2>
              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="/login"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white main-clr"
                  >
                    Get started
                  </a>
                </div>
                <div className="ml-3 inline-flex">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-white text-base font-medium rounded-md main-bg"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/*---------------------------Header After Carousel Ends------------------------------ */}

          {/* ---------------------Card Layout Starts------------------------ */}

          <div className="bg-white py-16 lg:py-24">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative py-24 px-8 main-bg rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div className="absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply">
                  <img
                    src={Image5}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative lg:col-span-1 ">
                  <h1 className="relative lg:col-span-1 text-white  special font-bold text-4xl">
                    Mart-Bread
                  </h1>
                  <blockquote className="mt-6 text-white">
                    <p className="text-xl font-medium sm:text-2xl">
                      Mart Bread has completely transformed how we render our
                      services with customers. We've seen record bookings and
                      decided higher customer satisfaction, and reduced churn on
                      every of our products
                    </p>
                    <footer className="mt-6">
                      <p className="flex flex-col font-medium">
                        <span>Femi Obadimu</span>
                        <span>CEO, Mart-Bread</span>
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------------Card Layout Ends------------------------ */}

          {/* -----------------------Products Starts--------------------- */}
          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                {/* Image gallery */}
                <Tab.Group as="div" className="flex flex-col-reverse">
                  {/* Image selector */}
                  <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                    <Tab.List className="grid grid-cols-4 gap-6">
                      {product.images.map((image) => (
                        <Tab className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50">
                          {({ selected }) => (
                            <>
                              <span className="sr-only main-clr">
                                {image.name}
                              </span>
                              <span className="absolute inset-0 rounded-md overflow-hidden">
                                <img
                                  src={image.src}
                                  alt=""
                                  className="w-full h-full object-center object-cover"
                                />
                              </span>
                              <span
                                className={classNames(
                                  selected
                                    ? "ring-main-clr"
                                    : "ring-transparent",
                                  "absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none"
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>

                  <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
                    {product.images.map((image) => (
                      <Tab.Panel>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-center object-cover sm:rounded-lg"
                        />
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                {/* Product info */}
                <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                  <h1 className="text-3xl font-extrabold main-clr tracking-tight text-gray-900">
                    {product.name}
                  </h1>

                  <div className="mt-3">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-2xl special font-extrabold text-gray-900">
                      {product.price}
                    </p>
                  </div>

                  {/* Reviews */}
                  <div className="mt-3">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            className={classNames(
                              product.rating > rating
                                ? "main-clr"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{product.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="sr-only">Description</h3>

                    <div
                      className="text-base text-gray-700 space-y-6"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                  </div>

                  <form className="mt-6">
                    <div className="mt-10 flex sm:flex-col1">
                      <Link to="/login">
                        <button
                          type="submit"
                          className="max-w-xs flex-1 main-bg border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50  sm:w-full"
                        >
                          Add to bag
                        </button>
                      </Link>

                      <button
                        type="button"
                        className="ml-4 py-3 px-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                      >
                        <HeartIcon
                          className="h-6 w-6 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Add to favorites</span>
                      </button>
                    </div>
                  </form>

                  <section aria-labelledby="details-heading" className="mt-12">
                    <h2 id="details-heading" className="sr-only">
                      Additional details
                    </h2>

                    <div className="border-t divide-y divide-gray-200">
                      {product.details.map((detail) => (
                        <Disclosure as="div">
                          {({ open }) => (
                            <>
                              <h3>
                                <Disclosure.Button className="group relative w-full py-6 flex justify-between items-center text-left">
                                  <span
                                    className={classNames(
                                      open
                                        ? "text-indigo-600"
                                        : "text-gray-900",
                                      "text-sm font-medium"
                                    )}
                                  >
                                    {detail.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusSmIcon
                                        className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusSmIcon
                                        className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel
                                as="div"
                                className="pb-6 prose prose-sm"
                              >
                                <ul>
                                  {detail.items.map((item) => (
                                    <li>{item}</li>
                                  ))}
                                </ul>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------Products Ends------------------- */}

          {/* ----------------------Feedbacks Starts----------------- */}
          <div className="bg-white">
            <div aria-hidden="true" className="relative">
              <img
                src={Logobg}
                alt=""
                className="w-full h-96 object-center object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white" />
            </div>

            <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
              <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
                <h2 className="text-3xl main-clr special font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Mart Bread
                </h2>
                <p className="mt-4 text-xl  text-gray-500">
                  Mart Bread is an restaurant to keep your desk filled with the
                  tasty, with flavours all day long. Enriching you to the
                  Ultimate Greatness.
                </p>
              </div>

              <dl className="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                {features.map((feature) => (
                  <div className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* -----------------Feedbacks Ends------------------------- */}

          {/*--------------------------- Pricing Starts  ----------------------*/}
          <div className="main-bg py-14">
            <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
              <div className="text-center">
                <h2 className="text-lg leading-6 font-semibold text-white uppercase tracking-wider">
                  Pricing
                </h2>
                <p className="mt-2 text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Shop At The right price for you, Mart Bread
                </p>
                <p className="mt-3 max-w-4xl mx-auto text-xl text-white sm:mt-5 sm:text-2xl">
                  Tasty Delicious Desserts, Bread, Sausages, Topping,
                  Cheesecake, Ginger-Bread, Puddings, Cupcakes and Many more
                </p>
              </div>
            </div>

            <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
              <div className="relative z-0">
                <div className="absolute inset-0 h-5/6 main-bg lg:h-2/3" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="relative lg:grid lg:grid-cols-7">
                    <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                      <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                        <div className="flex-1 flex flex-col">
                          <div className="bg-white px-6 py-10">
                            <div>
                              <h3
                                className="text-center text-2xl font-medium special text-gray-900"
                                id="tier-hobby"
                              >
                                Basic
                              </h3>
                              <div className="mt-4 flex items-center justify-center">
                                <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                                  <span className="mt-2 mr-2 text-4xl font-medium">
                                    ₦
                                  </span>
                                  <span className="font-extrabold">1999</span>
                                </span>
                                <span className="text-xl font-medium text-gray-500 ">
                                  /month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                            <ul className="space-y-4">
                              {hobbyFeatures.map((feature) => (
                                <li className="flex justify-center">
                                  <div className="flex-shrink-0">
                                    <CheckIcon
                                      className="flex-shrink-0 h-6 w-6 main-clr"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <p className="ml-3 text-base font-medium text-gray-500">
                                    {feature}
                                  </p>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-8">
                              <div className="rounded-lg shadow-md">
                                <Link
                                  to="/login"
                                  className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium main-clr hover:bg-gray-50"
                                  aria-describedby="tier-hobby"
                                >
                                  Start your trial
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                      <div className="relative z-10 rounded-lg shadow-xl">
                        <div
                          className="pointer-events-none absolute inset-0 rounded-lg border-2 border-gray-300"
                          aria-hidden="true"
                        />
                        <div className="absolute inset-x-0 top-0 transform translate-y-px">
                          <div className="flex justify-center transform -translate-y-1/2">
                            <span className="inline-flex rounded-full main-bg px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                              Most popular
                            </span>
                          </div>
                        </div>
                        <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                          <div>
                            <h3 className="text-center text-3xl font-semibold special text-gray-900 sm:-mx-6 special">
                              Elite
                            </h3>
                            <div className="mt-4 flex items-center justify-center">
                              <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                                <span className="mt-2 mr-2 text-4xl font-medium">
                                  ₦
                                </span>
                                <span className="font-extrabold">5999</span>
                              </span>
                              <span className="text-2xl font-medium text-gray-500">
                                /month
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                          <ul className="space-y-4">
                            {growthFeatures.map((feature) => (
                              <li className="flex justify-center">
                                <div className="flex-shrink-0">
                                  <CheckIcon
                                    className="flex-shrink-0 h-6 w-6 main-clr"
                                    aria-hidden="true"
                                  />
                                </div>
                                <p className="ml-3 text-base font-medium text-gray-500">
                                  {feature}
                                </p>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-10">
                            <div className="rounded-lg shadow-md">
                              <Link
                                to="/login"
                                className="block w-full text-center rounded-lg border border-transparent px-6 py-4 text-xl leading-6 font-medium text-white main-bg"
                                aria-describedby="tier-growth"
                              >
                                Start your trial
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                      <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                        <div className="flex-1 flex flex-col">
                          <div className="bg-white px-6 py-10">
                            <div>
                              <h3 className="text-center text-2xl font-medium special text-gray-900">
                                Premium
                              </h3>
                              <div className="mt-4 flex items-center justify-center">
                                <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                                  <span className="mt-2 mr-2 text-4xl font-medium">
                                    ₦
                                  </span>
                                  <span className="font-extrabold">3999</span>
                                </span>
                                <span className="text-xl font-medium text-gray-500">
                                  /month
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                            <ul className="space-y-4">
                              {scaleFeatures.map((feature) => (
                                <li className="flex justify-center">
                                  <div className="flex-shrink-0">
                                    <CheckIcon
                                      className="flex-shrink-0 h-6 w-6 main-clr"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <p className="ml-3 text-base font-medium text-gray-500">
                                    {feature}
                                  </p>
                                </li>
                              ))}
                            </ul>
                            <div className="mt-8">
                              <div className="rounded-lg shadow-md">
                                <Link
                                  to="/login"
                                  className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium main-clr hover:bg-gray-50"
                                  aria-describedby="tier-scale"
                                >
                                  Start your trial
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------Pricing Ends ------------------------- */}

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
