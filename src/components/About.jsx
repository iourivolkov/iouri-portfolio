import { Stack, Typography, Button, Grid, Box } from "@mui/material";
import TechStack from "./TechStack";

const About = () => {
  const downloadResume = (e) => {
    e.preventDefault();
    window.location.href = "https://resume.creddle.io/resume/97btmd5nf85";
  };

  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: { xs: "850px", sm: "950px", md: "1050px" },
      }}
    >
      <Typography
        sx={{
          fontFamily: "Figtree",
          fontWeight: 700,
          fontSize: { xs: "14px", sm: "16px", md: "20px" },
          textDecoration: "underline 3px solid #ff7575",
          textUnderlineOffset: 6,
          textTransform: "uppercase",
        }}
      >
        👨🏻‍💻 About Me
      </Typography>

      <Typography
        sx={{
          textAlign: { xs: "left", sm: "left", md: "left" },
          fontFamily: "Figtree",
          fontSize: { xs: "0.8em", sm: "1.2em", md: "1.6em" },
          fontWeight: 100,
          width: { xs: "450px", sm: "650px", md: "1000px" },
        }}
      >
        Earlier this year I graduated from Lighthouse Labs' Web Development
        Bootcamp. Prior to immersing myself in web development, I self-studied
        UX/UI design on my own.
      </Typography>
      <Typography
        sx={{
          textAlign: { xs: "left", sm: "left", md: "left" },
          fontFamily: "Figtree",
          fontSize: { xs: "0.8em", sm: "1.2em", md: "1.6em" },
          fontWeight: 100,
          width: { xs: "450px", sm: "650px", md: "1000px" },
        }}
      >
        In my free time, I learn about Web 3.0, hone my photography skills, and
        explore the city's food scene.
      </Typography>
      <br />
      <br />
      <Button
        disableElevation
        disableRipple
        onClick={downloadResume}
        variant="outlined"
        sx={{
          fontFamily: "Figtree",
          color: "#ff7575",
          border: "3px solid #ff7575",
          width: { xs: "200px", sm: "200px", md: "300px" },
          height: "60px",
          borderRadius: "30px",
          textTransform: "uppercase",
          "&:hover": {
            bgcolor: "#ff7575",
            color: "white",
            border: "none",
          },
        }}
      >
        Download Resume
      </Button>
      <br />
      <br />
      <br />
      <TechStack />

      <br />
    </Stack>
  );
};

export default About;
