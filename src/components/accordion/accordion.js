import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const Accordion = ({ children }) => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <h2 role="button" onClick={() => setIsToggled((prevState) => !prevState)}>
        Filters
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
