import React from "react";

export default () => {
  return (
    <header className="news-top-header">
      <nav className="news-top-nav">
        <a href="https://news.ycombinator.com">
          <img
            alt="News Logo"
            src="https://news.ycombinator.com/y18.gif"
            width="18"
            height="18"
            style={{ border: "1px white solid" }}
          />
        </a>
        <ul className="news-menu">
          <li className="active-c">top</li>
          <span>|</span>
          <li> new </li>
        </ul>
      </nav>
    </header>
  );
};
