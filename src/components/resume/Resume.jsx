import React from "react";
import "./Resume.css";
import ResumeBox from "./ResumeBox";

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section_title" data-aos="zoom-in">Resume</h2>
      <span className="section_subtitle" data-aos="zoom-in">My personal journey</span>

      <div className="resume_container container grid">
        <ResumeBox
          heading="Education"
          iconClass="graduation-cap"
          qualification={[
            {
              title: "Bachelor In Computer Science",
              location: "Virtual University, Lahore",
              calender: "2023 - 2028",
            },
            {
              title: "Intermediate",
              location: "Degree College, M.B.DIN",
              calender: "2020 - 2022",
            },
            {
              title: "Matriculation",
              location: "Govt High School, M.B.DIN",
              calender: "2007 - 2019",
            },
          ]}
        />

        <ResumeBox
          heading="Work"
          iconClass="briefcase-alt"
          qualification={[
            {
              title: "React JS Developer",
              location: "Business Solutions And Services - Lahore",
              calender: "January 2022 - Present",
            },
            {
              title: "Front End Developer",
              location: "Capazyte - Karachi",
              calender: "March 2021 - December 2021",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Resume;
