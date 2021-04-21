import React from "react";
import Skill from "../../components-lib/Skill/Skill";
import algorithm from "../../static/skills/algorithm.svg";
import design from "../../static/skills/design.svg";
import responsive from "../../static/skills/responsive.svg";
import styles from "./About.scss";

const ESSENTIAL_SKILLS = [
  {
    title: "Responsive Design",
    desc:
      "Mobile-first & responsive layout for all devices (mobile, tablet, desktop).",
    icon: responsive,
  },
  {
    title: "Continuous learning",
    desc:
      "Continuous learning and algorithmic thinking is essential for a programmer.",
    icon: algorithm,
  },
  {
    title: "UI & UX Approaches",
    desc:
      "The UI & UX approach and the overall sense of design play an important role",
    icon: design,
  },
];

const About = () => {
  return (
    <main className={styles.about}>
      <article className={styles.bio}>
        <div className={styles.photoContainer} />
        <p>
          <span>I am Jakub, </span>
          <br />
          &emsp;a student of applied informatics at FMFI UK and a web developer
          with an interest in various branches of information technology such as
          artificial intelligence, android application development and others.
        </p>
      </article>
      <article className={styles.skills}>
        <h1>Skills</h1>
        <ul className={styles.essentialSkills}>
          {ESSENTIAL_SKILLS.map((el, index) => (
            <li key={`essential-skill-${index}`}>
              <Skill title={el.title} desc={el.desc} icon={el.icon} />
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default About;
