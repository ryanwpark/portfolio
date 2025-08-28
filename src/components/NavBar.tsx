import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import rLogo from "../assets/r-logo.png";

const NavBar: React.FC = () => (
  <header className="header">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, delay: 0.1 }}
    >
      <div className="navbar navbar-expand-lg bg-transparent border-0 shadow-none">
        <div className="container-xxl">
          <Link to="/" className="navbar-brand">
            <img src={rLogo} alt="R" width="40" height="40" />
          </Link>
          <ul className="navbar-nav">
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
    </motion.div>
  </header>
);

export default NavBar;
