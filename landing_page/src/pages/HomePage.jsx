import "./HomePage.css";
export default function HomePage() {
  return (
    <>
      <div className="about">
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
        <div className="profile">
          <img src="profilePic.png" className="photoCircle"></img>
        </div>
        <img src="Programmer.png" className="programmer"></img>
      </div>
    </>
  );
}
