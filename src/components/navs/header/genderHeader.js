import React from "react";
import { useDispatch, useSelector } from "react-redux";

const genderArr = ["Men", "Women", "Kids"];

const GenderHeader = () => {
  let dispatch = useDispatch();
  let { gender } = useSelector((state) => ({ ...state }));

  const setGender = (gender) => {
    // add to redux state
    dispatch({
      type: "GENDER",
      payload: gender,
    });
    // console.log("gender ---", gender);
  };

  return (
    <>
      {genderArr.map((g, i) => {
        let gen = g.toLowerCase();
        return (
          <li key={i} className="gender" onClick={() => setGender(gen)}>
            <h2
              style={{
                background: gender === gen && "#f94144",
                color: gender === gen && "#ffffff",
                border: gender === gen && "1px solid #f94144",
                borderRadius: gender === gen && "4px",
              }}
            >
              <b>{g}</b>
            </h2>
          </li>
        );
      })}
    </>
  );
};

export default GenderHeader;
