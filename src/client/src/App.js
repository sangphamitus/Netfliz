// import logo from "./logo.svg";
import { Button } from "./components/Button";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
// import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Button theme={"bg-gray-200"}>
        <p className="font-normal text-5xl font-button text-red-600">LOGIN</p>
      </Button>
      <Button theme={"bg-red-600"}>
        <p className="font-normal text-5xl font-button text-gray-200">SIGNUP</p>
      </Button>
      <Form isLogin={true} />
      <Form isLogin={false} />
    </div>
  );
}

export default App;
