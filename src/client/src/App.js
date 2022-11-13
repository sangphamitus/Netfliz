// import logo from "./logo.svg";
import { Button } from "./components/Button";
// import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Button theme={"bg-gray-200 rounded-full"}>
        <p className="font-normal text-5xl font-button text-red-600">LOGIN</p>
      </Button>
      <Button theme={"rounded-full bg-red-600"}>
        <p className="font-normal text-5xl font-button text-gray-200">SIGNUP</p>
      </Button>
      <p>NetFliz</p>
    </div>
  );
}

export default App;
