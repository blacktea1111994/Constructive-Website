import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.scss";

const Button = ({
  children,
  className,
  onClick,
  color,
  backgroundColor,
  text,
  icon,
  ...props
}) => (
  <button
    className={`${styles.button} ${className}`}
    data-background-color={backgroundColor}
    data-color={color}
    onClick={onClick}
    type="button"
    {...props}
  >
    <div className={icon && styles.hasIcon}>{icon}</div>
    <span>{children || text}</span>
  </button>
);

Button.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
