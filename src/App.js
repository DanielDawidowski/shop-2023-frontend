import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
// import data from "./data.json";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Switch key={location.pathname} location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
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
