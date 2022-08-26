import { Box, Flex, Link, Input, Button, VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import NextLink from "next/link";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

function Navbar() {
  const onhoverLink = {
    color: "#79C7FA",
    cursor: "pointer",
  };

  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex justifyContent={"end"} color={"white"} fontSize={"1.3em"}>
      <Flex
        gap="2em"
        paddingTop={"2rem"}
        paddingBottom={"2em"}
        display={{ base: "none", md: "flex" }}
      >
        <NextLink href={"/"}>
          <Link
            _hover={onhoverLink}
            color={router.pathname === "/" && "#79C7FA"}
          >
            Home
          </Link>
        </NextLink>

        <NextLink href={"/about"}>
          <Link
            _hover={onhoverLink}
            color={router.pathname === "/about" && "#79C7FA"}
          >
            About
          </Link>
        </NextLink>

        <NextLink href={"/projects"}>
          <Link
            _hover={onhoverLink}
            color={router.pathname === "/projects" && "#79C7FA"}
          >
            Projects
          </Link>
        </NextLink>

        <NextLink href={"/contact"}>
          <Link
            _hover={onhoverLink}
            color={router.pathname === "/contact" && "#79C7FA"}
          >
            Contact
          </Link>
        </NextLink>
      </Flex>
      <HamburgerIcon
        display={{ md: "none" }}
        color={"#79C7FA"}
        boxSize={"2em"}
        ref={btnRef}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#121212"} color={"white"}>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack gap={"1em"}>
              <NextLink href={"/"}>
                <Link
                  _hover={onhoverLink}
                  onClick={onClose}
                  color={router.pathname === "/" && "#79C7FA"}
                >
                  Home
                </Link>
              </NextLink>

              <NextLink href={"/about"}>
                <Link
                  _hover={onhoverLink}
                  onClick={onClose}
                  color={router.pathname === "/about" && "#79C7FA"}
                >
                  About
                </Link>
              </NextLink>

              <NextLink href={"/projects"}>
                <Link
                  _hover={onhoverLink}
                  onClick={onClose}
                  color={router.pathname === "/projects" && "#79C7FA"}
                >
                  Projects
                </Link>
              </NextLink>

              <NextLink href={"/contact"}>
                <Link
                  _hover={onhoverLink}
                  onClick={onClose}
                  color={router.pathname === "/contact" && "#79C7FA"}
                >
                  Contact
                </Link>
              </NextLink>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default Navbar;
