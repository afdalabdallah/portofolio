import {
  Box,
  StackItem,
  VStack,
  Text,
  Tooltip,
  HStack,
  Link,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { keyframes, css } from "styled-components";
import AnimatedText from "../../components/AnimatedText";
import { Icon } from "@chakra-ui/icons";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegEnvelope,
  FaComment,
} from "react-icons/fa";
import GrowAnimation from "../../components/GrowAnimation";

const iconHover = {
  color: "#79C7FA",
};

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <VStack marginTop={{ base: "4rem" }}>
        <HStack>
          <AnimatedText fontSize="3.5em" base="1.9em" text="Reach Out To Me!" />
          <Box position={"relative"} display={{ base: "none", sm: "block" }}>
            <GrowAnimation />
          </Box>
        </HStack>

        <Flex flexDirection={{ md: "row", base: "column" }} gap={"2em"}>
          <Tooltip hasArrow label="afdalabdallahm@gmail.com">
            <span
              onClick={() => {
                window.location = "mailto:afdalabdallahm@gmail.com";
              }}
            >
              <Icon _hover={iconHover} boxSize={"4.5em"} as={FaRegEnvelope} />
            </span>
          </Tooltip>
          <Tooltip hasArrow label="Muhammad Afdal Abdallah">
            <span>
              <Link
                href="https://www.linkedin.com/in/muhammad-afdal-abdallah-808183201/"
                isExternal
              >
                <Icon _hover={iconHover} boxSize={"4.5em"} as={FaLinkedin} />
              </Link>
            </span>
          </Tooltip>

          <Tooltip hasArrow label="afdalabdallah">
            <span>
              <Link href="https://github.com/afdalabdallah" isExternal>
                <Icon _hover={iconHover} boxSize={"4.5em"} as={FaGithub} />
              </Link>
            </span>
          </Tooltip>
          <Tooltip hasArrow label="@afdalabdallah">
            <span>
              <Link href="https://www.instagram.com/afdalabdallah/" isExternal>
                <Icon _hover={iconHover} boxSize={"4.5em"} as={FaInstagram} />
              </Link>
            </span>
          </Tooltip>
        </Flex>
      </VStack>
    </>
  );
}

export default Contact;
