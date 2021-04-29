import React from "react";
import PrismCode from "../../components-lib/PrismCode/PrismCode";
import styles from "./Home.scss";

const CODE = `
const greetFunction = (login) => {
  if (login && login?.name) {
    console.log("Welcome here " + login.name);
  }
};
`;

const Home = () => {
  return (
    <main className={styles.home}>
      <h1>Constructive Website</h1>
      <article>
        <p>
          Welcome to my website, which serves as my <span>portfolio.</span> At
          the same time, it allows me to try out new techniques that I am trying
          to implement and thus expand this website. Some, in my opinion useful
          information, I visualize on the subpage tutorials in the form of
          snippets.
        </p>
        <PrismCode code={CODE} language="jsx" />
      </article>
    </main>
  );
};

export default Home;
