import React from "react";
import { motion } from "framer-motion";

const genderArr = ["Men", "Women", "Kids"];

const GenderFilter = ({ dispatch, gender }) => {
  const handleGender = (e) => {
    let justChecked = e.target.value;
    if (typeof window !== "undefined") {
      if (localStorage.getItem("gender")) {
        gender = JSON.parse(localStorage.getItem("gender"));
      }

      // localStorage.setItem("gender", JSON.stringify(justChecked));
      dispatch({
        type: "GENDER",
        payload: justChecked,
      });
      dispatch({
        type: "CATEGORY",
        payload: "",
      });
      dispatch({
        type: "SUB_CATEGORY",
        payload: [],
      });
      dispatch({
        type: "SIZE",
        payload: [],
      });
      dispatch({
        type: "COLOR",
        payload: [],
      });
      dispatch({
        type: "BRAND",
        payload: [],
      });
    }
  };

  return (
    <motion.div className="filter__option">
      <h3>Gender</h3>
      {genderArr.map((g, i) => {
        return (
          <div className="filter__option--item" key={i}>
            <input
              id={g}
              type="radio"
              name={g}
              value={g.toLowerCase()}
              onChange={(e) => handleGender(e)}
              checked={g.toLowerCase() === gender}
            />
            <label htmlFor={g} name={g}>
              {g}
            </label>
          </div>
        );
      })}
    </motion.div>
  );
};

export default GenderFilter;
