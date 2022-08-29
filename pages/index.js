import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import LandingImg from "../components/LandingImg";
import LandingText from "../components/LandingText";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>M Afdal Abdallah</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        marginTop={["0em", "0em", "0em", "0em", "3em"]}
        gap={["3em", "5em", "5em", "12em"]}
        justifyContent={"center"}
        wrap={"wrap"}
      >
        <LandingText />
        <LandingImg />
      </Flex>
    </div>
  );
}
