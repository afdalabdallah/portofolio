import { Box, Button } from "@chakra-ui/react";
import React from "react";

function ContactBtn() {
  const btnStyle = {
    backgroundColor: "inherit",
    borderRadius: "4px",
    border: "2px solid",
    borderColor: "#79C7FA",
    color: "#79C7FA",
    padding: "0.8em 2em 0.8em 2em",
    outline: "none",
    fontSize: "1em",
  };
  const btnHover = {
    cursor: "pointer",
  };
  return (
    <div>
      <Button style={btnStyle} _hover={btnHover}>
        Contact Me
      </Button>
    </div>
  );
}

export default ContactBtn;
