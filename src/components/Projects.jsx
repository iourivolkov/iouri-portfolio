import { Typography, Stack } from "@mui/material";
import ProjectItem from "./ProjectItem";
import arViewer from "../assets/arViewer.png";
import weatherApp from "../assets/weatherApp.png";
import scheduler from "../assets/scheduler.png";

const projectsList = [
  {
    projectTitle: "ArViewer",
    projectDescription:
      "A browser-based application built using React and Three.js, that allows users to try-on various articles of clothing via AR/VR.",
    projectStack: "React, Three.js, C#",
    projectLink: "https://www.ar.thecela.com/",
    projectImage: arViewer,
  },
  {
    projectTitle: "weatherApp",
    projectDescription:
      "A simple weather tracking application built using React and Material UI.",
    projectStack: "React, Material UI, Netlify",
    projectLink: "https://verysimpleweatherapp.netlify.app/",
    projectImage: weatherApp,
  },
  {
    projectTitle: "Scheduler",
    projectDescription:
      "An interview scheduling application built using React and SCSS.",
    projectStack: "React, SCSS",
    projectLink: "https://github.com/iourivolkov/scheduler",
    projectImage: scheduler,
  },
];

const Projects = () => {
  return (
    <>
      <Typography
        sx={{
          fontFamily: "Figtree",
          textTransform: "uppercase",
          fontWeight: 700,
          textDecoration: "underline 3px solid #ff7575",
          textUnderlineOffset: 6,
          marginTop: "60px",
          marginLeft: "40px",
          fontSize: { xs: "14px", sm: "16px", md: "20px" },
        }}
      >
        📎 Projects
      </Typography>
      <br />

      {/* <ProjectItem /> */}
      <Stack
        spacing={4}
        sx={{
          margin: "0 40px 60px 40px",
        }}
      >
        {projectsList.map((project) => (
          <ProjectItem
            title={project.projectTitle}
            description={project.projectDescription}
            stack={project.projectStack}
            link={project.projectLink}
            screenshot={project.projectImage}
          />
        ))}
      </Stack>
    </>
  );
};

export default Projects;
