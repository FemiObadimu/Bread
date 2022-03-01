import React, { useState } from "react";
import Loading from "../Loading";
import Logo from "../../assets/images/bigbread.png";
import { useLocation, Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
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
        <div className="loading text-center">
          <div className="text-center ml-16">
            <img className="h-8 w-auto " src={Logo} alt="Mart Bread" />
          </div>
          <h1 className=" main-clr text-xl font-bold"> Mart Bread</h1>

          <div className="py-4 font-bold text-xl  text-center main-clr special">
            Transaction {location.state.message}
          </div>

          <p className="font-medium main-clr py-4 text-base special text-center">
            <h1>{location.state.status}</h1>
          </p>
          <Link to="/dashboard/" className="text-center main-clr text-base">
            Go to Dashboard
          </Link>
        </div>
      )}
    </div>
  );
};

export default Success;
