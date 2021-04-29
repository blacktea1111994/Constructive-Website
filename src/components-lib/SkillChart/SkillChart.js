import React from "react";
import styles from "./SkillChart.scss";
import PropTypes from "prop-types";

const SkillChart = ({ icon, value }) => (
  <div className={styles.skillChart}>
    <div className={styles.chart}>
      <svg viewBox="0 0 36 36" className={styles.circularChart}>
        <path
          className={styles.circleBg}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={`${styles.circle} ${styles.animation}`}
          strokeDasharray={`${value}, 100`}
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <img alt="skill icon" src={icon} />
    </div>
  </div>
);

SkillChart.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.number,
};

export default SkillChart;
