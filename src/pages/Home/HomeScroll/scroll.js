import { useScroll, useTransform } from "framer-motion";

import styled from "styled-components";
import { motion } from "framer-motion";

const TitleStyles = styled(motion.h1)`
  -webkit-text-stroke: 4px currentColor;
  letter-spacing: 0.06em;
  word-spacing: 0.08em;
  color: ${(props) => props.theme.color};
  font-size: calc(100vw / 6);
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  white-space: nowrap;
  text-shadow: -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000,
    1px 1px 0 #000000;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    font-size: calc(100vw / 8);
  }
`;

const SectionStyles = styled(motion.div)`
  position: sticky;
  top: 0;
  height: 25vh;
  width: 110%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  @media (max-width: ${(props) => props.theme.breakpoint_small}) {
    font-size: ${(props) => props.theme.size6};
    height: 18vh;
  }
`;

const TextScroll = styled(motion.div)`
  height: 20vh;
  width: 100%;
`;

const Scroll = ({ media }) => {
  const { scrollYProgress } = useScroll();
  const forwardX = useTransform(scrollYProgress, [0, 1], ["155%", "-150%"]);
  const backwardsX = useTransform(scrollYProgress, [0, 1], ["-100%", "-100%"]);
  const forwardXMedia = useTransform(
    scrollYProgress,
    [0, 1],
    ["355%", "-350%"]
  );
  const backwardsXMedia = useTransform(
    scrollYProgress,
    [0, 1],
    ["-250%", "-100%"]
  );
  return (
    <TextScroll animate={{ rotate: -5 }}>
      <SectionStyles>
        <TitleStyles style={{ x: media ? forwardXMedia : forwardX }}>
          We sell best clothes
        </TitleStyles>
      </SectionStyles>
      <SectionStyles>
        <TitleStyles style={{ x: media ? backwardsXMedia : backwardsX }}>
          We sell best clothes
        </TitleStyles>
      </SectionStyles>
    </TextScroll>
  );
};

export default Scroll;
