import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { items } from "./iconsArrays";
import { CarouselStyles } from "./carouselStyles";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const carouselVariants = {
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
  // const [hover, setHover] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextStep();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [nextStep]);

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
      <motion.div className="slideshow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            className="slideshow__title"
            key={items[index].id}
            style={{ left: items[index].left }}
          >
            {/* <motion.h3 style={{ fontSize: items[index].size }}>
              {items[index].title}
            </motion.h3> */}
            <motion.h3 variants={item} initial="hidden" animate="show">
              {items[index].title}
            </motion.h3>
            {/* <motion.h3>{items[index].id}</motion.h3> */}
            <motion.h4 variants={item} initial="hidden" animate="show">
              {items[index].sub_title}
            </motion.h4>
            <motion.ul
              className="slideshow__title--icons"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {items[index].icons.map((icon, i) => {
                return (
                  <motion.li
                    className="slideshow__title--icon"
                    key={i}
                    variants={item}
                  >
                    <motion.img src={icon.src} alt="icon" />
                  </motion.li>
                );
              })}
            </motion.ul>
            <motion.div>
              <motion.button
                className="slideshow__title--btn"
                variants={item}
                initial="hidden"
                animate="show"
              >
                Show Now
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div className="slideshow__inner">
            <motion.img
              whileTap={{ cursor: "grabbing" }}
              variants={carouselVariants}
              animate="animate"
              initial="initial"
              exit="exit"
              src={items[index].image}
              alt="slides"
              className="slideshow__inner--item"
              key={items[index].id}
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
            {/* <motion.button
              className="slideshow__inner--btn prevButton"
              onClick={prevStep}
              onHoverStart={() => setHover(true)}
              onHoverEnd={() => setHover(false)}
            >
              {hover && <motion.span>◀</motion.span>}
            </motion.button>

            <motion.button
              className="slideshow__inner--btn nextButton"
              onClick={nextStep}
              onHoverStart={() => setHover(true)}
              onHoverEnd={() => setHover(false)}
            >
              {hover && <motion.span>▶</motion.span>}
            </motion.button> */}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </CarouselStyles>
  );
}

export default Carousel;
