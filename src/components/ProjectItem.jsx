import { Box, Typography, Button, Stack } from "@mui/material";

const ProjectItem = ({ title, description, stack, link, screenshot }) => {
  const projectPage = (e) => {
    e.preventDefault();
    window.location.href = link;
    console.log("go to project link");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "", sm: "center", md: "center" },
        }}
      >
        <Stack spacing={3}>
          <Typography
            sx={{
              fontFamily: "Figtree",
              fontWeight: "700",
              fontSize: { xs: "24px", sm: "24px", md: "24px" },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Figtree",
              width: { xs: "350px", sm: "300px", md: "500px" },
            }}
          >
            {description}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Figtree",
              width: { xs: "150px", sm: "400px", md: "500px" },
            }}
          >
            <b>Tech stack: </b>
            {stack}
          </Typography>
          <Button
            disableRipple
            onClick={projectPage}
            disableElevation
            variant="outlined"
            sx={{
              border: "2px solid #ff7575",
              height: { xs: "40px", sm: "40px", md: "40px" },
              width: { xs: "120px", sm: "120px", md: "120px" },
              fontSize: { xs: "0.8em", sm: "1em", md: "1em" },
              borderRadius: "30px",
              color: "#ff7575",
              fontFamily: "Figtree",
              textTransform: "uppercase",

              "&:hover": {
                bgcolor: "#ff7575",
                color: "white",
                border: "none",
              },
            }}
          >
            link
          </Button>
          <br />
          <br />
        </Stack>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            height: { xs: 270, md: 167 },
            width: { xs: 390, md: 250 },
          }}
          alt="project screenshot"
          src={screenshot}
        />
      </Box>
    </>
  );
};

export default ProjectItem;
