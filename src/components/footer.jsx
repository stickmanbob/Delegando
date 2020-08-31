import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h1 id="about">About the creators</h1>
      <div className="footer">
        <div className="githubs">
          <h3>
            {" "}
            <i className="fab fa-github-alt"></i> &nbsp;Github Links
          </h3>
          <a href="https://github.com/stickmanbob/Delegando" target="_blank">
            Github Repo
          </a>

          <a href="https://github.com/stickmanbob" target="_blank">
            Ajay Rajamani
          </a>
          <a href="https://github.com/danjamesyee" target="_blank">
            Daniel Yee
          </a>
          <a href="https://github.com/danchau88" target="_blank">
            Daniel Chau
          </a>
        </div>
        <div className="linkedins">
          <h3>
            {" "}
            <i class="fab fa-linkedin-in"></i> &nbsp;Linkedin Links
          </h3>

          <a
            href="https://www.linkedin.com/in/ajay-rajamani-1789711b2/"
            target="_blank"
          >
            Ajay Rajamani
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-yee-6886441b0/"
            target="_blank"
          >
            Daniel Yee
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-chau-432718105/"
            target="_blank"
          >
            Daniel Chau
          </a>
        </div>
      </div>
    </footer>
  );
}
