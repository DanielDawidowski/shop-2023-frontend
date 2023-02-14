import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const LogoStyles = styled(motion.div)`
  display: flex;
  align-items: center;
  span {
    margin-left: ${(props) => props.theme.size1};
    font-weight: 700;
    color: ${(props) => props.theme.red};
  }
`;

const Icon = styled.svg`
  width: 35px;
  height: 35px;
  fill: ${(props) => props.theme.color};
  path {
    stroke: ${(props) => props.theme.color};
  }
  polygon {
    stroke: ${(props) => props.theme.color};
  }
`;

const Logo = () => (
  <LogoStyles>
    <Icon viewBox="0 -2 70 70">
      <path
        d="M28,13.49a6.14,6.14,0,0,1,7.17-4.14A5.93,5.93,0,0,1,39.92,14a5.49,5.49,0,0,1-.76,3.86,5.81,5.81,0,0,1-1.78,1.73l-4,2.63a0.38,0.38,0,0,0-.17.31v5.68"
        fill="none"
        stroke="#752323"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />

      <path
        d="M33,28.23L60.75,43c4.29,2.29,2.06,7.23-3.26,7.23h-49C3.21,50.23,1,45.29,5.27,43Z"
        fill="none"
        stroke="#752323"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <polygon
        points="17.98 43.73 33.01 35.73 47.66 43.73 17.98 43.73"
        fill="none"
        stroke="#752323"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Icon>
    <span>SHOP</span>
  </LogoStyles>
);
export default Logo;
