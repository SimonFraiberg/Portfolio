import Grid from "@mui/material/Grid2";
import Project from "../components/Project";
import * as React from "react";
import "./Projects.css";

export default function HomePage() {
  return (
    <>
      <Grid
        className="projectsContainer"
        container
        spacing={0}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Project
            headline="MidMeet"
            subHeadline="Bachelor's Degree Final Project"
            img="./midMeet.svg"
            text={
              <>
                <p>
                  MidMeet is a web application designed to streamline the
                  process of finding ideal meeting locations for large groups.
                  Developed using <strong>React, TypeScript,</strong> and the{" "}
                  <strong>Google Maps API</strong>, this application analyzes
                  participants' dietary preferences and locations to recommend
                  the most convenient meeting spots.
                </p>
                <p>
                  At its core, MidMeet uses a{" "}
                  <strong>Centroid algorithm</strong> to compute the optimal
                  location based on all participants' geographical coordinates.
                  This approach ensures that the application suggests locations
                  that are accessible and suitable for everyone, accommodating
                  up to five distinct dietary preferences.
                </p>
                <p>
                  The backend services, implemented with{" "}
                  <strong>Node.js</strong> and <strong>MongoDB</strong>{" "}
                  following MVC architecture, manage user data, preferences, and
                  location-based queries efficiently. Security was a top
                  priority; user accounts are protected using{" "}
                  <strong>bcrypt</strong> for password hashing and two-factor
                  authentication via <strong>Google Authentication</strong> for
                  enhanced data security.
                </p>
              </>
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Project
            headline="Dibor"
            subHeadline="Advanced Programming Final Project"
            img="./dibor.png"
            text={
              <>
                <p>
                  Dibor is a chat application built with <strong>React</strong>{" "}
                  on the frontend and <strong>Node.js</strong> with{" "}
                  <strong>Express</strong> on the backend, designed to enable
                  secure and private messaging between users.
                </p>
                <p>
                  By implementing{" "}
                  <strong>JWT token-based authentication</strong>, Dibor ensures
                  a high level of security for user interactions. Following{" "}
                  <strong>RESTful API</strong> principles, the app maintains
                  efficient communication between the server and client,
                  providing smooth data transmission.
                </p>
                <p>
                  With <strong>MongoDB</strong> as the database, Dibor supports
                  reliable data storage and retrieval, preserving chat history
                  and ensuring data consistency across sessions. This project
                  demonstrates my ability to build interactive applications with
                  a strong emphasis on security and user experience.
                </p>
              </>
            }
          />
        </Grid>
      </Grid>
    </>
  );
}
