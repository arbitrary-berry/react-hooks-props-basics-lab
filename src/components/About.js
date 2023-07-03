import React from "react";
import Links from "./Links"



function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;

// const user = {
//   name: "Liza",
//   city: "New York",
//   bio: "I made this!",
//   color: "firebrick",
//   links: {
//     github: "https://github.com/liza",
//     linkedin: "https://www.linkedin.com/in/liza/",
//   },
// };
