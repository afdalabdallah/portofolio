import { Box, StackItem, VStack, Text } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { keyframes, css } from "styled-components";

const gradientAnimation = keyframes`
  0% {  background-position: 100% 0%; }
  10% {background-position: 80% 0%;}
  20% { background-position: 60% 0%; }
  30% { background-position: 40% 0%; }
  40% { background-position: 20% 0%; }
  50% {  background-position: 0% 0%; }
  60% { background-position: -20% 0%; }
  70% { background-position: -40% 0%; }
  80% { background-position: -60% 0%; }
  90% { background-position: -80% 0%; }
  100% {  background-position: -100% 0%; }
`;

const AnimatedTextGradient = styled.p`
  animation: ${gradientAnimation} 6s linear infinite;
  background: linear-gradient(
    to right,
    #056cb1,
    #057fd0,
    #0e99f6,
    #75bff1,
    #79c7fa,
    #056cb1,
    #057fd0,
    #0e99f6,
    #75bff1,
    #79c7fa
  );
  // background: linear-gradient(to right, red, blue, green, red, blue, green);
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  font-weight: 700;
  margin: 0;
  font-size: ${(props) => props.base};

  @media screen and (min-width: 48em) {
    font-size: ${(props) => props.fontSize};
  }
`;
function AnimatedText(props) {
  return (
    <AnimatedTextGradient fontSize={props.fontSize} base={props.base}>
      {props.text}
    </AnimatedTextGradient>
  );
}

export default AnimatedText;
