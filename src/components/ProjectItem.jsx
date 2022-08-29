import { Box, Typography, Button, Stack } from "@mui/material";

const ProjectItem = ({ title, description, stack, link, screenshot }) => {
  const projectPage = (e) => {
    e.preventDefault();
    // window.location.href = projects.projectLink;
    console.log("go to project link");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack spacing={3}>
          <Typography
            sx={{
              fontFamily: "Figtree",
              fontWeight: "700",
              width: { xs: "", sm: "", md: "" },
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Figtree",
            }}
          >
            {description}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Figtree",
            }}
          >
            {stack}
          </Typography>
          <Button
            disableRipple
            onClick={projectPage}
            disableElevation
            variant="outlined"
            sx={{
              border: "2px solid #ff7575",
              width: { xs: "80px", sm: "125px", md: "150px" },
              fontSize: { xs: "0.6em", sm: "1em", md: "1.2em" },
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
            Github
          </Button>
        </Stack>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 223, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="project screenshot"
          src={screenshot}
        />
      </Box>
    </>
  );
};

export default ProjectItem;
