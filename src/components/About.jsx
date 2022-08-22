import { Stack, Typography, SvgIcon } from "@mui/material";
import Javascript from "../SVGs/Javascript";
import Css from "../SVGs/Css";
import Html from "../SVGs/Html";
import Node from "../SVGs/Node";
import Express from "../SVGs/Express";
import React from "../SVGs/React";
import Sass from "../SVGs/Sass";
import Firebase from "../SVGs/Firebase";
import Mui from "../SVGs/Mui";
import Postgres from "../SVGs/Postgres";

const About = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1050px",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Figtree",
          fontSize: "40px",
        }}
      >
        About Me
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Figtree",
          fontSize: "24px",
          fontWeight: 100,
          maxWidth: "900px",
        }}
      >
        Earlier this year I graduated from Lighthouse Labs' Web Development
        Bootcamp. Prior to immersing myself in web development, I self-studied
        UX/UI design on my own.
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Figtree",
          fontSize: "24px",
          fontWeight: 100,
          maxWidth: "900px",
        }}
      >
        In my free time, I learn about Web 3.0, hone my photography skills, and
        explore the city's food scene.
      </Typography>
      <br />
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Figtree",
          fontSize: "40px",
        }}
      >
        My tech stack
      </Typography>
      <Stack spacing={3} direction="row">
        <SvgIcon fontSize={"large"}>
          <Javascript />
        </SvgIcon>
        <SvgIcon fontSize={"large"}>
          <Css />
        </SvgIcon>
        <SvgIcon fontSize={"large"}>
          <Html />
        </SvgIcon>
        <SvgIcon fontSize={"large"}>
          <Node />
        </SvgIcon>
        <SvgIcon fontSize={"large"}>
          <Express />
        </SvgIcon>
        <SvgIcon fontSize={"large"}>
          <React />
        </SvgIcon>
        <SvgIcon fontSize={"large"}>
          <Sass />
        </SvgIcon>
        <SvgIcon fontSize={"large"}>
          <Mui />
        </SvgIcon>
        <SvgIcon fontSize={"large"}>
          <Firebase />
        </SvgIcon>
        <SvgIcon fontSize={"large"}>
          <Postgres />
        </SvgIcon>
      </Stack>
    </Stack>
  );
};

export default About;
