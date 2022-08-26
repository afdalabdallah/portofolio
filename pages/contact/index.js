import { Box, StackItem, VStack, Text } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { keyframes, css } from "styled-components";
import AnimatedText from "../../components/AnimatedText";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <VStack>
        <AnimatedText fontSize="2.5em" base="1.5em" text="Reach Out To Me!" />
        {/* onClick=
        {() => {
          window.location = "mailto:afdalabdallahm@gmail.com";
        }} */}
      </VStack>
    </>
  );
}

export default Contact;
