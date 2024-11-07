import "./HomePage.css";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const DemoPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(57, 17, 81)",
  color: "rgb(255, 251, 251, 0.85)",
}));

export default function HomePage() {
  return (
    <>
      <Grid
        alignItems="center"
        justifyContent="center"
        container
        spacing={1}
        className="greetingContainer"
      >
        <Grid
          alignItems="center"
          justifyContent="center"
          size={{ xs: 10, md: 7 }}
        >
          <div className="greeting">
            <h1>
              Hello
              <span className="wave" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
            <h1>My name is Simon Fraiberg</h1>
            <h2>And I am a Full Stack Developer</h2>
          </div>
        </Grid>
        <Grid
          alignItems="center"
          justifyContent="center"
          size={{ xs: 10, md: 5 }}
        >
          <img src="Programmer.png" className="programmer" alt="Programmer" />
        </Grid>
      </Grid>
      <Divider />
      <div className="aboutMe">
        <Grid container alignItems="center" justifyContent="center" spacing={1}>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            zIndex={100}
            size={{ xs: 12, md: 7 }}
          >
            <h1>About Me</h1>
            <DemoPaper className="aboutPaper" square={false}>
              <div>
                <p>
                  I am a recent graduate from Bar Ilan University, holding a BSc
                  in Computer Science. My passion for technology began in my
                  childhood, leading me to major in computer science during high
                  school. This early interest guided me to roles such as Network
                  Administrator in the army and Help Desk Technician, where I
                  gained valuable experience in IT and technical
                  problem-solving.
                </p>
                <p>
                  Motivated to advance my skills, I pursued a degree at Bar Ilan
                  University, where I discovered a strong affinity for
                  full-stack development. This experience has set me on a path
                  dedicated to creating comprehensive, user-centered
                  applications.
                </p>
                <p>
                  Throughout my studies, I developed a range of projects using
                  JavaScript, TypeScript, and Node.js to build RESTful APIs and
                  backend services. My specialization in React for front-end
                  development, coupled with experience in databases like MongoDB
                  and MySQL, has equipped me with a versatile skill set for
                  building efficient, scalable solutions.
                </p>
                <p>
                  As I look to the future, I am eager to continue learning and
                  expanding my abilities, contributing to innovative projects
                  and leveraging my full-stack skills in impactful ways.
                </p>
              </div>
            </DemoPaper>
          </Grid>
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            size={{ xs: 12, md: 5 }}
          >
            <img src="profilePic.png" className="photoCircle" alt="Profile" />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
