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
          <a href="https://github.com/stickmanbob/JS-Olympics">Github Repo</a>

          <a href="https://github.com/stickmanbob">Ajay Rajamani</a>
          <a href="https://github.com/danjamesyee">Daniel Yee</a>
          <a href="https://github.com/danchau88">Daniel Chau</a>
        </div>
        <div className="linkedins">
          <h3>
            {" "}
            <i class="fab fa-linkedin-in"></i> &nbsp;Linkedin Links
          </h3>

          <a href="https://www.linkedin.com/in/ajay-rajamani-1789711b2/">
            Ajay Rajamani
          </a>
          <a href="https://www.linkedin.com/in/daniel-yee-6886441b0/">
            Daniel Yee
          </a>
          <a href="https://www.linkedin.com/in/daniel-chau-432718105/">
            Daniel Chau
          </a>
        </div>
      </div>
    </footer>
  );
}
