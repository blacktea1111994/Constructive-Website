import React from "react";
import ContentWrap from "../../components-lib/ContentWrap/ContentWrap";
import github from "../../static/social/github.svg";
import discord from "../../static/social/discord.svg";
import linkedIn from "../../static/social/linkedin.svg";
import facebook from "../../static/social/facebook.svg";
import instagram from "../../static/social/instagram.svg";
import styles from "./Footer.scss";

const SOCIAL_LINKS = [
  { img: github, src: "https://github.com/blacktea1111994", hover: false },
  { img: discord, src: "Jakub#8865", hover: true },
  {
    img: linkedIn,
    src: "https://www.linkedin.com/in/jakub-toma-890264137/",
    hover: false,
  },
  {
    img: facebook,
    src: "https://www.facebook.com/jakub.toma",
    hover: false,
  },
  {
    img: instagram,
    src: "https://www.instagram.com/jakub_toma/",
    hover: false,
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        {SOCIAL_LINKS.map((link, index) => (
          <li key={`social-link-${index}`}>
            {link?.hover ? (
              <>
                <img src={link.img} />
                <span className={styles.tooltip}>{link.src}</span>
              </>
            ) : (
              <a href={link.src}>
                <img src={link.img} />
              </a>
            )}
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>Copyright 2021 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
