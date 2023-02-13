import styled from "styled-components";
import { motion } from "framer-motion";

export const NavStyles = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.background};
  border-right: 1px solid ${(props) => props.theme.color};
  .nav__header {
    width: 100%;
    padding: 0 ${(props) => props.theme.size1};
    background: ${(props) => props.theme.green};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.color};
  }
  .nav__content {
    .nav__gender--list {
      display: flex;
      width: 100%;
      border-bottom: 1px solid ${(props) => props.theme.color};

      .gender {
        width: 100%;
        display: grid;
        place-items: center;
        :nth-child(2) {
          border-right: 1px solid ${(props) => props.theme.color};
          border-left: 1px solid ${(props) => props.theme.color};
        }
        h2 {
          padding: ${(props) => props.theme.size1};
          margin: ${(props) => props.theme.size1};
        }
      }
    }
    .nav__category--list {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-items: flex-end;
      width: 100%;
      padding: ${(props) => props.theme.size4};
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        margin-top: ${(props) => props.theme.size1};
        width: 100%;
        border: 1px solid ${(props) => props.theme.red};
        border-radius: 4px;
        padding: ${(props) => props.theme.size2};
        h3 {
          font-size: ${(props) => props.theme.size4};
          font-weight: 700;
        }
      }
    }
  }
`;
