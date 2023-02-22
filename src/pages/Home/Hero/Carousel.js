import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import foto1 from "../../../assets/Images/1.png";
import foto2 from "../../../assets/Images/2.png";
import foto3 from "../../../assets/Images/3.png";
import foto4 from "../../../assets/Images/4.png";
import foto5 from "../../../assets/Images/5.png";
import { CarouselStyles } from "./carouselStyles";

const items = [
  {
    id: 1,
    title: "First",
    image: foto1,
  },
  {
    id: 2,
    title: "Second",
    image: foto2,
  },
  {
    id: 3,
    title: "Third",
    image: foto3,
  },
  {
    id: 4,
    title: "Fourth",
    image: foto4,
  },
  {
    id: 5,
    title: "Fifth",
    image: foto5,
  },
];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      // scale: 0.5,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    // scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      // scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    };
  },
};

function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextStep();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextStep]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function nextStep() {
    setDirection(1);
    if (index === items.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(items.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <CarouselStyles>
      <div className="slideshow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.h3>{items[index].title}</motion.h3>
          <motion.img
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            src={items[index].image}
            alt="slides"
            className="slides"
            key={items[index]}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 800, bounceDamping: 10 }}
            onDragEnd={(e, { offset, velocity }) => {
              // console.log("velocity", velocity);
              if (offset.x > 10) {
                nextStep();
              } else if (offset.x < -10) {
                prevStep();
              }
            }}
          />
        </AnimatePresence>
        <button className="prevButton" onClick={prevStep}>
          ◀
        </button>
        <button className="nextButton" onClick={nextStep}>
          ▶
        </button>
      </div>
    </CarouselStyles>
  );
}

export default Carousel;
