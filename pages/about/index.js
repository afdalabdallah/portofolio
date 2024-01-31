import {
  Box,
  Center,
  Fade,
  HStack,
  Icon,
  VStack,
  Tooltip,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Head from "next/head";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui, SiLaravel } from "react-icons/si";
import { FaNodeJs, FaLaravel } from "react-icons/fa";
import ContactBtn from "../../components/ContactBtn";
import SlideFadeAnimation from "../../components/animation/SlideFadeAnimation";
import FadeAnimation from "../../components/animation/FadeAnimation";

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
        <title>About | afdalabdallah.com</title>
        <link rel="icon" href="/my-logo.svg" />
      </Head>
      <VStack>
        <HStack justifyContent={"center"} gap={"11px"} marginBottom={"6px"}>
          <SlideFadeAnimation x="-50" y="0" delay="1" times="1">
            <Box
              height={"2px"}
              bgColor={"white"}
              w={{ md: "90px", base: "45px" }}
            ></Box>{" "}
          </SlideFadeAnimation>
          <FadeAnimation delay="1.5">
            <Text
              text="About Afdal"
              base="1.5em"
              md="2.5em"
              fontSize={{ base: "1.5em", md: "2.5em" }}
              fontWeight={"600"}
              m={0}
            >
              About <span style={aboutName}>Afdal</span>
            </Text>
          </FadeAnimation>
          <SlideFadeAnimation x="50" y="0" delay="1" times="1">
            <Box
              height={"2px"}
              bgColor={"white"}
              w={{ md: "90px", base: "45px" }}
            ></Box>{" "}
          </SlideFadeAnimation>
        </HStack>
        <FadeAnimation delay="2">
          <Center>
            <Text maxW={{ md: "60%" }} fontSize={"1.1em"} marginBottom={"1em"}>
              Hello! I&apos;m Afdal. I&apos;m currently studying computer
              science in Institut Teknologi Sepuluh Nopember (ITS), Surabaya.
              Discovering and learning something new has been my passion since
              litle.
              <br />
              <br />
              Programming was a new thing for me. I started learning it after
              entering university. Ever since, my interest to prorgramming has
              grown exponentially. After trying everything from competitive
              prorgramming, artificial intelligence, machine learning, and
              others, I realise that <span>Web Development</span> is the one for
              me.
              <br />
              <br />I am currently learning about web development. I use
              HTML/CSS, JavaScript, NextJS, and Laravel as my base.
            </Text>
          </Center>
        </FadeAnimation>

        <Box minW={{ md: "60%" }}>
          <FadeAnimation delay="2">
            <ContactBtn
              text="Download CV"
              target="_blank"
              href="https://drive.google.com/file/d/1j0190iJZsjOzKLGEsw1zS7xC2oFcGA47/view?usp=drive_link"
            />
          </FadeAnimation>
        </Box>

        <Box minW={{ md: "60%" }}>
          <FadeAnimation delay="2">
            <Text fontSize={"1.8em"} fontWeight={"700"}>
              Favorite Tech Stacks
            </Text>
            <HStack gap={"0.3em"}>
              <Tooltip hasArrow label="NextJs">
                <Box _hover={techHover}>
                  <Icon as={TbBrandNextjs} boxSize={"3.5em"} />
                </Box>
              </Tooltip>
              <Tooltip hasArrow label="ChakraUI">
                <Box _hover={techHover}>
                  <Icon as={SiChakraui} boxSize={"3em"} />
                </Box>
              </Tooltip>

              <Tooltip hasArrow label="ReactJs">
                <Box _hover={techHover}>
                  <Icon as={RiReactjsFill} boxSize={"3.5em"} />
                </Box>
              </Tooltip>
              <Tooltip hasArrow label="NodeJs">
                <Box _hover={techHover}>
                  <Icon as={FaNodeJs} boxSize={"3.3em"} />
                </Box>
              </Tooltip>
              <Tooltip hasArrow label="Laravel">
                <Box _hover={techHover}>
                  <Icon as={FaLaravel} boxSize={"3.3em"} />
                </Box>
              </Tooltip>
            </HStack>
          </FadeAnimation>
        </Box>
      </VStack>
    </>
  );
}

export default About;
