import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import WatchMoviePage from "./pages/WatchMoviePage";

function App() {
  return (
  <div className="App bg-[#082032]">
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/LogIn' element={<WatchMoviePage/>} />
      <Route path='/SignUp' element={<SignUpPage />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
