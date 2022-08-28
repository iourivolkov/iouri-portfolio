import { Stack, Typography, Button } from "@mui/material";

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
        👨🏻‍💻 About Me
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
      <Button
        disableElevation
        disableRipple
        onClick={downloadResume}
        variant="outlined"
        sx={{
          fontFamily: "Figtree",
          color: "#ff7575",
          border: "3px solid #ff7575",
          width: "300px",
          height: "60px",
          borderRadius: "30px",
          "&:hover": {
            bgcolor: "#ff7575",
            color: "white",
            border: "none",
          },
        }}
      >
        Download Resume
      </Button>
      <Stack spacing={3} direction="row">
        <Typography
          sx={{
            border: "2px solid lightGrey",
            borderRadius: "15px",
            color: "grey",
            fontFamily: "Figtree",
            height: "30px",
            width: "150px",
            textAlign: "center",
          }}
        >
          Javascript
        </Typography>
      </Stack>
    </Stack>
  );
};

export default About;
