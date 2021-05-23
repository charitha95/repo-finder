import React, { useState } from "react";
import classNames from "./style.module.scss";
import githubIcon from "../../assets/icons/github.png";
import { Button, Input, Card } from "../../components/UI";

/**
 * Function represents the repo finder component
 * @param {Object} props Component Props
 */
export default function RepoFinder(props) {
  const [username, setUsername] = useState("");

  const handleClick = () => {
    if (!username) {
      alert("invalid user name");
      return;
    }
    props.history.push(`/${username}`);
  };

  return (
    <section className={classNames.repoFinder}>
      <section className={classNames.header}>
        <h1>Hello!</h1>
        <h3>Welcome to GitHub Repo Finder app.</h3>
      </section>

      <Card customClass={classNames.search}>
        <Input
          type="text"
          placeholder="Enter Git user name"
          changeHandler={(e) => {
            setUsername(e.target.value);
          }}
        />

        <Button clickHandler={handleClick}>GO</Button>
      </Card>
      <a
        href="https://github.com/charitha95/repo-finder"
        target="_blank"
        className={classNames.sourceCode}
        rel="noopener noreferrer" 
      >
        <h5>source code</h5>
        <figure>
          <img src={githubIcon} alt="source-code" />
        </figure>
      </a>
    </section>
  );
}
