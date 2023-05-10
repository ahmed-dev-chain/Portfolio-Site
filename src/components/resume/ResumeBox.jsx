import React from "react";

const ResumeBox = ({ iconClass, heading, qualification }) => {
  return (
    <div>
      <h3
        className="resume_heading"
        data-aos={heading.includes("Education") ? "fade-right" : "fade-left"}
        data-aos-delay="0"
      >
        <i className={`uil uil-${iconClass} resume_icon`}></i>
        {heading}
      </h3>

      {qualification.map((data, i) => {
        return (
          <div
            className="resume_sub_container"
            key={i}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              <span className="resume_rounded"></span>
              {qualification.length - 1 !== i && (
                <span className="resume_line"></span>
              )}
            </div>
            <div className="education_container">
              <h3 className="education_title">{data.title}</h3>
              <span className="education_subtitle">{data.location}</span>
              <div className="calendar_icon">
                <i className="uil uil-calendar-alt"></i>
                {` ${data.calender}`}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResumeBox;
