import { Box } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const slideAnimation = (x, y) => keyframes`
0% {transform: translate(${x}px,${y}px); opacity:0}
100% {transform: translate(0,0); opacity: 1}
`;

const SlideFadeAnimation = styled.div`
  transition: all 1s;
  animation: ${(props) => slideAnimation(props.x, props.y)}
    ${(props) => props.delay}s ${(props) => props.times};
`;

export default SlideFadeAnimation;
