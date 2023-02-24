import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SliderStyles } from "./sliderStyles";

function Slider() {
  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    // console.log("scrollWidth---", ref.current.scrollWidth);
    // console.log("offsetWidth---", ref.current.scrollWidth);
    setWidth(ref.current.scrollWidth * 1.25 - ref.current.scrollWidth);
    // console.log("width---", -width);
  }, [width]);

  return (
    <SliderStyles>
      <motion.div
        className="carousel"
        ref={ref}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="carousel__inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {[...Array(6).keys()].map((item, key) => (
            <motion.div key={key} className="carousel__inner--item">
              <div>{item + 1}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SliderStyles>
  );
}

export default Slider;
