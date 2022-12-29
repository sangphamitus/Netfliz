import React from "react";

import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import waiting from "../assets/images/404.jpg";

function WaitingPage() {
  return (
    <div className="flex justify-center w-auto h-screen">
      <img src={waiting} />
    </div>
  );
}

export default {
  routeProps: {
    path: "/404",
    main: WaitingPage,
  },
};
