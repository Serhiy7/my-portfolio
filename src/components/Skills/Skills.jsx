// src/components/Skills/Skills.jsx
import React from "react";
import { useInView } from "../../hooks/useInView";
import sh from "../../styles/SectionHeader.module.css";
import styles from "./Skills.module.css";

export function Skills() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [hdrRef, hdrInView] = useInView({ threshold: 0.3 });

  const hard = [
    {
      iconClass: "fa-solid fa-code",
      label: "React + JS",
      width: "90%",
      color: "#375aeb",
    },
    {
      iconClass: "fa-solid fa-paint-brush",
      label: "HTML / CSS / Tailwind",
      width: "95%",
      color: "#28a745",
    },
    {
      iconClass: "fa-brands fa-git-alt",
      label: "Git / GitHub",
      width: "85%",
      color: "#17c9ff",
    },
    {
      iconClass: "fa-solid fa-database",
      label: "Firebase / REST API",
      width: "80%",
      color: "#ff9800",
    },
  ];

  const soft = [
    {
      iconClass: "fa-solid fa-comments",
      label: "Communication",
      width: "97%",
      color: "#375aeb",
    },
    {
      iconClass: "fa-solid fa-users",
      label: "Team Work",
      width: "85%",
      color: "#28a745",
    },
    {
      iconClass: "fa-solid fa-chess-king",
      label: "Leadership",
      width: "88%",
      color: "#17c9ff",
    },
    {
      iconClass: "fa-solid fa-clock",
      label: "Time Management",
      width: "78%",
      color: "#ff9800",
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`${styles.skills} ${inView ? styles.inView : ""}`}
    >
      <div
        ref={hdrRef}
        className={`${sh.sectionHeader} ${hdrInView ? sh.inView : ""}`}
      >
        <h2>
          <span>SKILLS</span>
        </h2>
      </div>

      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>HARD SKILLS</h3>
          {hard.map((s, i) => (
            <div
              key={i}
              className={styles.skillBar}
              style={{ "--w": s.width, "--c": s.color }}
            >
              <div className={styles.bar}>
                <div className={styles.label}>
                  <i className={s.iconClass} /> {s.label}
                </div>
                <div className={styles.percent}>{s.width}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.column}>
          <h3>SOFT SKILLS</h3>
          {soft.map((s, i) => (
            <div
              key={i}
              className={styles.skillBar}
              style={{ "--w": s.width, "--c": s.color }}
            >
              <div className={styles.bar}>
                <div className={styles.label}>
                  <i className={s.iconClass} /> {s.label}
                </div>
                <div className={styles.percent}>{s.width}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
