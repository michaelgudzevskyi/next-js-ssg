import React from "react";
import type { GetServerSideProps } from "next";

import styles from "../styles/Home.module.css";

export const Home = ({ repositories }: { repositories: string[] }) => {
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

export const getServerSideProps: GetServerSideProps = async () => {
  const responce = await fetch(
    "https://api.github.com/users/michaelgudzevskyi/repos"
  );
  const data = await responce.json();
  const repositories = data.map((repo: any) => repo.name);
  return {
    props: {
      repositories,
    },
  };
};

export default Home;
