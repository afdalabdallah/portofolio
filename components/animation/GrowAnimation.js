import { Box, Icon, Show, Text } from "@chakra-ui/react";
import React from "react";
import { FaComment } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";
import styled from "styled-components";
import { keyframes, css } from "styled-components";

const growKeyframes = keyframes`
  0% {transform: scale(0) rotate(45deg)};
  50% {transform: scale (1) };
  80% {transgorm: scale(1)};
`;

const GrowingAnimationBox = styled.div`
  transition: transform 2s;
  position: absolute;
  bottom: 50%;
  left: 100%;
  animation: ${growKeyframes} 2s ease 1;
`;

const dotKeyframes = keyframes`
 0% {color: inherit}
 50%{color: black}
 100% {color: black}
`;

const DotAnimationDiv = styled.div`
  animation: ${dotKeyframes} 1s infinite alternate;
  animation-delay: ${(props) => props.delay};
  position: absolute;
  top: 0.6em;
  left: ${(props) => props.left};
`;

const DotAnimationDivSmall = styled.div`
  animation: ${dotKeyframes} 1s infinite alternate;
  animation-delay: ${(props) => props.delay};
  position: absolute;
  bottom: 0.5em;
  left: ${(props) => props.left};
`;

function GrowAnimation() {
  return (
    <>
      <GrowingAnimationBox>
        <Icon boxSize={{ md: "2.5em", base: "1.5em" }} as={FaComment} />
        <Show above="md">
          <DotAnimationDiv left="0em" delay="2s">
            <Icon boxSize={{ md: "1em", base: "0.5em" }} as={GoPrimitiveDot} />
          </DotAnimationDiv>
          <DotAnimationDiv left="0.7em" delay="2.5s">
            <Icon boxSize={{ md: "1em", base: "0.5em" }} as={GoPrimitiveDot} />
          </DotAnimationDiv>
          <DotAnimationDiv left="1.5em" delay="3s">
            <Icon boxSize={{ md: "1em", base: "0.5em" }} as={GoPrimitiveDot} />
          </DotAnimationDiv>
        </Show>
        <Show below="md">
          <DotAnimationDivSmall left="2px" delay="2s">
            <Icon boxSize={{ md: "1em", base: "0.5em" }} as={GoPrimitiveDot} />
          </DotAnimationDivSmall>
          <DotAnimationDivSmall left="8px" delay="2.5s">
            <Icon boxSize={{ md: "1em", base: "0.5em" }} as={GoPrimitiveDot} />
          </DotAnimationDivSmall>
          <DotAnimationDivSmall left="14px" delay="3s">
            <Icon boxSize={{ md: "1em", base: "0.5em" }} as={GoPrimitiveDot} />
          </DotAnimationDivSmall>
        </Show>
      </GrowingAnimationBox>
    </>
  );
}

export default GrowAnimation;
