import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <Box
      bgColor={"rgb(62, 43, 43)"}
      w={"100%"}
      color="white"
      p={{ md: "1em 5em", base: "1em 3em" }}
      overflow={"auto"}
    >
      <Navbar />
      <Box alignItems={"center"} p={{ lg: "0em 3em", base: "2em 0" }}>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
