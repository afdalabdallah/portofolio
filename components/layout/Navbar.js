import { Box, Flex, Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const onhoverLink = {
    color: "#79C7FA",
    cursor: "pointer",
  };

  return (
    <Flex justifyContent={"end"} color={"white"} fontSize={"1.3em"}>
      <Flex
        gap="2em"
        paddingTop={"2rem"}
        paddingBottom={"2em"}
        display={{ base: "none", md: "flex" }}
      >
        <NextLink href={"/"}>
          <Link _hover={onhoverLink}>Home</Link>
        </NextLink>

        <NextLink href={"/about"}>
          <Link _hover={onhoverLink}>About</Link>
        </NextLink>

        <NextLink href={"/projects"}>
          <Link _hover={onhoverLink}>Projects</Link>
        </NextLink>

        <NextLink href={"/contact"}>
          <Link _hover={onhoverLink}>Contact</Link>
        </NextLink>
      </Flex>
      <HamburgerIcon
        display={{ md: "none" }}
        color={"#79C7FA"}
        boxSize={"2em"}
      />
    </Flex>
  );
}

export default Navbar;
