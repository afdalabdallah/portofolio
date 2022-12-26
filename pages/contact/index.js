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
import AnimatedText from "../../components/animation/AnimatedText";
import { Icon } from "@chakra-ui/icons";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaRegEnvelope,
  FaComment,
} from "react-icons/fa";
import GrowAnimation from "../../components/animation/GrowAnimation";
import SlideAnimation from "../../components/animation/SlideAnimation";

const iconHover = {
  color: "#79C7FA",
  cursor: "pointer",
};

function Contact() {
  return (
    <>
      <Head>
        <title>Contact | afdalabdallah.com</title>
      </Head>
      <VStack marginTop={{ md: "4rem", base: "2em" }}>
        <SlideAnimation x="0" y="-20" delay=".5" times="1">
          <HStack>
            <AnimatedText
              fontSize="3.5em"
              base="1.9em"
              text="Reach Out To Me!"
            />
            <Box position={"relative"} display={{ base: "none", sm: "block" }}>
              <GrowAnimation />
            </Box>
          </HStack>
        </SlideAnimation>

        <Flex flexDirection={{ md: "row", base: "column" }} gap={"2em"}>
          <SlideAnimation x="0" y="200" delay="1" times="1">
            <Tooltip hasArrow label="afdalabdallahm@gmail.com">
              <span
                onClick={() => {
                  window.location = "mailto:afdalabdallahm@gmail.com";
                }}
              >
                <Icon _hover={iconHover} boxSize={"4.5em"} as={FaRegEnvelope} />
              </span>
            </Tooltip>
          </SlideAnimation>

          <SlideAnimation x="0" y="200" delay="1.5" times="1">
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
          </SlideAnimation>

          <SlideAnimation x="0" y="200" delay="2" times="1">
            <Tooltip hasArrow label="afdalabdallah">
              <span>
                <Link href="https://github.com/afdalabdallah" isExternal>
                  <Icon _hover={iconHover} boxSize={"4.5em"} as={FaGithub} />
                </Link>
              </span>
            </Tooltip>
          </SlideAnimation>

          <SlideAnimation x="0" y="200" delay="2.5" times="1">
            <Tooltip hasArrow label="@afdalabdallah">
              <span>
                <Link
                  href="https://www.instagram.com/afdalabdallah/"
                  isExternal
                >
                  <Icon _hover={iconHover} boxSize={"4.5em"} as={FaInstagram} />
                </Link>
              </span>
            </Tooltip>
          </SlideAnimation>
        </Flex>
      </VStack>
    </>
  );
}

export default Contact;
