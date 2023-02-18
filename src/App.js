import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Shop from "./pages/Shop/Shop";
import Product from "./pages/Product/Product";
// import data from "./data.json";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Switch key={location.pathname} location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/product/:slug" component={Product} />
      </Switch>
    </AnimatePresence>
    // <div className="App">
    //   {data &&
    //     data.map((item, i) => {
    //       const { name, category, mark, price, gender, img, color } = item;
    //       return (
    //         <div key={i}>
    //           <img src={img} alt={name} />
    //           <h1>{name}</h1>
    //           <h2>{mark}</h2>
    //           <h3>{category}</h3>
    //           <h4>{price}</h4>
    //           <h4>{gender}</h4>
    //           <h4>{color}</h4>
    //         </div>
    //       );
    //     })}
    //   {data && <img src={data.image} alt={data.title} />}
    // </div>
  );
}

export default App;
