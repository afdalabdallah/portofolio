import { Icon } from "@chakra-ui/react";
import React from "react";
import { FaComment } from "react-icons/fa";
import styled from "styled-components";
import { keyframes, css } from "styled-components";

const growKeyframes = keyframes`
  0% {transform: scale(0) rotate(45deg)}
  50% {transform: scale (1) }
  80% {transgorm: scale(1)}
`;

const GrowingAnimation = styled.div`
  transform: rotate(0)
  transition: transform 2s
  position: absolute;
  bottom: 50%;
  left: 100%;
  animation: ${growKeyframes} 2s ease 1;
`;

function GrowAnimation() {
  return (
    <>
      <GrowingAnimation>
        {/* Halo */}
        <Icon
          top={0}
          right={-12}
          boxSize={{ md: "2.5em", base: "1.5em" }}
          as={FaComment}
        />
      </GrowingAnimation>
    </>
  );
}

export default GrowAnimation;
