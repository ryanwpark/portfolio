import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import rLogo from "../assets/r-logo.png";

const NavBar: React.FC = () => (
  <header className="header font-monospace pb-4">
    <motion.div
      initial={{ opacity: 0, y: -24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <div className="navbar navbar-expand-lg bg-transparent border-0 shadow-none">
        <div className="container-xxl">
          <div className="d-flex align-items-center ms-3">
            <Link to="/" className="navbar-brand">
              <img src={rLogo} alt="R" width="40" height="40" />
            </Link>

            <a
              href="https://github.com/ryanwpark"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link px-2"
              aria-label="GitHub"
            >
              <i className="bi bi-github" style={{ fontSize: "1.7rem" }} />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link px-2"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin" style={{ fontSize: "1.7rem" }} />
            </a>
          </div>
          <ul className="navbar-nav gap-2 list-group-horizontal">
            <li className="nav-item">
              <Link
                className="btn btn-outline-info rounded-pill px-4 py-2"
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                }}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-outline-info rounded-pill px-4 py-2"
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                }}
                to="/contact"
              >
                Say Hi!
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr style={{ margin: "0rem 0" }} />
    </motion.div>
  </header>
);

export default NavBar;
