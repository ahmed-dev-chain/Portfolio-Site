import React, { useCallback, useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  // show menu on medium and small devices
  const [showmenu, setShowmenu] = useState(false);

  // change active section background header
  const scrollActive = useCallback(() => {
    let section = [];
    if (!section.length) {
      section = document.querySelectorAll("section[id]");
    }

    const scrollY = window.pageYOffset + window.innerHeight / 3;

    section.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav_menu a[href*=" + sectionId + "]")
          .classList.add("active_link");
      } else {
        document
          .querySelector(".nav_menu a[href*=" + sectionId + "]")
          .classList.remove("active_link");
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollActive);
  }, [scrollActive]);

  //Adding box Shadow
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 30) header.classList.add("scroll_header");
    else header.classList.remove("scroll_header");
  });

  const menuHandler = () => {
    setShowmenu(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav_logo" data-aos="fade-right">
          Your Name Here
        </div>
        <div
          className={showmenu ? "nav_menu show_menu" : "nav_menu"}
          data-aos={window.innerWidth > 768 ? "fade-left" : null}
        >
          <ul className="nav_list">
            <li className="nav_item">
              <a
                href="#home"
                className="nav_link active_link"
                onClick={menuHandler}
              >
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>
            <li className="nav_item">
              <a href="#about" className="nav_link" onClick={menuHandler}>
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link" onClick={menuHandler}>
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#resume" className="nav_link" onClick={menuHandler}>
                <i className="uil uil-graduation-cap nav_icon"></i> Resume
              </a>
            </li>
            <li className="nav_item">
              <a href="#projects" className="nav_link" onClick={menuHandler}>
                <i className="uil uil-scenery nav_icon"></i> Projects
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link" onClick={menuHandler}>
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav_close" onClick={() => setShowmenu(false)}></i>
        </div>

        <div className="nav_toggle" onClick={() => setShowmenu(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
