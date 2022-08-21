import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import Typed from "typed.js";
import ContactBtn from "./ContactBtn";

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
  const el = React.useRef(null);
  const typed = React.useRef(null);
  React.useEffect(() => {
    const options = {
      strings: ["Student", "Web Developer"],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  const styling = {
    margin: "5em 0 0 0",
  };
  return (
    <div style={styling}>
      <p style={textStyle}>Hello, I'm</p>
      <h1 style={nameStyle}>M Afdal Abdallah</h1>
      <h2 style={subText}>
        I'm a{" "}
        <span style={typedStyle} ref={el}>
          Web Developer
        </span>
      </h2>
      <ContactBtn />
    </div>
  );
}

export default LandingText;
