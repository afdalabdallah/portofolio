import React from "react";
import Head from "next/head";
import { HStack, Box, Text } from "@chakra-ui/react";
import ProjectCard from "../../components/ProjectCard";
import SlideFadeAnimation from "../../components/animation/SlideFadeAnimation";
import FadeAnimation from "../../components/animation/FadeAnimation";
import SlideAnimation from "../../components/animation/SlideAnimation";

function Projects() {
  const aboutName = {
    color: "#79C7FA",
  };
  const line = {
    height: "2px",
  };
  return (
    <>
      <Head>
        <title>Projects | afdalabdallah.com</title>
      </Head>
      <HStack justifyContent={"center"} gap={"11px"} marginBottom={"2em"}>
        <SlideFadeAnimation delay="1" y="0" x="-50">
          <Box
            style={line}
            bgColor={"white"}
            w={{ md: "90px", base: "45px" }}
          ></Box>
        </SlideFadeAnimation>
        <FadeAnimation delay="1.5">
          <Text
            fontSize={{ base: "1.5em", md: "2.5em" }}
            fontWeight={"600"}
            m={0}
          >
            My <span style={aboutName}>Projects</span>
          </Text>
        </FadeAnimation>
        <SlideFadeAnimation x="50" y="0" delay="1">
          <Box
            style={line}
            bgColor={"white"}
            w={{ md: "90px", base: "45px" }}
          ></Box>
        </SlideFadeAnimation>
      </HStack>
      <SlideAnimation x="0" y="50" delay="1" times="1">
        <ProjectCard />
      </SlideAnimation>
    </>
  );
}

export default Projects;
