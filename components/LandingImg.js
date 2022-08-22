import { Box, Image } from "@chakra-ui/react";
import React from "react";

function LandingImg() {
  const responsiveImg = ["250px", "370px"];
  return (
    <div>
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
          src="https://drive.google.com/uc?export=view&id=1A1POyPPGHUv3oUieq_IxiJI0N8paWolr"
          alt="foto-bromo"
          fit={"cover"}
          placeholder="blur"
        />
      </Box>
    </div>
  );
}

export default LandingImg;
