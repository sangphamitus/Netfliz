import axios from "axios";
import React from "react";
import { Footer, NavBar, ResultItem, Text } from "../components";

function ResultPage() {
  const [result, setResult] = React.useState([]);
  let value = decodeURI(window.location.search).split("?")[1].split("=");
  const fetchSearchResultData = async () => {
    console.log(value[1]);
    console.log(`${process.env.REACT_APP_ENDPOINT}videos/search`);
    axios
      .post(`${process.env.REACT_APP_ENDPOINT}videos/search`, {
        name: value[1].replace("+", " "),
      })
      .then((res) => {
        console.log(res.data.data);
        setResult(res.data.data);
      });
  };

  React.useEffect(() => {
    fetchSearchResultData();
  }, []);
  return (
    <div className="bg-scroll bg-[#082032]">
      <NavBar />
      <div className="flex flex-col py-28 px-11">
        <div className="border-b-2 border-spacing-1 mb-7">
          <Text
            customTheme="text-6xl font-button text-[#CD0574]"
            text={`RESULTS FOR "${value[1].replace("+", " ")}"`}
          />
        </div>

        {result &&
          result.map((each) => (
            <ResultItem
              key={each.vid}
              vid={each.vid}
              movieName={each.name}
              imgSrc={each.image}
            />
          ))}
        {/* <ResultItem
          movieName="EVERYTHING everywhere all at once"
          imgSrc={TestImg}
        />
        <ResultItem
          movieName="EVERYTHING everywhere all at once"
          imgSrc={TestImg}
        /> */}
      </div>
      <Footer />
    </div>
  );
}

export default {
  routeProps: {
    path: "/videos/search",
    main: ResultPage,
  },
};
