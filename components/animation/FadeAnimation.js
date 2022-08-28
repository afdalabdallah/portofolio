import { keyframes } from "styled-components";
import styled from "styled-components";

const textFade = keyframes`
0% {opacity:0}
100% {opacity: 1}
`;

const FadeAnimation = styled.div`
  transition: opacity;
  animation: ${textFade} ${(props) => props.delay}s;
`;

export default FadeAnimation;
