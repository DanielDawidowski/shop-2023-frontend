import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderStyles = styled(motion.header)`
  margin: 0;
  width: 100%;
  color: ${(props) => props.theme.red};
  .header--inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header--genders {
      display: flex;
      .gender {
        margin-right: ${(props) => props.theme.size1};
      }
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
  }
`;
