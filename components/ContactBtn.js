import { Box, Button, Link } from "@chakra-ui/react";
import React from "react";

const btnHover = {
  color: "white",
  bgColor: "rgba(121,199,250, 0.7)",
  outline: "0px solid",
  variant: "none",
};

function ContactBtn(props) {
  return (
    <div>
      <Link
        href={props.href}
        target={props.target}
        _hover={{ textDecoration: "none" }}
      >
        <Button
          color={"#79C7FA"}
          bgColor={"inherit"}
          variant={"outline"}
          outline={"1px solid #79C7FA"}
          size={"md"}
          _hover={btnHover}
        >
          {props.text}
        </Button>
      </Link>
    </div>
  );
}

export default ContactBtn;
