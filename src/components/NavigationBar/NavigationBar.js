import React, { useState, useEffect } from "react";
import styles from "@/styles/NavigationBar.module.css";
import { Link } from "react-scroll";
import classnames from "classnames";

function NavigationBar({ isVisible }) {
  return (
    <nav className={classnames("navbar", { "navbar--hidden": !isVisible })}>
      <ul className={styles.list}>
        <li>
          <Link activeClass="active" offset={-2000} smooth spy to="about">
            About me
          </Link>
        </li>
        <li>
          <Link activeClass="active" offset={-20} smooth spy to="jobs">
            My Career
          </Link>
        </li>
        <li>
          <Link activeClass="active" smooth spy to="projects">
            Projects
          </Link>
        </li>
        <li>
          <a
            className={styles.resumeBorders}
            href={"/Resume_RogerZhang.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
