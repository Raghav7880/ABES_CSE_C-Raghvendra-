import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Navbar}  from "./component/Navbar";
import  Card1  from "./component/Card1";
import Comp from "./component/Comp";
import CompAdd from "./component/CompAdd";

function App() {
  return (
    <div>
      <Navbar  />
      <br />
      <Comp />
     <br />
     
      <div id="address">
        <CompAdd />
      </div>
    </div>
  );
}

export default App;
