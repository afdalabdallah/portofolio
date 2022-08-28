import { Box, Image } from "@chakra-ui/react";
import React from "react";
import FadeAnimation from "./animation/FadeAnimation";

function LandingImg() {
  const responsiveImg = ["250px", "370px"];
  return (
    <div>
      <FadeAnimation delay="1">
        <Box
          overflow={"hidden"}
          w={responsiveImg}
          h={responsiveImg}
          borderRadius={"50%"}
        >
          <Image
            marginTop={["-65px", "-100px"]}
            maxH={"130%"}
            minW={"100%"}
            src="/foto-bromo.JPG"
            alt="foto-bromo"
            fit={"cover"}
            placeholder="blur"
          />
        </Box>
      </FadeAnimation>
    </div>
  );
}

export default LandingImg;
