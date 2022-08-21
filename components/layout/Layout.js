import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <Box
      bgColor={"rgb(62, 43, 43)"}
      w={"100%"}
      color="white"
      p="1em 5em"
      overflow={"hidden"}
    >
      <Navbar />
      <Box h={"100%"} w={"100%"} p={{ lg: "4em 3em", base: "5em 0" }}>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
