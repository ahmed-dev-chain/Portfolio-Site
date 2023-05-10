import React from "react";

const SkillBox = ({ title, skills }) => {
  return (
    <div
      className="skills_content"
      data-aos={title.includes("Front") ? "fade-right" : "fade-left"}
      data-aos-delay="0"
    >
      <h3 className="skills_title">{title}</h3>

      <div className="skills_box">
        {skills.map((data, i) => {
          return (
            <div
              className="skills_data"
              key={i}
              data-aos={i % 2 !== 0 ? "fade-left" : "fade-right"}
              data-aos-delay="300"
            >
              <i className="uil uil-check-circle skills_icon"></i>
              <div>
                <h3 className="skills_name">{data.skill_name}</h3>
                <span className="skills_level">{data.skill_level}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillBox;
