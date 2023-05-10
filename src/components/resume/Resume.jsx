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
              location: "University Location",
              calender: "Date - Date",
            },
            {
              title: "Intermediate",
              location: "College Location",
              calender: "Date - Date",
            },
            {
              title: "Matriculation",
              location: "Your High School Location",
              calender: "Date - Date",
            },
          ]}
        />

        <ResumeBox
          heading="Work"
          iconClass="briefcase-alt"
          qualification={[
            {
              title: "MERN Stack Developer",
              location: "CompanyName - Location",
              calender: "Joining Date - Present",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Resume;
