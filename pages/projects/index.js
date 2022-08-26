import React from "react";
import { HStack, Box, Text } from "@chakra-ui/react";
import ProjectCard from "../../components/ProjectCard";

function Projects() {
  const aboutName = {
    color: "#79C7FA",
  };
  const line = {
    height: "2px",
  };
  return (
    <>
      <HStack justifyContent={"center"} gap={"11px"} marginBottom={"2em"}>
        <Box
          style={line}
          bgColor={"white"}
          w={{ md: "90px", base: "45px" }}
        ></Box>
        <Text
          fontSize={{ base: "1.5em", md: "2.5em" }}
          fontWeight={"600"}
          m={0}
        >
          My <span style={aboutName}>Projects</span>
        </Text>
        <Box
          style={line}
          bgColor={"white"}
          w={{ md: "90px", base: "45px" }}
        ></Box>
      </HStack>
      <ProjectCard />
    </>
  );
}

export default Projects;
