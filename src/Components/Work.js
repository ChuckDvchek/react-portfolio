import React from "react";
import Project from "./Project"

function Work() {
  return (
    <div className="container">
      <div className="row">
        <h3>Projects</h3>
        <Project title={"Thirsty Thursdays"} url={'https://chuckdvchek.github.io/thirsty-thursdays/'} githuburl={'https://github.com/ChuckDvchek/thirsty-thursdays'}/>
        <Project title={"Let's Play Chess"} url={'https://letsplaychessproj2.herokuapp.com/'} githuburl={'https://github.com/ChuckDvchek/chess-project-2'}/>
        <Project title={"TableTop"} url={"something"} githuburl={"something"}/>
      </div>
    </div>
  );
}

export default Work;
