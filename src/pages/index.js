import React, { useState, useEffect } from "react";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import Profile from "@/components/Profile";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import styles from "@/styles/index.module.css";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import NavigationBar from "@/components/NavigationBar";
import JobComponent from "@/components/JobComponent";
import ProjectComponent from "@/components/ProjectComponent";
import { intro, jobs, projects } from "../configs";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Home() {
  const [yOffset, setYOffset] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Head>
          <title>Roger&apos;s Personal Website</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <NavigationBar isVisible={visible} />
        </header>
        <main>
          <div class={styles.icons}>
            <Link href="https://github.com/rog22rz" target="_blank">
              <IconButton aria-label="github-link" size="large">
                <GitHubIcon fontSize="inherit" />
              </IconButton>
            </Link>
            <Link href="mailto:roger.zhang@mail.mcgill.ca" target="_blank">
              <IconButton aria-label="email-link" size="large">
                <EmailIcon fontSize="inherit" />
              </IconButton>
            </Link>
            <Link
              href="https://www.linkedin.com/in/zhang-roger/"
              target="_blank"
            >
              <IconButton aria-label="linkdin-link" size="large">
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
            </Link>
          </div>
          <div class={styles.container}>
            <div class={styles.mainDetails}>
              <div class={styles.introContainer}>
                <div class={styles.profile}>
                  <Profile />
                </div>
                <div class={styles.about}>
                  <section id={"about"}>
                    <div class={styles.bio}>
                      <h1>A Little About Myslef</h1>
                      {intro.map((paragraph) => {
                        return <p key={paragraph.key}>{paragraph.section}</p>;
                      })}
                    </div>
                  </section>
                </div>
              </div>
              <div class={styles.career}>
                <section id={"jobs"}>
                  <h1>Career</h1>
                  <Grid container spacing={4}>
                    {jobs.map((job) => {
                      return (
                        <Grid key={job.jobTitle} item xs={6}>
                          <JobComponent
                            date={job.date}
                            location={job.location}
                            jobTitle={job.jobTitle}
                            company={job.company}
                            description={job.description}
                            descriptionListForm={job.descriptionListForm}
                            techStack={job.techStack}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </section>
              </div>
              <div class={styles.projects}>
                <section id={"projects"}>
                  <h1>Projects</h1>
                  <Grid container spacing={4}>
                    {projects.map((project) => {
                      return (
                        <Grid key={project.name} item xs={6}>
                          <ProjectComponent
                            date={project.date}
                            name={project.name}
                            description={project.description}
                            githubLink={project.githubLink}
                            techStack={project.techStack}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </section>
              </div>
            </div>
          </div>
        </main>
        <footer class={styles.footer}>
          <a
            href="https://www.linkedin.com/in/zhang-roger/"
            target="_blank"
            rel="noreferrer"
          >
            Built & Designed By Roger Zhang
          </a>
        </footer>
      </ThemeProvider>
    </>
  );
}
