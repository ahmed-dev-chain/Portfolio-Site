import React from "react";

const Project = ({ projects }) => {
  return (
    <>
      {projects.map((data, i) => {
        return (
          <>
            {i % 2 !== 0 && (
              <div className="description d-none">
              <h3>About {data.title}</h3>
              <div className="data" dangerouslySetInnerHTML={{__html: data?.description || `<p>No Description Found For This Project</p>` }}></div>
            </div>
            )}
            <div
              className="project_item"
              key={i}
              data-aos={i % 2 !== 0 ? "fade-left" : "fade-right"}
            >
              <img src={data.imageURL} alt="" className="project_image" />
              <div className="background_blur"></div>
              <h3 className="project_heading">{data.title}</h3>
              <div className="project_link">
                <a
                  href={data.demo}
                  rel="noreferrer"
                  target="_blank"
                  className="button button_flex"
                >
                  Visit Site
                  <i className="uil uil-globe project_icon"></i>
                </a>
                <br />
                <a
                  href={data.github}
                  rel="noreferrer"
                  target="_blank"
                  className="button button_flex"
                >
                  View On Github
                  <i className="uil uil-github project_icon"></i>
                </a>
              </div>
            </div>
            {i % 2 === 0 && (
              <div className="description d-none">
                <h3>About {data.title}</h3>
                <div className="data" dangerouslySetInnerHTML={{__html: data?.description || `<p>No Description Found For This Project</p>` }}></div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default Project;
