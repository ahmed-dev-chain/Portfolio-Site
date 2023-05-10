import React from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUP = document.querySelector(".scroll_up");

    if (this.scrollY >= 500) scrollUP.classList.add("show_scroll");
    else scrollUP.classList.remove("show_scroll");
  });
  return (
    <a href="#home" className="scroll_up">
      <i className="uil uil-arrow-up scroll_up_icon"></i>
    </a>
  );
};

export default ScrollUp;
