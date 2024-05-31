import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },

  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Python",
    level: "beginner",
    color: "#2662EA",
  },
  {
    skill: "Java",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "Flutter",
    level: "intermediate",
    color: "#2662EA",
  },
];

function App() {
  return (
    <main>
      <div className="card">
        <Avatar photoUrl="./photo/profile-pic.png" photoName="Avatar" />
        <div className="data">
          <Intro
            name="Yazan Alqadery"
            about="Front-end software engineer that is currently learning React and studying Computer Science in ASPU Jordan."
          />
          <SkillList />
        </div>
      </div>
    </main>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.photoUrl} alt={props.photoName} />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.about}</p>
    </div>
  );
}

/*function SkillList(props) {
  return (
    <ul className="skill-list">
      {props.skills.map((skill, index) => (
        <li
          className="skill"
          key={index}
          style={{ color: props.colors[index] }}
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}
And add this to the App component:
        <SkillList
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "Java",
            "Git",
            "Python",
            "Flutter",
          ]}
          colors={[
            "red",
            "#61dafb",
            "#f0db4f",
            "orange",
            "red",
            "#61dafb",
            "blue",
          ]}

*/

function SkillList() {
  const skillsAvailable = skills.length;
  const skillsData = skills;
  return (
    <div className="skill-list">
      {skillsAvailable > 0 ? (
        skillsData.map((data) => <Skill skillObj={data} />)
      ) : (
        <p>No skills are available right now!</p>
      )}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <ul className="skill">
      <li style={{ backgroundColor: skillObj.color }}>{skillObj.skill}</li>
    </ul>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
