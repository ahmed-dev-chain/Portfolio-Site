const Project = ({ projects }) => {
  return (
    <>
      {projects.map((data, i) => {
        return (
          <div className="projects_container container grid scroller">
            {i % 2 !== 0 && (
              <div className="description d-none">
                <h3>About {data.title}</h3>
                <div
                  className="data"
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.description ||
                      `<p>No Description Found For This Project</p>`,
                  }}
                ></div>
              </div>
            )}
            <div
              className="project_item"
              key={i}
              data-aos={i % 2 !== 0 ? "fade-left" : "fade-right"}
            >
              <img
                src={data.imageURL}
                alt="Project Data"
                className="project_image"
              />
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
                {data?.github && (
                  <a
                    href={data.github}
                    rel="noreferrer"
                    target="_blank"
                    className="button button_flex"
                  >
                    View On Github
                    <i className="uil uil-github project_icon"></i>
                  </a>
                )}
              </div>
            </div>
            {i % 2 === 0 && (
              <div className="description d-none">
                <h3>About {data.title}</h3>
                <div
                  className="data"
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.description ||
                      `<p>No Description Found For This Project</p>`,
                  }}
                ></div>
              </div>
            )}
          </div>
        );
      })}
      <p className="text-center">There are some other projects that can't be shown due to company/client policies.</p>
    </>
    
  );
};

export default Project;
