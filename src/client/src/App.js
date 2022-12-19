import { BrowserRouter, Route, Routes } from "react-router-dom";
import modules from "./modules";

function App() {

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
