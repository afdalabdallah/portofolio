import {
  Img,
  Link,
  Text,
  VStack,
  Flex,
  Box,
  StackItem,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const blueColor = "#79C7FA";
const textBlue = "#0E99F6";

const BoxStyle = {
  padding: "1em 1.5em",
  borderRadius: "8px",
  backgroundColor: "#242424",
  boxShadow: "0px 0px 12px #79c7fa",
  position: "relative",
  transition: "transform .3s ease",
};

const boxHover = {
  cursor: "pointer",
  transform: "scale(1.01)",
};

const projectTitleStyle = {
  marginTop: "0.5em",
  fontSize: "1.2em",
  fontWeight: "600",
  textAlign: "center",
};

const readMoreStyle = {
  fontWeight: "600",
  textDecoration: "none",
};

const projectData = [
  {
    id: "1",
    title: "Medika Clinic",
    desc: "A simple website that has the feature to make appointment with doctors. This is small project I made as an assignment for Framework-Based Programming lecture.",
    link: "https://github.com/afdalabdallah/midframepro",
    img: "/dummy-img.png",
  },

  {
    id: "2",
    title: "Maesa Group Recruitment",
    desc: "Fully functioning website for new staff recruitment. This is the project that I made when internship at Maesa Group . I contribute as the frontend developer.",
    link: "https://recruitment.maesagroup.co.id",
    img: "/maesa-img.png",
  },
  {
    id: "3",
    title: "Covid Data Indonesia",
    desc: "A website that shows current data related to covid-19 in Indonesia. The project was stoped, but I plan to continue it soon",
    link: "https://github.com/afdalabdallah/covid-data",
    img: "/covidweb.png",
  },
  {
    id: "4",
    title: "Snake Path Finding",
    desc: "Simple snake games that implements BFS and DFS to find the optimal path to the food. I made this with my friends for Artificial Intelligence lecture's final project",
    link: "https://github.com/fydhfzh/FP_TURU-DEK_KB-E",
    img: "/snake-img.png",
  },
];

function ProjectCard() {
  return (
    <Flex gap={"4em"} justifyContent={"center"} flexWrap={"wrap"}>
      {projectData?.map((data) => {
        return (
          <>
            <Box
              className="box-wrapper"
              style={BoxStyle}
              flexBasis={{ lg: "27%" }}
              _hover={boxHover}
            >
              {" "}
              <Link target={"_blank"} href={data.link} style={readMoreStyle}>
                <VStack>
                  <Img
                    minH={"10em"}
                    maxH={"10em"}
                    borderRadius={"3px"}
                    src={data.img}
                  />
                  <Text color={textBlue} style={projectTitleStyle}>
                    {data.title}
                  </Text>
                  <Text h={"120px"} overflow={"hidden"} textAlign={"center"}>
                    {data.desc}
                  </Text>
                  <StackItem>READ MORE</StackItem>
                </VStack>
              </Link>
            </Box>
          </>
        );
      })}
    </Flex>
  );
}

export default ProjectCard;
