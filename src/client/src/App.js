import { BrowserRouter, Route, Routes } from "react-router-dom";
import modules from "./pages";
import axios from "axios";
import WaitingPage from "./pages/404page";

function App() {
  axios.interceptors.request.use(function (config) {
    config.headers["Access-Control-Allow-Origin"] = "*";

    return config;
  });
  const group = modules.map((x) => x.routeProps);

  return (
    <BrowserRouter className="App bg-[#082032]">
      <Routes>
        {group.map((routeProps, idx) => {
          return (
            <Route
              key={idx}
              path={routeProps.path}
              element={<routeProps.main />}
            />
          );
        })}

        {/* TODO: Check if user logged in => remove LogInPage + SignUpPage */}
        <Route path="*" element={<WaitingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
