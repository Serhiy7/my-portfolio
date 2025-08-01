// src/components/LanguageSkills/LanguageSkills.jsx
import React from "react";
import { useInView } from "../../hooks/useInView";
import { CircularProgress } from "../CircularProgress/CircularProgress";
import styles from "./LanguageSkills.module.css";

export function LanguageSkills() {
  const [ref, inView] = useInView({ threshold: 0.3 });

  // здесь сразу же настраиваем «delay» в секундах
  const langs = [
    { label: "English", target: 79, delay: 0.6 },
    { label: "Ukrainian", target: 95, delay: 0.2 },
    { label: "Russian", target: 90, delay: 0.2 },
    { label: "German", target: 57, delay: 0.6 },
  ];

  return (
    <section className={styles.section} ref={ref}>
      <h2 className={styles.title}>LANGUAGE SKILLS &amp; KNOWLEDGE</h2>
      <div className={styles.list}>
        {langs.map((l) => (
          <CircularProgress
            key={l.label}
            label={l.label}
            target={l.target}
            duration={1200}
            inView={inView}
            delay={l.delay} // <-- вот он!
          />
        ))}
      </div>
    </section>
  );
}
