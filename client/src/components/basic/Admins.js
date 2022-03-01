/* This example requires Tailwind CSS v2.0+ */
import { useContext, useState } from "react";
import { MailIcon, UserIcon } from "@heroicons/react/solid";
import { UserCircleIcon } from "@heroicons/react/outline";
import AuthContext from "../../context/auth/authContext";
import Loading from "./Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const profile = {
  avatar:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  backgroundImage:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
};

const navigation = [
  {
    name: "Account",
    href: "/admin/manage-products",
    icon: UserCircleIcon,
    current: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Admins = () => {
  const authContext = useContext(AuthContext);
  const { user, saveProduct } = authContext;

  const [loading, setLoading] = useState(true);

  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState(null);

  const [products, setProducts] = useState({
    title: "",
    tag: "",
    desc: "",
    price: "",
    quantity: "",
    image_url: `${imageUrl}`,
  });

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const onRemove = (e) => {
    e.preventDefault();

    setImage(null);
  };

  const onCloudinary = (e) => {
    e.preventDefault();

    if (!image) {
      return toast.error("Select An Image, with png,jpg format", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }

    const formData = new FormData();
    formData.append("file", image.file);
    formData.append("upload_preset", `${process.env.REACT_APP_CLOUDINARY_KEY}`);
    formData.append("cloud_name", "devscripts");
    fetch("https://api.cloudinary.com/v1_1/devscripts/image/upload", {
      method: "post",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setImageUrl(result.url);
        toast.success("Image Upload Successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      })
      .catch((err) => {
        toast.error(`${err.response}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
        });
      });
  };

  const { title, tag, desc, price, quantity } = products;

  const onChange = (e) =>
    setProducts({ ...products, [e.target.name]: e.target.value });

  const onDatabase = (e) => {
    e.preventDefault();

    const finalProducts = { ...products, image_url: imageUrl };

    if (
      title === "" ||
      tag === "" ||
      price === " " ||
      desc === "" ||
      quantity === ""
    ) {
      toast.error("Kindly Fill All Fields!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    } else {
      console.log(finalProducts);

      saveProduct(finalProducts);
      toast.success("Product Added to DataBase", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
      });

      setImage(null);

      setProducts({
        title: "",
        tag: "",
        desc: "",
        price: "",
        quantity: "",
        image_url: `${imageUrl}`,
      });
    }
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
          />
          <div>
            <img
              className="h-32 w-full object-cover lg:h-48"
              src={profile.backgroundImage}
              alt=""
            />
          </div>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
              <div className="flex">
                <img
                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                  src={profile.avatar}
                  alt=""
                />
              </div>
              <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="sm:hidden md:block mt-6 min-w-0 flex-1">
                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                    {user.name}
                  </h1>
                </div>
                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <MailIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>{user.email}</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  >
                    <UserIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span>{user.role}</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">
                {profile.name}
              </h1>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white"
                        : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                      "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-indigo-500 group-hover:text-indigo-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    <span className="truncate">{item.name}</span>
                  </a>
                ))}
              </nav>
            </aside>

            <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
              <form>
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Profile
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        This information will be displayed publicly so be
                        careful what you add to the Database
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-3">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium text-gray-700"
                        >
                          {user.name} is a verified admin user at Martify with
                          the ability to perform Full CRUD Functionalities
                        </label>
                      </div>

                      <div className="col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Add Image / Photo
                        </label>
                        <div className="mt-1 flex items-center">
                          <button
                            type="button"
                            onClick={onRemove}
                            className="ml-5 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Change
                          </button>
                        </div>
                      </div>

                      <div className="col-span-3">
                        <label className="block text-sm font-medium text-gray-700">
                          Product Image
                        </label>
                        <div className="mt-1 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center">
                          <div className="space-y-1 text-center">
                            {image ? (
                              <img src={image.blog} alt="Mart" />
                            ) : (
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium main-clr  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 "
                              >
                                <span className="text-center ">
                                  Upload a file
                                </span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  onChange={(e) => {
                                    e.preventDefault();
                                    setImage({
                                      file: e.target.files[0],
                                      blog: URL.createObjectURL(
                                        e.target.files[0]
                                      ),
                                    });

                                    console.log(e.target.files[0]);
                                  }}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG not up to 1MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center my-4">
                  <button
                    type="submit"
                    onClick={onCloudinary}
                    className="main-bg mx-3 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                  >
                    {" "}
                    Upload to DataBase
                  </button>
                </div>

                <div className="shadow sm:rounded-md sm:overflow-hidden">
                  <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Product Information
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Use a permanent address where you can recieve mail.
                      </p>
                    </div>

                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Product Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          value={title}
                          onChange={onChange}
                          id="title"
                          autoComplete="given-name"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none main-clr sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Product Tag
                        </label>
                        <input
                          type="text"
                          value={tag}
                          onChange={onChange}
                          name="tag"
                          id="tag"
                          autoComplete="tag"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none main-clr sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Product Price
                        </label>
                        <input
                          onChange={onChange}
                          type="number"
                          value={price}
                          name="price"
                          id="price"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none main-clr sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 ">
                        <label
                          htmlFor="postal-code"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Product Quantity
                        </label>
                        <input
                          type="number"
                          onChange={onChange}
                          value={quantity}
                          name="quantity"
                          id="quantity"
                          autoComplete="quantity"
                          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none main-clr sm:text-sm"
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-3 ">
                        <label
                          htmlFor="about"
                          className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >
                          Product Desciption
                        </label>
                        <div className="mt-1 col-span-6 ">
                          <textarea
                            id="desc"
                            onChange={onChange}
                            value={desc}
                            name="desc"
                            rows={3}
                            className="col-span-6 p-3  shadow-sm block w-full main-clr sm:text-sm border border-gray-300 rounded-md"
                            defaultValue={""}
                          />
                          <p className="mt-2 text-sm text-gray-500">
                            Write a description for the Product.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3  bg-gray-50 text-right sm:px-6">
                    <Link to="/dashboard">
                      <button className="main-bg mx-3 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                        Dashboard
                      </button>
                    </Link>
                    <button
                      type="submit"
                      className="main-bg mx-3 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 "
                      onClick={onDatabase}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admins;
