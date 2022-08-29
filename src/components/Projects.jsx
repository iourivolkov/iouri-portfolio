import { Typography, Stack, Box, Button } from "@mui/material";
import ProjectItem from "./ProjectItem";
import Card from "./Card";
import arViewer from "../assets/arViewer.png";
import weatherApp from "../assets/weatherApp.png";

const projectsList = [
  {
    projectTitle: "ArViewer",
    projectDescription:
      "A browser-based application built using React and Three.js, that allows users to try-on various articles of clothing via AR/VR.",
    projectStack: "Tech stack: React, Three.js, C#",
    projectLink: "https://www.ar.thecela.com/",
    projectImage: arViewer,
  },
  {
    projectTitle: "weatherApp",
    projectDescription:
      "A simple weather tracking application built using React and Material UI.",
    projectStack: "Tech stack: React, Material UI, Netlify",
    projectLink: "https://verysimpleweatherapp.netlify.app/",
    projectImage: weatherApp,
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
          fontSize: { xs: "14px", sm: "16px", md: "20px" },
        }}
      >
        📎 Projects
      </Typography>
      <br />
      <Card>
        {/* <ProjectItem /> */}
        {projectsList.map((project) => (
          <ProjectItem
            title={project.projectTitle}
            description={project.projectDescription}
            stack={project.projectStack}
            link={project.projectLink}
            screenshot={project.projectImage}
          />
        ))}
      </Card>
    </>
  );
};

export default Projects;
