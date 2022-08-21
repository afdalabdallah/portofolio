import { Box, Image } from "@chakra-ui/react";
import React from "react";

function LandingImg() {
  return (
    <div>
      <Box
        overflow={"hidden"}
        w={"370px"}
        h={"370px"}
        borderRadius={"50%"}
        bgColor={"blue"}
      >
        <Image
          marginTop={"-100px"}
          maxH={"130%"}
          minW={"100%"}
          src="foto-bromo.jpg"
          alt="foto-bromo"
          fit={"cover"}
        />
      </Box>
    </div>
  );
}

export default LandingImg;
