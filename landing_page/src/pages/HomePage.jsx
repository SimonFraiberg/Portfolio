import "./HomePage.css";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const DemoPaper = styled(Paper)(({ theme }) => ({
  background: "#00000050",
  backdropFilter: "blur(5px)",
  color: "rgba(255, 255, 255, 0.9)",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
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
        <Grid alignItems="center" justifyContent="center" size={{ lg: 7 }}>
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
        <Grid alignItems="center" justifyContent="center" size={{ lg: 5 }}>
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
            size={{ lg: 7 }}
          >
            <h1 className="titleAbout">About Me</h1>

            <DemoPaper className="aboutPaper" square={false}>
              <div>
                <p>
                  I am a recent graduate from Bar Ilan University, holding a BSc
                  in Computer Science. My passion for technology began in my
                  childhood, leading me to major in computer science during high
                  school. This early interest guided me to roles such as{" "}
                  <span className="highlight">Network Administrator</span> in
                  the army and{" "}
                  <span className="highlight">Help Desk Technician</span>, where
                  I gained valuable experience in IT and technical
                  problem-solving.
                </p>
                <p>
                  Motivated to advance my skills, I pursued a degree at Bar Ilan
                  University, where I discovered a strong affinity for{" "}
                  <span className="highlight">full-stack development</span>.
                  This experience has set me on a path dedicated to creating
                  comprehensive, user-centered applications.
                </p>
                <p>
                  Throughout my studies, I developed projects using{" "}
                  <span className="highlight">JavaScript</span>,{" "}
                  <span className="highlight">TypeScript</span>, and{" "}
                  <span className="highlight">Node.js</span> to build{" "}
                  <span className="highlight">RESTful APIs</span> and backend
                  services. My specialization in{" "}
                  <span className="highlight">React</span> for front-end
                  development, combined with experience in databases like{" "}
                  <span className="highlight">MongoDB</span> and{" "}
                  <span className="highlight">MySQL</span>, has equipped me with
                  a versatile skill set for building efficient, scalable
                  solutions.
                </p>
                <p>
                  As I look to the future, I am eager to continue learning and
                  expanding my abilities, contributing to innovative projects
                  and leveraging my{" "}
                  <span className="highlight">full-stack skills</span> in
                  impactful ways.
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
