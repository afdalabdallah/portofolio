import { Box, Center, Flex, HStack, Link, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Head from "next/head";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function About() {
  const aboutName = {
    color: "#79C7FA",
  };
  const line = {
    height: "2px",
  };
  const techHover = {
    color: "#79C7FA",
  };
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <VStack>
        <HStack justifyContent={"center"} gap={"11px"} marginBottom={"6px"}>
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
            About <span style={aboutName}>Afdal</span>
          </Text>
          <Box
            style={line}
            bgColor={"white"}
            w={{ md: "90px", base: "45px" }}
          ></Box>
        </HStack>
        <Center>
          <Text maxW={{ md: "60%" }} fontSize={"1.1em"} marginBottom={"1em"}>
            Hello! I&apos;m Afdal. I&apos;m currently studying computer science
            in Institut Teknologi Sepuluh Nopember (ITS), Surabaya. Discovering
            and learning something new has been my passion since litle.
            <br />
            <br />
            Programming was a new thing for me. I started learning it after
            entering university. Ever since, my interest to prorgramming has
            grown exponentially. After trying everything from competitive
            prorgramming, artificial intelligence, machine learning, and others,
            I realise that <span>Web Development</span> is the one for me.
            <br />
            <br />I am currently learning about frontend web developmenet. I use
            HTML/CSS, JavaScript and NextJS as my base.
          </Text>
        </Center>
        <Box minW={{ md: "60%" }}>
          <Text fontSize={"1.8em"} fontWeight={"700"}>
            Favorite Tech Stacks
          </Text>
          <HStack gap={"0.3em"}>
            <Box _hover={techHover}>
              <TbBrandNextjs size={"3.5em"} />
            </Box>
            <Box _hover={techHover}>
              <SiChakraui size={"3em"} />
            </Box>
            <Box _hover={techHover}>
              {" "}
              <RiReactjsFill size={"3.5em"} />
            </Box>
            <Box _hover={techHover}>
              {" "}
              <FaNodeJs size={"3.3em"} />
            </Box>
          </HStack>
        </Box>
      </VStack>
    </>
  );
}

export default About;
