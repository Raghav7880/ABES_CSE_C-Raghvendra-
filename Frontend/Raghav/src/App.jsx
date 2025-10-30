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
     <div id="cards">
       <Card1 name="Pizza" price="$100"  img1="https://rukminim2.flixcart.com/image/480/480/kxgfzbk0/wall-decoration/d/q/e/food-pizza-wallpaper-paper-poster-1-vp-221221-617-poster-smoky-original-imag9wjrxfzzhrpd.jpeg?q=90"/>
      <br />
      <Card1 name="Burger" price="$80" img1="https://blog.swiggy.com/wp-content/uploads/2025/01/Image-9_-meat-burger-1024x538.png"/>
      <br />
      <Card1 name="Pasta" price="$120" img1="https://media.istockphoto.com/id/857927726/photo/pasta-with-meat-tomato-sauce-and-vegetables.jpg?s=612x612&w=0&k=20&c=1bcoXcBKM7Hb1ASweDx-vcwXEgy-WrCGM71dVP2Cp0w="/>
      <br />
     </div>
      <div id="address">
        <CompAdd />
      </div>
    </div>
  );
}

export default App;
