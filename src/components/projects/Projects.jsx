import React from "react";
import Project from "./Project";
import BankistApp from "../../assets/Bankist-App.png";
import BankistSite from "../../assets/BankistSite.png";
import DrogoSurvey from "../../assets/DrogoSurvey.png";
import MaptyApp from "../../assets/MaptyApp.png";
import RandomGame from "../../assets/RandomGame.png";
import DiceLuck from "../../assets/DiceLuck.png";
import SnakeGame from "../../assets/SnakeGame.png";
import TicTac from "../../assets/TicTac.png";
import BookLand from "../../assets/BookLand.png";
import Createsmart from "../../assets/Createsmart.png";
import MBFX from "../../assets/MBFX.png";
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

      {/* <div className="projects_container container grid"> */}
      <Project
        projects={[
          {
            imageURL: MBFX,
            title: "MBFX",
            // github: "https://github.com",
            demo: "https://mbfx.co",
            description: `<p>MBFX is a trading company website that uses HTML, CSS, and JavaScript.
             It offers an easy-to-use interface for trading stocks, commodities, currencies, and 
             indices. With real-time market data and analysis tools, users can make informed decisions.
              MBFX prioritizes security and provides customer support for a reliable trading 
              experience.</p>`,
          },
          {
            imageURL: Createsmart,
            title: "Createsmart",
            // github: "https://github.com",
            demo: "https://app.createsmart.io",
            description: `<p>
            Createsmart is an innovative project I collaborated on as a ReactJS developer. 
            It is a versatile tool that empowers users to design presentations and export them as
             HTML. Additionally, it enables the creation of visually appealing email templates, 
             small website pages, and the execution of email campaigns. With Createsmart, users 
             can effortlessly enhance their communication and marketing strategies.</p>`,
          },
          {
            imageURL: BookLand,
            title: "Book Land",
            // github: "https://github.com",
            demo: "https://effulgent-klepon-2a49e4.netlify.app",
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
            imageURL: TicTac,
            title: "TicTac Game",
            // github: "https://github.com",
            demo: "https://bright-sfogliatella-c30531.netlify.app/",
            description: '<p>Made a small game called tictac for fun.</p>'
          },
          {
            imageURL: SnakeGame,
            title: "Snake Game",
            // github: "https://github.com",
            demo: "https://dulcet-alfajores-3749d8.netlify.app/",
            description: '<p>Made Snake game using react js just for polishing my skills.</p>'
          },
          {
            imageURL: DiceLuck,
            title: "Dice Luck Game",
            // github: "https://github.com",
            demo: "https://gleeful-alfajores-60aec8.netlify.app/",
            description: '<p>Created a personal project for practice. A multiplayer game.</p>'
          },
          {
            imageURL: RandomGame,
            title: "Guess My Number Game",
            // github: "https://github.com",
            demo: "https://famous-raindrop-0199b6.netlify.app/",
            description: '<p>Created a personal project for practice.</p>'
          },
          {
            imageURL: MaptyApp,
            title: "Mapty Application",
            // github: "https://github.com",
            demo: "https://classy-kleicha-7dfd24.netlify.app/",
            description: '<p>Created a personal project for practice.</p>'
          },
          {
            imageURL: DrogoSurvey,
            title: "Drogo Survey",
            // github: "https://github.com",
            demo: "https://remarkable-nasturtium-257d49.netlify.app/",
            description: '<p>Created a personal project for practice. A Survey Application.</p>'
          },
          {
            imageURL: BankistSite,
            title: "Bankist Website",
            // github: "https://github.com",
            demo: "https://nimble-pothos-3ee572.netlify.app/",
            description: '<p>Created a personal project for practice.</p>'
          },
          {
            imageURL: BankistApp,
            title: "Bankist Application",
            // github: "https://github.com",
            demo: "https://incandescent-douhua-8280f7.netlify.app/",
            description: '<p>Created a personal project for practice. A multiplayer game.</p>'
          },
        ]}
      />
      {/* </div> */}
    </section>
  );
};

export default Projects;
