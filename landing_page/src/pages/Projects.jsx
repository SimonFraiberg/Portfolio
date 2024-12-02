import Grid from "@mui/material/Grid2";
import Project from "../components/Project";
import { FaReact, FaNodeJs, FaDocker, FaJava } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiGooglemaps,
  SiCplusplus,
  SiCmake,
  SiLinux,
  SiApacheant,
  SiPython,
  SiC,
  SiTailwindcss,
  SiPostgresql,
  SiGraphql,
  SiNodedotjs,
  SiNodemon,
  SiAuth0,
  SiApollographql,
  SiMui,
  SiBootstrap,
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
                  <SiMui title="MUI" />
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
                  <SiBootstrap title="bootstrap" />
                </div>
              </>
            }
            link="https://github.com/SimonFraiberg/DiborDocker"
          />
        </Grid>

        <Grid size={{ md: 12, lg: 6 }}>
          <Project
            headline="KNN Classifier Server"
            subHeadline="Advanced Programming Project"
            gif="/knn.gif"
            text={
              <>
                <p>
                  The project is a KNN Classifier Server implemented in{" "}
                  <span className="highlight">C++</span>. It allows users to
                  upload and classify datasets using multiple distance
                  algorithms. Users interact with a menu-driven system to
                  upload, classify, and view results.
                </p>
                <p>
                  This project utilizes a{" "}
                  <span className="highlight">multithreaded</span> server for
                  handling multiple clients simultaneously and implements five
                  different distance formulas within a static distance class.
                </p>

                <div className="image-container">
                  <img
                    src="/knnServer.svg"
                    alt="KNN Classifier Server Interface"
                    className="project-image"
                    loading="lazy"
                  />
                </div>

                <div className="tech-icons">
                  <SiCplusplus title="C++" />
                  <SiCmake title="CMake" />
                  <SiLinux title="Linux" />
                </div>
              </>
            }
            link="https://github.com/SimonFraiberg/AdvancedProgramming-1-part-4"
          />
        </Grid>

        <Grid size={{ md: 12, lg: 6 }}>
          <Project
            headline="Arkanoid Game"
            subHeadline="Object-Oriented Programming Project in Java"
            gif="/arkanoid.gif"
            text={
              <>
                <p>
                  This is an Arkanoid-style game built using{" "}
                  <span className="highlight">Java</span> using Object-Oriented
                  Programming (OOP) principles. The game features a paddle that
                  moves horizontally to bounce a ball and break blocks, with
                  progressively challenging levels.
                </p>
                <p>
                  The game is designed to be interactive and features smooth
                  game animations, different levels with increasing difficulty,
                  and keyboard controls for interaction. Players control the
                  paddle using the arrow keys to move it left and right to
                  bounce the ball and break blocks.
                </p>

                <p>
                  The game can be compiled and run using Apache Ant commands for
                  a smooth development and running experience.
                </p>
                <div className="tech-icons">
                  <FaJava title="Java" />
                  <SiApacheant title="Apache Ant" />
                </div>
              </>
            }
            link="https://github.com/SimonFraiberg/Arkanoid"
          />
        </Grid>
        <Grid size={{ md: 12, lg: 6 }}>
          <Project
            headline="Merkle Tree with RSA Signing"
            subHeadline="Network Security Project"
            gif="/crypto.gif"
            text={
              <>
                <p>
                  This project implements a{" "}
                  <span className="highlight">Merkle Tree </span>
                  with support for cryptographic signing and verification using{" "}
                  <span className="highlight">RSA keys</span>. The interactive
                  console-based tool demonstrates features like adding leaves,
                  computing roots, generating proofs of inclusion, and verifying
                  root signatures.
                </p>
                <p>
                  The project is developed in{" "}
                  <span className="highlight">Python</span>, utilizing the{" "}
                  <span className="highlight">Cryptography</span> library for
                  secure operations. It showcases key cryptographic concepts
                  such as{" "}
                  <span className="highlight">public-private key signing</span>{" "}
                  and
                  <span className="highlight">SHA-256 hashing</span>.
                </p>
                <p>
                  Users can:
                  <ul>
                    <li>Add leaves to the Merkle Tree</li>
                    <li>Generate a Merkle Tree root</li>
                    <li>Sign and verify the root using RSA keys</li>
                    <li>Validate proofs of inclusion</li>
                  </ul>
                </p>
                <div className="tech-icons">
                  <SiPython title="Python" />
                </div>
              </>
            }
            link="https://github.com/SimonFraiberg/MerkleTree"
          />
        </Grid>
        <Grid size={{ md: 12, lg: 6 }}>
          <Project
            headline="Parallel BFS"
            subHeadline="Parallel Programming Project"
            gif="/parallel_bfs.gif"
            text={
              <>
                <p>
                  This project implements a parallel BFS (Breadth-First Search)
                  algorithm for graph traversal. Built using{" "}
                  <span className="highlight">C</span>, the application
                  leverages multi-threading with{" "}
                  <span className="highlight">pthread</span>
                  to speed up graph traversal by processing multiple nodes
                  concurrently.
                </p>
                <p>
                  The graph is represented using an adjacency list, and a custom
                  thread pool is used to manage parallel task execution. The
                  project demonstrates my ability to implement complex
                  algorithms with parallel programming techniques and efficient
                  thread synchronization.
                </p>
                <p>
                  Key components include a custom queue for managing nodes,
                  <span className="highlight">mutexes</span> for thread safety,
                  and a <span className="highlight">thread pool</span> for
                  managing concurrent tasks.
                </p>
                <div className="tech-icons">
                  <SiC title="C" />
                  <SiLinux title="Linux" />
                </div>
              </>
            }
            link="https://github.com/SimonFraiberg/ParallelBFS"
          />
        </Grid>
        <Grid size={{ md: 12, lg: 6 }}>
          <Project
            headline="PahustPashut"
            subHeadline="Social Network for Sharing Recipes"
            gif="/cooking.gif"
            text={
              <>
                <p>
                  PahustPashut is a social network designed for sharing and
                  discovering recipes. Users can create accounts, share their
                  own recipes, and explore recipes shared by others. The
                  application features authentication powered by{" "}
                  <span className="highlight">OAuth 2.0</span> with{" "}
                  <span className="highlight">Auth0</span>, ensuring a secure
                  and seamless login experience.
                </p>
                <p>
                  The backend is built using{" "}
                  <span className="highlight">Node.js, TypeScript,</span> and{" "}
                  <span className="highlight">Express</span>, with user data and
                  recipe information stored in a{" "}
                  <span className="highlight">PostgreSQL</span> database. Auth0
                  is integrated with the database to sync user credentials and
                  manage session tokens effectively.
                </p>
                <p>
                  The frontend, developed with{" "}
                  <span className="highlight">React</span> and{" "}
                  <span className="highlight">Tailwind CSS</span>, delivers a
                  responsive and user-friendly interface. Users can browse,
                  like, and save recipes, with the design focused on enhancing
                  community engagement.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src="under_construction.gif"></img>
                </div>
                <p>
                  Currently, I am working on finalizing the recipe upload
                  mechanics by building a custom API using{" "}
                  <span className="highlight">GraphQL</span> and{" "}
                  <span className="highlight">Apollo</span>. This API will allow
                  users to submit recipes with images, tags, and detailed
                  instructions, streamlining data interactions between the front
                  end and backend systems.
                </p>
                <div className="tech-icons">
                  <FaReact title="React" />
                  <SiTypescript title="TypeScript" />
                  <SiNodedotjs title="Node.js" />
                  <SiNodemon title="Nodemon" />
                  <SiExpress title="Express" />
                  <SiPostgresql title="PostgreSQL" />
                  <SiGraphql title="GraphQL" />
                  <SiAuth0 title="Auth0" />
                  <SiApollographql title="Apollo" />
                  <SiTailwindcss title="tailWind" />
                </div>
              </>
            }
            link="https://github.com/SimonFraiberg/PahustPashut"
          />
        </Grid>
      </Grid>
    </>
  );
}
