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
            { skill_name: "CSS", skill_level: "Intermediate" },
            { skill_name: "JavaScript", skill_level: "Intermediate" },
            { skill_name: "Bootstrap", skill_level: "Intermediate" },
            { skill_name: "Git", skill_level: "Intermediate" },
            { skill_name: "React", skill_level: "Intermediate" },
          ]}
        />
        <SkillBox
          title="Backend Developer"
          skills={[
            { skill_name: "Firebase", skill_level: "Intermediate" },
            { skill_name: "Node Js", skill_level: "Intermediate" },
            { skill_name: "Express Js", skill_level: "Intermediate" },
            { skill_name: "Mongo DB", skill_level: "Intermediate" },
          ]}
        />
      </div>
    </section>
  );
};

export default Skills;
