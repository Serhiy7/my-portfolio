import React from "react";
import { useInView } from "../../hooks/useInView";
import sh from "../../styles/SectionHeader.module.css";
import styles from "./Experience.module.css";

const entries = [
  {
    title: "Website Development",
    period: "Krakow, Poland",
    details: [
      "Contributed to a full-stack food-delivery platform (React + Vite).",
      "Implemented order management: order confirmation, Stripe Checkout and automatic email notifications.",
      "Built dynamic label/sticker generation from DB data and user preferences.",
      "Hardened forms with CSRF protection and input sanitizing; shipped a mobile-first, cross-browser UI.",
    ],
    side: "left",
  },
  {
    title: "Full-Stack Developer",
    period: "Taxi — Smart Car Rental System",
    details: [
      "Migrated a legacy PHP app to a React SPA on Vite with SCSS modules and Hooks-based components.",
      "Implemented booking flow (date selection, pricing preview), fleet cards and basic admin views.",
      "Integrated Stripe payments and containerized services with Docker; CI-ready builds.",
      "Added client-side validation, routing and responsive layouts for consistent UX across devices.",
    ],
    side: "right",
  },
  {
    title: "React Developer",
    period: "MiniPlayerForYouTube",
    details: [
      "Built a SPA mini-player with background audio, playlists, hotkeys, and a responsive, accessible UI.",
      "Used serverless (Vercel) for metadata/proxy, added lazy loading/code-splitting, error boundaries, and ESLint/Prettier.",
      "Stack: React, Vite, Tailwind CSS, Serverless (Vercel), JavaScript, Git.",
    ],
    side: "left",
  },
  {
    title: "Frontend Developer",
    period: "Freelance 2024 – 2025",
    details: [
      "Delivered small dashboards and landing pages for clients with responsive layouts and custom UI components.",
      "Integrated REST APIs and Firebase (auth / Firestore); visualized data with Chart.js and localStorage state.",
      "Set up lightweight SEO, a11y basics and deployments to Vercel / GitHub Pages; collaborated via Figma/Trello.",
    ],
    side: "right",
  },
  {
    title: "Frontend Student",
    period: "Self-learning & Online Courses 2023 – 2024",
    details: [
      "Structured self-learning path: HTML, CSS, JavaScript, React, Git/GitHub, Vite and Figma.",
      "Built portfolio projects and coding challenges; practiced component design and state management (Hooks/Context).",
      "Basics of backend: PHP/MySQL; focus on clean code and modular architecture.",
    ],
    side: "left",
  },
  {
    title: "Electrician",
    period: "November 2018–March 2024",
    details: [
      "Maintenance and troubleshooting of automated ship control systems (PLC) and monitoring (SCADA/HMI).",
      "Prepared checklists and wiring documentation; collaborated with cross-functional teams with a strong focus on safety and reliability.",
    ],
    side: "right",
  },
];

export function Experience() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [hdrRef, hdrInView] = useInView({ threshold: 0.3 });

  return (
    <section
      id="experience"
      ref={ref}
      className={`${styles.experience} ${inView ? styles.inView : ""}`}
    >
      <div
        ref={hdrRef}
        className={`${sh.sectionHeader} ${hdrInView ? sh.inView : ""}`}
      >
        <h2>
          <span>EXPERIENCE</span>
        </h2>
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
