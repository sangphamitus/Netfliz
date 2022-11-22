// import logo from "./logo.svg";
//import { Button } from "./components/Button";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { ListMovies } from "./components/ListMovies";

function App() {
  return (
    <div className="App bg-[#082032]">
      <NavBar />
      <Banner />
      
      <ListMovies title={"NEW MOVIES"} />
      <ListMovies title={"HOT MOVIES"} />
      <Footer/>
    </div>
  );
}

export default App;
