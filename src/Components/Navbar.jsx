import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pages } from "../util/consts";
import { FaHamburger } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    checkSize();
    window.addEventListener("resize", checkSize);
  }, []);

  const checkSize = () => {
    if (window.innerWidth >= 768) {
      setShowLinks(true);
    }
    if (window.innerWidth < 768) {
      setShowLinks(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        {!setShowLinks < 768 && (
          <div className="nav-header">
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaHamburger />
            </button>
          </div>
        )}

        <div className={`links-container ${showLinks && "show"}`}>
          <ul className="links">
            {pages
              .filter((page) => page.text !== "Error")
              .map((page) => {
                const { id, url, text } = page;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
