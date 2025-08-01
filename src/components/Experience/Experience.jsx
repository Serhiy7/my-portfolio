import React from "react";
import { useInView } from "../../hooks/useInView";
import styles from "./Experience.module.css";

const entries = [
  {
    title: "Website Development",
    period: "July–December 2024, Krakow, Poland",
    details: [
      "Collaborated with a team to develop a food delivery website, contributing to key aspects of web functionality and design.",
    ],
    side: "left",
  },
  {
    title: "Full-Stack Developer",
    period: "Taxi — Smart Car Rental System",
    details: [
      "Migration from PHP to React. SPA implementation on Vite + SCSS. UI components, video gallery, booking forms, admin panel. Docker and Stripe API used.",
    ],
    side: "right",
  },
  {
    title: "React Developer",
    period: "MiniPlayerForYouTube 2025",
    details: [
      "Learning HTML, CSS, JavaScript, React, Firebase. Participation in challenges, portfolio creation, Git/GitHub, Figma layouts. Basic PHP and MySQL.",
    ],
    side: "left",
  },
  {
    title: "Frontend Developer",
    period: "Freelance 2024 – 2025",
    details: [
      "Used Firebase, REST API, Chart.js, local storage, responsive layout and custom interfaces.",
    ],
    side: "right",
  },
  {
    title: "Frontend Student",
    period: "Self-learning & Online Courses 2023 – 2024",
    details: [
      "Learning HTML, CSS, JavaScript, React, Firebase. Participation in challenges, portfolio creation, Git/GitHub, Figma layouts. Basic PHP and MySQL.",
    ],
    side: "left",
  },
  {
    title: "Electrician",
    period: "November 2018–March 2024",
    details: [
      "Maintenance and repair of automated ship control systems, including programmable logic controllers (PLC) and monitoring systems. Working with digital control systems (SCADA, HMI).",
    ],
    side: "right",
  },
];

export function Experience() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section
      id="experience"
      ref={ref}
      className={`${styles.experience} ${inView ? styles.inView : ""}`}
    >
      <div className={styles.header}>
        <hr />
        <h2>EXPERIENCE</h2>
      </div>

      <div className={styles.timeline}>
        <div className={styles.line} />

        {entries.map((e, i) => (
          <div key={i} className={`${styles.entry} ${styles[e.side]}`}>
            <div className={styles.dot} />
            <div className={styles.card}>
              <h4 className={styles.title}>{e.title}</h4>
              <div className={styles.period}>{e.period}</div>
              <ul className={styles.details}>
                {e.details.map((text, j) => (
                  <li key={j}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
