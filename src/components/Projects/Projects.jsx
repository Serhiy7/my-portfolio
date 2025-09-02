import React from "react";
import styles from "./Projects.module.css";
import sh from "../../styles/SectionHeader.module.css";
import youtubeplayer from "/images/preview-youtubeplayer.png";
import foodcase from "/images/preview-foodcase.png";
import taxi from "/images/preview-taxi.png";
import { useInView } from "../../hooks/useInView";

export const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.25 });
  const [hdrRef, hdrInView] = useInView({ threshold: 0.25 });

  return (
    <section
      id="projects"
      ref={ref}
      className={`${styles.projects} ${inView ? styles.inView : ""}`}
    >
      <div
        ref={hdrRef}
        className={`${sh.sectionHeader} ${hdrInView ? sh.inView : ""}`}
      >
        <h2>
          <span>My Projects</span>
        </h2>
      </div>

      <div className={`${styles.cards} ${styles.revealBottom}`}>
        {/* Card 1 */}
        <div
          className={`${styles.card} ${styles.stagger}`}
          style={{ "--d": 1 }}
        >
          <a
            className={styles.imageLink}
            href="https://youtubeplayer-lyart.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.imageWrap}>
              <img src={youtubeplayer} alt="YouTube Mini Player" />
            </div>
          </a>

          <div className={styles.cardContent}>
            <h3>YouTube Mini Player</h3>
            <p>
              A mini YouTube player built with React and serverless functions,
              allowing background audio streaming and playlist features.
            </p>
            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.react}`}>React</span>
              <span className={`${styles.tag} ${styles.node}`}>Node.js</span>
              <span className={`${styles.tag} ${styles.tailwind}`}>
                Tailwind CSS
              </span>
            </div>
            <div className={styles.links}>
              <a
                href="https://github.com/yourusername/youtube-mini-player"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.secondaryBtn} ${styles.withIcon}`}
              >
                <svg
                  className={styles.icon}
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.45.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                See Code
              </a>
              <a
                href="https://youtubeplayer-lyart.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Card 2 — FoodCase */}
        <div
          className={`${styles.card} ${styles.stagger}`}
          style={{ "--d": 2 }}
        >
          <a
            className={styles.imageLink}
            href="https://serhiy7.github.io/FoodCase/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.imageWrap}>
              <img src={foodcase} alt="FoodCase — Food delivery platform" />
            </div>
          </a>

          <div className={styles.cardContent}>
            <h3>FoodCase</h3>
            <p>
              Full-stack food delivery platform with weekly menus and an admin
              panel. Built order management with order confirmation, Stripe
              Checkout, and automatic email notifications. Implemented dynamic
              label generation from DB data and user preferences, CSRF-protected
              forms, and a fully responsive, cross-browser UI.
            </p>

            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.react}`}>React</span>
              <span className={`${styles.tag} ${styles.tailwind}`}>
                Tailwind CSS
              </span>
              <span className={`${styles.tag} ${styles.stripe}`}>Stripe</span>
              <span className={`${styles.tag} ${styles.admin}`}>
                Admin Panel
              </span>
              <span className={`${styles.tag} ${styles.db}`}>DB (MySQL)</span>
              <span className={`${styles.tag} ${styles.email}`}>Email</span>
              <span className={`${styles.tag} ${styles.security}`}>CSRF</span>
              <span className={`${styles.tag} ${styles.responsive}`}>
                Responsive
              </span>
            </div>

            <div className={styles.links}>
              <a
                href="https://github.com/Serhiy7/FoodCase"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.secondaryBtn} ${styles.withIcon}`}
              >
                <svg
                  className={styles.icon}
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.45.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                See Code
              </a>
              <a
                href="https://serhiy7.github.io/FoodCase/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Card 3 — TaxiRent */}
        <div
          className={`${styles.card} ${styles.stagger}`}
          style={{ "--d": 3 }}
        >
          <a
            className={styles.imageLink}
            href="https://serhiy7.github.io/TaxiRent/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.imageWrap}>
              <img src={taxi} alt="TaxiRent — Car Rental (Poland)" />
            </div>
          </a>

          <div className={styles.cardContent}>
            <h3>TaxiRent (Car Rental)</h3>
            <p>
              A simple car rental site for Poland: fleet listing, booking flow,
              and responsive UI. Deployed to GitHub Pages.
            </p>
            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.html}`}>HTML5/CSS3</span>
              <span className={`${styles.tag} ${styles.js}`}>JavaScript</span>
            </div>
            <div className={styles.links}>
              <a
                href="https://github.com/Serhiy7/TaxiRent"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.secondaryBtn} ${styles.withIcon}`}
              >
                <svg
                  className={styles.icon}
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.45.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                See Code
              </a>
              <a
                href="https://serhiy7.github.io/TaxiRent/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryBtn}
              >
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
