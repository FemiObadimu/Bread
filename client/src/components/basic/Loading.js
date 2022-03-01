import React from "react";
import { Puff } from "@agney/react-loading";

const Loading = () => {
  return (
    <div>
      <div className="loading">
        <Puff className="puff" width="70" />
      </div>
    </div>
  );
};

export default Loading;
