import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import Typed from "typed.js";
import ContactBtn from "./ContactBtn";
import { useEffect, useRef } from "react";

function LandingText() {
  const textStyle = {
    fontSize: "2.4em",
    color: "white",
    margin: "0",
  };
  const nameStyle = {
    fontSize: "5em",
    color: "#79C7FA",
    margin: 0,
  };
  const subText = {
    fontSize: "3em",
    color: "white",
    margin: "0 0 10px 0",
  };
  const typedStyle = {
    color: "#79C7FA",
  };
  //   var typed = new Typed(".typing1", options);
  const el = useRef(null);
  const typed = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Student", "Web Developer"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    });
    // const options = {

    // };
    // typed.current = new Typed(el.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  const styling = {
    margin: "5em 0 0 0",
  };
  return (
    <div style={styling}>
      <p style={textStyle}>Hello, I&apos;m</p>
      <h1 style={nameStyle}>M Afdal Abdallah</h1>
      <h2 style={subText}>
        I&apos;m a{" "}
        <span style={typedStyle} ref={el}>
          Web Developer
        </span>
      </h2>
      <ContactBtn />
    </div>
  );
}

export default LandingText;