import React from "react";
import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [repositories, setRepositories] = React.useState<string[]>([]);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(
        "https://api.github.com/users/michaelgudzevskyi/repos"
      );
      const data = await responce.json();
      console.log(data);
      setRepositories(data.map((item: any) => item.name));
    })();
  }, []);

  return (
    <div className={styles.container}>
      <ul>
        {repositories.map((repo) => {
          return <li key={repo}>{repo}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;
