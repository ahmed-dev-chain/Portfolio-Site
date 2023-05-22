import React from "react";
import SkillBox from "./SkillBox";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title" data-aos="zoom-in">Skills</h2>
      <span className="section_subtitle" data-aos="zoom-in">My techinal level</span>

      <div className="skills_container container grid">
        <SkillBox
          title="Frontend Developer"
          skills={[
            { skill_name: "HTML", skill_level: "Advanced" },
            { skill_name: "CSS", skill_level: "Advanced" },
            { skill_name: "Bootstrap", skill_level: "Intermediate" },
            { skill_name: "Material UI", skill_level: "Intermediate" },
            { skill_name: "Native Base", skill_level: "Intermediate" },
            { skill_name: "JavaScript", skill_level: "Intermediate" },
            { skill_name: "Jquery", skill_level: "Intermediate" },
            { skill_name: "React JS", skill_level: "Intermediate" },
            { skill_name: "Redux-Toolkit", skill_level: "Intermediate" },
            { skill_name: "Next JS", skill_level: "Beginner" },
            { skill_name: "React Native", skill_level: "Intermediate" },
            { skill_name: "Git/Github", skill_level: "Intermediate" },
          ]}
        />
        <SkillBox
          title="Backend Developer"
          skills={[
            { skill_name: "Node Js", skill_level: "Beginner" },
            { skill_name: "Express Js", skill_level: "Beginner" },
            { skill_name: "Mongo DB", skill_level: "Beginner" },
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
