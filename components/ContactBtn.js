import { Box, Button } from "@chakra-ui/react";
import React from "react";

function ContactBtn() {
  const btnHover = {
    color: "white",
    bgColor: "rgba(121,199,250, 0.7)",
    outline: "0px solid",
    variant: "none",
  };
  return (
    <div>
      <Button
        color={"#79C7FA"}
        bgColor={"inherit"}
        variant={"outline"}
        outline={"1px solid #79C7FA"}
        size={"md"}
        _hover={btnHover}
      >
        Contact Me
      </Button>
    </div>
  );
}

export default ContactBtn;
