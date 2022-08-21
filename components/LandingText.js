import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Typed from "typed.js";
import ContactBtn from "./ContactBtn";
import { useEffect, useRef } from "react";
import TypewriterComponent from "typewriter-effect";

function LandingText() {
  const textStyle = {
    color: "white",
    margin: "0",
  };
  const nameStyle = {
    color: "#79C7FA",
    margin: 0,
    fontWeight: "bold",
  };
  const subText = {
    color: "white",
    margin: "0 0 10px 0",
    fontWeight: "500",
  };
  const typedStyle = {
    color: "#79C7FA",
  };

  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Student", "Web Developer"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    // return () => {
    //   typed.current.destroy();
    // };
  }, []);

  const styling = {
    // margin: "5em 0 0 0",
  };
  return (
    <Flex alignItems={"center"}>
      <Box>
        <Text style={textStyle} fontSize={{ base: "1em", md: "1.6em" }}>
          Hello, I&apos;m
        </Text>
        <Text style={nameStyle} fontSize={{ base: "2.5em", md: "4.5em" }}>
          M Afdal Abdallah
        </Text>
        <Text style={subText} fontSize={{ base: "1em", md: "2.5em" }}>
          I&apos;m a{" "}
          <span style={typedStyle} ref={el}>
            Web Developer
          </span>
        </Text>
        <ContactBtn />
      </Box>
    </Flex>
  );
}

export default LandingText;
