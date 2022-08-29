import {
  Box,
  Flex,
  Link,
  Input,
  Button,
  VStack,
  Icon,
  Img,
} from "@chakra-ui/react";
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
    <Flex
      paddingTop={{ md: "0.5em" }}
      paddingBottom={{ md: "2em" }}
      justifyContent={{ md: "space-between", base: "end" }}
      color={"white"}
      fontSize={"1.2em"}
    >
      <Box display={{ base: "none", md: "block" }}>
        <NextLink href={"/"}>
          <Link>
            <Img maxH={"50px"} src="/my-logo.svg" />
          </Link>
        </NextLink>
      </Box>

      <Flex
        gap="2em"
        display={{ base: "none", md: "flex" }}
        alignItems={"center"}
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
