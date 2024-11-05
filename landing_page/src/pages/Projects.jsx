import Grid from "@mui/material/Grid2";
import Project from "../components/Project";
import * as React from "react";
import "./Projects.css";
export default function HomePage() {
  return (
    <>
      <Grid
        sx={{ m: "auto", mt: 15, mb: 10, maxWidth: "50%" }}
        container
        spacing={10}
        justifyContent="center"
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Project
            headline="MidMeet"
            subHeadline="bachelor's degree final project"
            img="./midMeet.svg"
            text="developed a sophisticated web application designed to streamline the process of finding optimal meeting locations for large groups. Utilizing React, TypeScript, and the Google Maps API, this application efficiently analyzes each participant's dietary preferences and geographical location to suggest the best meeting spots. To achieve this, I implemented a Centroid algorithm that calculates the most suitable location based on the latitude and longitude coordinates of all participants. The application supports five distinct dietary preferences, ensuring that every user can find a venue that meets their needs. On the backend, I built robust services using Node.js and MongoDB, adhering to the MVC architecture to manage user data, preferences, and location-based queries. Security was a top priority; I protected user accounts with bcrypt and integrated two-factor authentication through Google Authentication to enhance data safety."
          ></Project>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Project
            headline="Dibor"
            subHeadline="advanced programming final project"
            img="./dibor.png"
            text="I created a dynamic chatting application leveraging the capabilities of React for the frontend and Node.js with Express for the backend. This platform facilitates secure and private messaging between users through the implementation of JWT token-based authentication. By following RESTful API principles, I ensured seamless data transmission and efficient communication between the server and clients. The application features robust database integration with MongoDB, allowing for reliable storage and retrieval of chat data, which guarantees consistency across sessions. This project showcases my ability to create interactive and user-friendly applications that prioritize security and functionality."
          ></Project>
        </Grid>
      </Grid>
    </>
  );
}
