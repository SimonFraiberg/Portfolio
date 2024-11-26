import React from "react";
import { Typography, Box, Tooltip } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { FaReact, FaNodeJs, FaHtml5, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiExpress,
  SiGraphql,
  SiBootstrap,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiC,
  SiAssemblyscript,
  SiCss3,
} from "react-icons/si";

const categories = {
  Databases: [
    { name: "MongoDB", icon: <SiMongodb color="#47a248" size={50} /> },
    { name: "MySQL", icon: <SiMysql color="#4479a1" size={50} /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={50} /> },
  ],
  "Web Technologies": [
    { name: "React", icon: <FaReact color="#61dafb" size={50} /> },
    { name: "Node.js", icon: <FaNodeJs color="#83cd29" size={50} /> },
    { name: "Express", icon: <SiExpress color="white" size={50} /> },
    { name: "GraphQL", icon: <SiGraphql color="#e10098" size={50} /> },
    { name: "Apollo", icon: <img src="apollo.png" height={50} width={50} /> },
  ],
  Languages: [
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" size={50} /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178c6" size={50} /> },
    { name: "HTML5", icon: <FaHtml5 color="#e34f26" size={50} /> },

    { name: "C", icon: <SiC color="#00599c" size={50} /> },
    { name: "C++", icon: <SiCplusplus color="#00599c" size={50} /> },
    { name: "Java", icon: <FaJava color="#007396" size={50} /> },
    { name: "Python", icon: <SiPython color="#3776ab" size={50} /> },
    { name: "Assembly", icon: <SiAssemblyscript color="#ffa500" size={50} /> },
  ],
  Design: [
    { name: "CSS3", icon: <SiCss3 color="#1572b6" size={50} /> },
    { name: "Material-UI", icon: <img src="mui.svg" height={50} width={50} /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952b3" size={50} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06b6d4" size={50} /> },
  ],
  Tools: [
    { name: "Git", icon: <SiGit color="#f05032" size={50} /> },
    { name: "Docker", icon: <SiDocker color="#2496ed" size={50} /> },
  ],
};

const Skills = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      sx={{ padding: "10vh", textAlign: "center" }}
    >
      {Object.keys(categories).map((category) => (
        <Box key={category} sx={{ marginBottom: "2vh" }}>
          <Typography variant="h5" gutterBottom color="white">
            {category}
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {categories[category].map((skill, index) => (
              <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                <Tooltip title={skill.name} arrow>
                  <Box
                    sx={{
                      background: "rgba(0, 0, 0, 0.6)", // Semi-transparent black
                      position: "relative",
                      minWidth: "100px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                      color: "white",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s",
                      "&:hover": {
                        transform: "scale(1.1)",
                        boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    {skill.icon}
                    <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
                      {skill.name}
                    </Typography>
                  </Box>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
