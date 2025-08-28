import React from "react";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.header}>
        <hr />
        <h2>My Projects</h2>
      </div>

      <div className={styles.cards}>
        {/* Card 1 */}
        <div className={styles.card}>
          <img src="https://picsum.photos/seed/p1/600/300" alt="Project 1" />
          <div className={styles.cardContent}>
            <h3>E-commerce Platform</h3>
            <p>
              A feature-rich online store built with modern web technologies for
              a seamless shopping experience.
            </p>
            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.react}`}>React</span>
              <span className={`${styles.tag} ${styles.node}`}>Node.js</span>
              <span className={`${styles.tag} ${styles.tailwind}`}>
                Tailwind CSS
              </span>
            </div>
            <div className={styles.links}>
              <a href="#">See Code</a>
              <a href="#" className={styles.primaryBtn}>
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <img src="https://picsum.photos/seed/p2/600/300" alt="Project 2" />
          <div className={styles.cardContent}>
            <h3>Project Management Tool</h3>
            <p>
              A collaborative tool to help teams organize tasks, track progress,
              and meet deadlines.
            </p>
            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.vue}`}>Vue.js</span>
              <span className={`${styles.tag} ${styles.firebase}`}>
                Firebase
              </span>
              <span className={`${styles.tag} ${styles.scss}`}>SCSS</span>
            </div>
            <div className={styles.links}>
              <a href="#">See Code</a>
              <a href="#" className={styles.primaryBtn}>
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <img src="https://picsum.photos/seed/p3/600/300" alt="Project 3" />
          <div className={styles.cardContent}>
            <h3>Personal Blog</h3>
            <p>
              A clean, minimalist blog platform for sharing thoughts and ideas
              with the world.
            </p>
            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.html}`}>HTML5/CSS3</span>
              <span className={`${styles.tag} ${styles.js}`}>JavaScript</span>
              <span className={`${styles.tag} ${styles.gatsby}`}>Gatsby</span>
            </div>
            <div className={styles.links}>
              <a href="#">See Code</a>
              <a href="#" className={styles.primaryBtn}>
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
