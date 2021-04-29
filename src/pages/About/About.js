import React, { useRef, useState } from "react";
import Skill from "../../components-lib/Skill/Skill";
import algorithm from "../../static/skills/algorithm.svg";
import design from "../../static/skills/design.svg";
import responsive from "../../static/skills/responsive.svg";
import react from "../../static/skills/react.svg";
import sass from "../../static/skills/sass.svg";
import html from "../../static/skills/html.svg";
import js from "../../static/skills/js.svg";
import ts from "../../static/skills/ts.svg";
import postgresql from "../../static/skills/postgresql.svg";
import nodejs from "../../static/skills/node.svg";
import java from "../../static/skills/java.svg";
import python from "../../static/skills/python.svg";
import kotlin from "../../static/skills/kotlin.svg";
import git from "../../static/skills/git.svg";
import docker from "../../static/skills/docker.svg";
import styles from "./About.scss";
import SkillChart from "../../components-lib/SkillChart/SkillChart";
import Button from "../../components-lib/Button/Button";
import useOnScreen from "../../hooks/useOnScreen";

const ESSENTIAL_SKILLS = [
  {
    title: "Responsive Design",
    desc:
      "Mobile-first approach & responsive layout for all devices (mobile, tablet, desktop).",
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
      "The UI & UX approach and the overall sense of design play an important role.",
    icon: design,
  },
];

const PROG_SKILLS = [
  {
    title: "Sass/Scss",
    percentage: 75,
    icon: sass,
  },
  {
    title: "Html 5",
    percentage: 85,
    icon: html,
  },
  {
    title: "ReactJS",
    percentage: 50,
    icon: react,
  },
  {
    title: "Javascript",
    percentage: 55,
    icon: js,
  },
  {
    title: "PostgreSQL",
    percentage: 70,
    icon: postgresql,
  },
  {
    title: "GIT",
    percentage: 30,
    icon: git,
  },
  {
    title: "Python",
    percentage: 50,
    icon: python,
  },
  {
    title: "Java",
    percentage: 40,
    icon: java,
  },
  {
    title: "Kotlin",
    percentage: 25,
    icon: kotlin,
  },
  {
    title: "Node.js",
    percentage: 15,
    icon: nodejs,
  },
  {
    title: "Typescript",
    percentage: 10,
    icon: ts,
  },
  {
    title: "Docker",
    percentage: 10,
    icon: docker,
  },
];

const About = () => {
  const [visibleSkillsCount, setVisibleSkillsCount] = useState(6);
  const progSkillsCount = PROG_SKILLS.length;
  const ref = useRef();
  const onScreen = useOnScreen(ref, {
    //root: document.querySelector("#prog-skills"),
    //rootMargin: "-250px",
    //threshold: 0.15,
  });

  const loadMoreSkills = (increment) => {
    setVisibleSkillsCount(visibleSkillsCount + increment);
  };
  const SKILLS =
    window.innerWidth > 420
      ? PROG_SKILLS
      : PROG_SKILLS.slice(0, visibleSkillsCount);

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
      <article className={styles.essentialSkills}>
        <h1>Essential Skills</h1>
        <ul>
          {ESSENTIAL_SKILLS.map((el, index) => (
            <li key={`essential-skill-${index}`}>
              <Skill title={el.title} desc={el.desc} icon={el.icon} />
            </li>
          ))}
        </ul>
      </article>
      <article className={styles.progSkills}>
        <h1>Skills</h1>
        <ul ref={ref}>
          {onScreen &&
            SKILLS.map((el, index) => (
              <li key={`prog-skill-${index}`}>
                <SkillChart
                  icon={el.icon}
                  value={el.percentage}
                  title={el.title}
                />
              </li>
            ))}
        </ul>

        {visibleSkillsCount < progSkillsCount && (
          <Button
            className={styles.loadMoreButton}
            backgroundColor="white"
            color="green"
            onClick={() => loadMoreSkills(6)}
          >
            load more
          </Button>
        )}
      </article>
    </main>
  );
};

export default About;
