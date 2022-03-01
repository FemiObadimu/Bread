import React, { useState, useContext } from "react";
import Loading from "../Loading";
import Logo from "../../assets/images/bigbread.png";
import ProductContext from "../../../context/product/productContext";
import { Fragment } from "react";
import { ChevronRightIcon, ChevronUpIcon } from "@heroicons/react/solid";
import { Popover, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { PaystackConsumer } from "react-paystack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  const history = useNavigate();
  const steps = [
    { name: "Shop", href: "/dashboard/shop", status: "complete" },

    { name: "Cart", href: "/dashboard/cart", status: "complete" },
    {
      name: "Checkout",
      href: "/dashboard/checkout",
      status: "current",
    },
  ];
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const [data, setData] = useState({
    email: "",
    name: "",
    cardNumber: "",
    cvc: "",
    address: "",
    expdate: "",
    company: "",
    city: "",
    state: "",
    postal: "",
  });

  const {
    email,
    name,
    cardNumber,
    cvc,
    address,
    expdate,
    company,
    city,
    state,
    postal,
  } = data;

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const productContext = useContext(ProductContext);

  const { cart, clearCart } = productContext;

  const config = {
    reference: new Date().getTime(),
    email: `${email}`,
    amount:
      cart.reduce(
        (accumulate, item) => accumulate + parseInt(item.price) * item.quantity,
        0
      ) *
        0.02 +
      cart.reduce(
        (accumulate, item) => accumulate + parseInt(item.price) * item.quantity,
        0
      ) *
        105,
    publicKey: `${process.env.REACT_APP_PAYSTACK_PUBLIC_KEY}`,
  };

  // you can call this function anything
  const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    clearCart();
    history("/dashboard/payment/success", { state: reference });
  };

  // you can call this function anything
  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };

  return (
    <div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="bg-white">
          {/* Background color split screen for large screens */}
          <div
            className="hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white"
            aria-hidden="true"
          />

          <ToastContainer
            position="top-right"
            autoClose={2000}
            newestOnTop={false}
            closeOnClick
          />
          <div
            className="hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50"
            aria-hidden="true"
          />

          <header className="relative bg-white border-b border-gray-200 text-sm font-medium text-gray-700">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-end sm:justify-center">
                <Link
                  to="/dashboard/checkout"
                  className="absolute left-0 top-1/2 -mt-4"
                >
                  <img src={Logo} alt="Mart Bread" className="h-8 w-auto" />
                  <h1 className="main-clr font-bold">Mart Bread</h1>
                </Link>
                <nav aria-label="Progress" className=" sm:block">
                  <ol className="flex space-x-4">
                    {steps.map((step, stepIdx) => (
                      <li key={step.name} className="flex items-center">
                        {step.status === "complete" ? (
                          <Link
                            to={step.href}
                            aria-current="page"
                            className="main-clr"
                          >
                            {step.name}
                          </Link>
                        ) : (
                          <Link to={step.href}>{step.name}</Link>
                        )}

                        {stepIdx !== steps.length - 1 ? (
                          <ChevronRightIcon
                            className="w-5 h-5 text-gray-300 ml-4"
                            aria-hidden="true"
                          />
                        ) : null}
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>
            </div>
          </header>

          <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
            <h1 className="sr-only">Order information</h1>

            <section
              aria-labelledby="summary-heading"
              className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
            >
              <div className="max-w-lg mx-auto lg:max-w-none">
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Order summary
                </h2>

                <ul className="text-sm font-medium text-gray-900 divide-y divide-gray-200">
                  {cart.length > 0 ? (
                    <div>
                      {cart.map((product) => (
                        <li key={product._id} className=" py-6 space-x-4">
                          <img
                            src={product.image_url}
                            alt="Mart Bread"
                            className="flex-none w-20 h-20 rounded-md object-center object-contain"
                          />
                          <p className="flex-none text-base font-medium">
                            {product.title}
                          </p>

                          <p className="text-right text-base font-bold">
                            {product.tag}
                          </p>

                          <p className="text-right  text-base font-bold">
                            ₦{product.price * product.quantity}
                          </p>
                        </li>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <div className="text-center mt-10">
                        <h1 className="main-clr special text-xl font-bold mt-10">
                          Nothing is Here,
                          <Link to="/dashboard/shop"> Go Shopping</Link>
                        </h1>
                      </div>
                    </div>
                  )}
                </ul>

                <dl className="hidden text-sm font-medium text-gray-900 space-y-6 border-t border-gray-200 pt-6 lg:block">
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd>
                      ₦{" "}
                      {cart.reduce(
                        (accumulate, item) =>
                          accumulate + parseInt(item.price) * item.quantity,
                        0
                      )}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between">
                    <dt className="text-gray-600">
                      Shipping & Taxes (2% - 5%)
                    </dt>
                    <dd>
                      ₦
                      {cart.reduce(
                        (accumulate, item) =>
                          accumulate + parseInt(item.price) * item.quantity,
                        0
                      ) * 0.02}
                    </dd>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base">Total</dt>
                    <dd className="text-base font-bold">
                      ₦{" "}
                      {cart.reduce(
                        (accumulate, item) =>
                          accumulate + parseInt(item.price) * item.quantity,
                        0
                      ) *
                        0.02 +
                        cart.reduce(
                          (accumulate, item) =>
                            accumulate + parseInt(item.price) * item.quantity,
                          0
                        )}
                    </dd>
                  </div>
                </dl>

                <Popover className="fixed bottom-0 inset-x-0 flex flex-col-reverse text-sm font-medium text-gray-900 lg:hidden">
                  <div className="relative z-10 bg-white border-t border-gray-200 px-4 sm:px-6">
                    <div className="max-w-lg mx-auto">
                      <Popover.Button className="w-full flex items-center py-6 font-medium">
                        <span className="text-xl font-bold mr-auto">Total</span>
                        <span className="text-xl font-bold mr-2">
                          ₦{" "}
                          {cart.reduce(
                            (accumulate, item) =>
                              accumulate + parseInt(item.price) * item.quantity,
                            0
                          ) *
                            0.02 +
                            cart.reduce(
                              (accumulate, item) =>
                                accumulate +
                                parseInt(item.price) * item.quantity,
                              0
                            )}
                        </span>
                        <ChevronUpIcon
                          className="w-5 h-5 text-gray-500"
                          aria-hidden="true"
                        />
                      </Popover.Button>
                    </div>
                  </div>

                  <Transition.Root as={Fragment}>
                    <div>
                      <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                      </Transition.Child>

                      <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-y-full"
                        enterTo="translate-y-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                      >
                        <Popover.Panel className="relative bg-white px-4 py-6 sm:px-6">
                          <dl className="max-w-lg mx-auto space-y-6">
                            <div className="flex items-center justify-between">
                              <dt className="text-gray-600">Subtotal</dt>
                              <dd>
                                ₦{" "}
                                {cart.reduce(
                                  (accumulate, item) =>
                                    accumulate +
                                    parseInt(item.price) * item.quantity,
                                  0
                                )}
                              </dd>
                            </div>

                            <div className="flex items-center justify-between">
                              <dt className="text-gray-600">
                                Shipping & Taxes(2% - 5%)
                              </dt>
                              <dd className="text-gray-600 font-bold">
                                ₦
                                {cart.reduce(
                                  (accumulate, item) =>
                                    accumulate +
                                    parseInt(item.price) * item.quantity,
                                  0
                                ) * 0.02}
                              </dd>
                            </div>
                          </dl>
                        </Popover.Panel>
                      </Transition.Child>
                    </div>
                  </Transition.Root>
                </Popover>
              </div>
            </section>

            <form autoComplete="off">
              <div className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
                <div className="max-w-lg mx-auto lg:max-w-none">
                  <section aria-labelledby="contact-info-heading">
                    <h2
                      id="contact-info-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Contact information
                    </h2>

                    <div className="mt-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          onChange={onChange}
                          value={email}
                          required
                          className="col-span-6 p-3  shadow-sm block w-full main-clr sm:text-sm border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </section>
                  <section aria-labelledby="payment-heading" className="mt-10">
                    <h2
                      id="payment-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Payment details
                    </h2>

                    <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-4">
                      <div className="col-span-3 sm:col-span-4">
                        <label
                          htmlFor="name-on-card"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name on card
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="name-on-card"
                            name="name"
                            value={name}
                            onChange={onChange}
                            required
                            autoComplete="off"
                            className="col-span-6 p-3  shadow-sm block w-full main-clr sm:text-sm border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="col-span-3 sm:col-span-4">
                        <label
                          htmlFor="card-number"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Card number
                        </label>
                        <div className="mt-1">
                          <input
                            type="number"
                            id="card-number"
                            name="cardNumber"
                            required
                            value={cardNumber}
                            onChange={onChange}
                            autoComplete="off"
                            className="col-span-6 p-3  shadow-sm block w-full main-clr sm:text-sm border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="col-span-2 sm:col-span-3">
                        <label
                          htmlFor="expiration-date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Expiration date (MM/YY)
                        </label>
                        <div className="mt-1">
                          <input
                            type="number"
                            value={expdate}
                            name="expdate"
                            onChange={onChange}
                            required
                            id="expiration-date"
                            autoComplete="off"
                            className="col-span-6 p-3  shadow-sm block w-full main-clr sm:text-sm border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="cvc"
                          className="block text-sm font-medium text-gray-700"
                        >
                          CVC
                        </label>
                        <div className="mt-1">
                          <input
                            value={cvc}
                            type="number"
                            name="cvc"
                            required
                            onChange={onChange}
                            id="cvc"
                            autoComplete="off"
                            className="col-span-6 p-3  shadow-sm block w-full main-clr sm:text-sm border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="shipping-heading" className="mt-10">
                    <h2
                      id="shipping-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Shipping address
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Name / Company
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            required
                            onChange={onChange}
                            id="company"
                            value={company}
                            name="company"
                            className="col-span-6 p-3  shadow-sm block w-full main-clr sm:text-sm border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Address
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="address"
                            required
                            value={address}
                            onChange={onChange}
                            name="address"
                            autoComplete="street-address"
                            className="col-span-6 p-3  shadow-sm block w-full main-clr sm:text-sm border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="city"
                            required
                            value={city}
                            onChange={onChange}
                            name="city"
                            autoComplete="address-level2"
                            className="col-span-6 p-3  shadow-sm block w-full main-clr sm:text-sm border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="region"
                          className="block text-sm font-medium text-gray-700"
                        >
                          State / Province
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="region"
                            required
                            name="state"
                            onChange={onChange}
                            value={state}
                            autoComplete="address-level1"
                            className="col-span-6 p-3  shadow-sm block w-full main-clr sm:text-sm border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Postal code
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            id="postal-code"
                            required
                            name="postal"
                            onChange={onChange}
                            value={postal}
                            autoComplete="postal-code"
                            className="col-span-6 p-3  shadow-sm block w-full main-clr sm:text-sm border border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section aria-labelledby="billing-heading" className="mt-10">
                    <h2
                      id="billing-heading"
                      className="text-lg font-medium text-gray-900"
                    >
                      Billing information
                    </h2>

                    <div className="mt-6 flex items-center">
                      <input
                        id="same-as-shipping"
                        name="same-as-shipping"
                        type="checkbox"
                        defaultChecked
                        required
                        className="h-4 w-4 border-gray-300 rounded main-clr"
                      />
                      <div className="ml-2">
                        <label
                          htmlFor="same-as-shipping"
                          className="text-sm font-medium text-gray-900"
                        >
                          Same as shipping information
                        </label>
                      </div>
                    </div>
                  </section>

                  <div className="text-center py-4 ">
                    <span className="main-clr font-bold text-xl">
                      Mart Bread
                    </span>
                  </div>

                  <div className=" pt-2 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
                    {/* <button
                    type="submit"
                    className="w-full main-bg border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50  sm:ml-6 sm:order-last sm:w-auto"
                  >
                    Pay Now
                  </button> */}
                    <PaystackConsumer {...componentProps}>
                      {({ initializePayment }) => (
                        <button
                          className="w-full main-bg border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50  sm:ml-6 sm:order-last sm:w-auto"
                          onClick={(e) => {
                            e.preventDefault();

                            if (
                              name === "" ||
                              email === "" ||
                              expdate === "" ||
                              cardNumber === "" ||
                              cvc === "" ||
                              address === "" ||
                              company === "" ||
                              city === "" ||
                              state === "" ||
                              postal === ""
                            ) {
                              toast.error(
                                "Kindly Fill All Fields!, Email Must be a Valid Address",
                                {
                                  position: "top-right",
                                  autoClose: 3000,
                                  hideProgressBar: true,
                                  closeOnClick: true,
                                }
                              );
                            } else {
                              initializePayment(handleSuccess, handleClose);
                            }
                          }}
                        >
                          Pay Now
                        </button>
                      )}
                    </PaystackConsumer>
                  </div>
                </div>
              </div>
            </form>
          </main>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
