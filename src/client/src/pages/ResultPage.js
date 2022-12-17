import axios from "axios";
import React from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { ResultItem } from "../components/ResultItem";
import { Text } from "../components/Text";
import TestImg from "../assets/images/download.jpg";

function ResultPage() {
  const [result, setResult] = React.useState([]);

  const fetchSearchResultData = async () => {
    axios.post(`${process.env.REACT_APP_ENDPOINT}videos`).then((res) => {
      console.log(res.data.data);
      setResult(res.data.data);
    });
  };

  return (
    <div className="bg-scroll bg-[#082032]">
      <div className="fixed top-0 overflow-hidden w-full z-10">
        <NavBar isLogin={"none"} />
      </div>
      <div className="flex flex-col py-28 px-11">
        <div className="border-b-2 border-spacing-1 mb-7">
          <Text
            customTheme="text-6xl font-button text-[#CD0574]"
            text={`RESULTS FOR "${"EVERY"}"`}
          />
        </div>
        {/* {result.map => ResultItem/>} */}
        <ResultItem
          movieName="EVERYTHING everywhere all at once"
          imgSrc={TestImg}
        />
        <ResultItem
          movieName="EVERYTHING everywhere all at once"
          imgSrc={TestImg}
        />
      </div>
      <Footer />
    </div>
  );
}

export default {
  routeProps: {
    path: "/search",
    main: ResultPage,
  },
};
