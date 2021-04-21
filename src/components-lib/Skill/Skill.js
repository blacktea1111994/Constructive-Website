import PropTypes from "prop-types";
import React from "react";
import styles from "./Skill.scss";

const Skill = ({ title, desc, icon }) => (
  <figure className={styles.skill}>
    <div className={styles.imageContainer}>
      <img alt="skill-icon" src={icon} />
    </div>
    <figcaption>
      <p className={styles.title}>{title}</p>
      <p>{desc}</p>
    </figcaption>
  </figure>
);

Skill.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  icon: PropTypes.string,
};

export default Skill;
