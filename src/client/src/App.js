// import logo from "./logo.svg";
import { Button } from "./components/Button";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Login } from "./routes/Login";
import { Signup } from "./routes/Signup";
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="App bg-[#082032]">
      <NavBar />
      <Banner />
      
      <Login/>
      <Signup/>
      <Footer/>
    </div>
  );
}

export default App;
