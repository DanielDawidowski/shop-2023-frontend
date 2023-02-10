import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Icon = styled(motion.svg)`
  width: 35px;
  height: 35px;
  fill: ${(props) => props.theme.color};
  :hover {
    /* border-top: 1px solid ${(props) => props.theme.red};
    border-right: 1px solid ${(props) => props.theme.red};
    border-left: 1px solid ${(props) => props.theme.red};
    border-bottom: 1px solid ${(props) => props.theme.white}; */
    border: 1px solid ${(props) => props.theme.red};
    @media (max-width: ${(props) => props.theme.breakpoint_small}) {
      border: none;
    }
  }

  ${(props) =>
    props.noborder &&
    css`
      :hover {
        border: none;
      }
    `}
  ${(props) =>
    props.search &&
    css`
      width: 25px;
      height: 25px;
    `}
    ${(props) =>
    props.red &&
    css`
      fill: ${(props) => props.theme.red};
    `}
`;
