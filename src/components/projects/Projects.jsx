import React from "react";
import Project from "./Project";
import covid from "../../assets/covid.png";
import expense from "../../assets/expense.png";
import shopping from "../../assets/shopping.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section_title" data-aos="zoom-in">
        Projects
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        Most recent work
      </span>

      <div className="projects_container container grid">
        <Project
          projects={[
            {
              imageURL: covid,
              title: "Book Land",
              github: "https://github.com",
              demo: "https://bookland.eduard-petrescu.ro",
              description: `
              <p>
              Book Land is a web application that allows users to search for books using the Google Books API. The application has a homepage with a user interface that provides a pleasant and easy-to-use experience for users. The user need to create an account by signing up or logging in to access application.
              </p>
              <p>
              The search functionality allows users to search for books based on keywords or phrases, author names, or ISBN numbers. The application also provides pagination, allowing users to navigate through multiple pages of search results.
              </p>
              <b>Front End Technologies Used:</b>
              <p>
              Book Land utilizes React.js as its primary front-end development framework, along with HTML, Sass, and JavaScript to create an aesthetically pleasing and user-friendly interface. The front-end is built with Material UI, a UI library that enhances the design and functionality of the web application.
              </p>
              <b>Backend Technologies Used:</b>
              <p>
              Book Land uses Node.js and Express.js as its server-side framework and MongoDB as its database to store user information, such as login credentials and other user-related data.
              </p>
              <b>Third Party Apis Used :</b>
              <p>
              The Google Books API integration allows users to retrieve book information such as title, author, description, and cover image. The application displays this information in an organized and user-friendly manner, making it easy for users to find and select books they are interested in.
              Overall, Book Land is a comprehensive web application that provides a seamless and user-friendly experience for book lovers who want to explore and discover new books in an organized and efficient way.
              </p>
              `,
            },
            {
              imageURL: expense,
              title: "Expense Tracker App",
              github: "https://github.com",
              demo: "https://www.facebook.com",
            },
            {
              imageURL: shopping,
              title: "Shopping Card",
              github: "https://github.com",
              demo: "https://www.facebook.com",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
