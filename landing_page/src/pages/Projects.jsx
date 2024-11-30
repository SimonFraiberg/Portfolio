import Grid from "@mui/material/Grid2";
import Project from "../components/Project";
import * as React from "react";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiGooglemaps,
} from "react-icons/si";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <Grid
        className="projectsContainer"
        container
        spacing={15}
        justifyContent="center"
      >
        <Grid size={{ md: 12, lg: 6 }}>
          <Project
            headline="MidMeet"
            subHeadline="Bachelor's Degree Final Project"
            img="./midMeet.svg"
            gif="/midmeet.gif"
            text={
              <>
                <p>
                  MidMeet is a web application designed to streamline the
                  process of finding ideal meeting locations for large groups.
                  Developed using{" "}
                  <span className="highlight">React, TypeScript,</span> and the{" "}
                  <span className="highlight">Google Maps API</span>, this
                  application analyzes participants' dietary preferences and
                  locations to recommend the most convenient meeting spots.
                </p>
                <p>
                  At its core, MidMeet uses a{" "}
                  <span className="highlight">Centroid algorithm</span> to
                  compute the optimal location based on all participants'
                  geographical coordinates. This approach ensures that the
                  application suggests locations that are accessible and
                  suitable for everyone, accommodating up to five distinct
                  dietary preferences.
                </p>
                <p>
                  The backend services, implemented with{" "}
                  <span className="highlight">Node.js</span> and{" "}
                  <span className="highlight">MongoDB</span> following MVC
                  architecture, manage user data, preferences, and
                  location-based queries efficiently. Security was a top
                  priority; user accounts are protected using{" "}
                  <span className="highlight">bcrypt</span> for password hashing
                  and two-factor authentication via{" "}
                  <span className="highlight">Google Authentication</span> for
                  enhanced data security.
                </p>
                <div className="tech-icons">
                  <FaReact title="React" />
                  <SiTypescript title="TypeScript" />
                  <SiGooglemaps title="Google Maps API" />
                  <FaNodeJs title="Node.js" />
                  <SiMongodb title="MongoDB" />
                </div>
              </>
            }
            link="https://github.com/SimonFraiberg/MidMeetPublic"
          />
        </Grid>

        <Grid size={{ md: 12, lg: 6 }}>
          <Project
            headline="Dibor"
            subHeadline="Advanced Programming Final Project"
            img="./dibor.png"
            gif="/dibor.gif"
            text={
              <>
                <p>
                  Dibor is a chat application built with{" "}
                  <span className="highlight">React</span> on the frontend and{" "}
                  <span className="highlight">Node.js</span> with{" "}
                  <span className="highlight">Express</span> on the backend,
                  designed to enable secure and private messaging between users.
                </p>
                <p>
                  By implementing{" "}
                  <span className="highlight">
                    JWT token-based authentication
                  </span>
                  , Dibor ensures a high level of security for user
                  interactions. Following{" "}
                  <span className="highlight">RESTful API</span> principles, the
                  app maintains efficient communication between the server and
                  client, providing smooth data transmission.
                </p>
                <p>
                  With <span className="highlight">MongoDB</span> as the
                  database, Dibor supports reliable data storage and retrieval,
                  preserving chat history and ensuring data consistency across
                  sessions. This project demonstrates my ability to build
                  interactive applications with an emphasis on security and user
                  experience.
                </p>
                <p>
                  In addition, Dibor has been optimized for easy deployment with
                  Docker. Using{" "}
                  <span className="highlight">docker-compose</span>, I
                  configured two containers: one for the backend server (which
                  also runs the built React app) and another for the MongoDB
                  database. This setup allows for seamless deployment and
                  ensures the project runs consistently in any environment
                  without the need to worry about the underlying infrastructure.
                </p>
                <div className="tech-icons">
                  <FaReact title="React" />
                  <FaNodeJs title="Node.js" />
                  <SiExpress title="Express" />
                  <SiMongodb title="MongoDB" />
                  <FaDocker title="Docker" />
                </div>
              </>
            }
            link="https://github.com/SimonFraiberg/DiborDocker"
          />
        </Grid>
      </Grid>
    </>
  );
}
