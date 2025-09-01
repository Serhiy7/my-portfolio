import React from "react";
import styles from "./Highlights.module.css";
import { useInView } from "../../hooks/useInView";

export function Highlights() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  const items = [
    {
      color: "blue",
      icon: "fas fa-code",
      title: "Frontend Expertise",
      points: [
        "React 18 (Hooks, Router), modular components",
        "State via Context / Zustand (basic), API-driven UIs",
        "Forms & validation with controlled inputs",
        "Semantic HTML, responsive & accessible UI (WCAG basics)",
        "Performance: memoization, lazy/Suspense, code-splitting",
        "Styling: CSS Modules & Tailwind, consistent design system",
      ],
    },
    {
      color: "green",
      icon: "fas fa-diagram-project",
      title: "Product Impact",
      points: [
        "FoodCase – menu, cart, orders, end-to-end checkout",
        "Car Rental (Poland) – listings, booking flow, admin basics",
        "Payments: Stripe / Google Pay (basic flow), graceful fallbacks",
        "Order emails & notifications, robust error handling",
        "MiniPlayer – custom YouTube player with hotkeys",
        "Portfolio – quick WhatsApp/Telegram/Email actions & animations",
      ],
    },
    {
      color: "purple",
      icon: "fas fa-briefcase",
      title: "Delivery & Quality",
      points: [
        "GitHub flow: branches, PRs, code reviews; clean commit history",
        "ESLint + Prettier; readable, maintainable code",
        "Cross-browser/mobile-first testing & UI polish from Figma",
        "Security hygiene: input sanitizing, CSRF basics",
        "Deploy: Vercel & GitHub Pages with GitHub Actions (CI/CD)",
        "Classic hosting: LAMP (PHP/MySQL) — DB setup, .htaccess, SSL, SMTP, backups",
      ],
    },
    {
      color: "orange",
      icon: "fas fa-user-check",
      title: "Profile & Availability",
      points: [
        "MSc Engineering; strong analytical mindset",
        "Based in Flensburg (CET). Remote-first; open to relocation",
        "English B1–B2, German A2–B1; Ukrainian/Russian native",
        "JavaScript + TypeScript (basic), Node/Express (basic), PHP/MySQL (beginner)",
        "Tooling: Git, Vite/Webpack, Figma, Trello; clear docs & hand-off",
        "Collaborative, proactive communication and ownership",
      ],
    },
  ];

  return (
    <section
      id="highlights"
      ref={ref}
      className={`${styles.section} ${inView ? styles.inView : ""}`}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>Highlights</h2>
        <span className={styles.underline} aria-hidden="true" />
      </div>

      <div className={styles.grid}>
        {items.map((it, i) => (
          <article
            key={it.title}
            className={`${styles.card} ${styles[it.color]} ${styles.stagger}`}
            style={{ "--d": i + 1 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.badge} aria-hidden="true">
                <i className={it.icon} />
              </span>
              <h3 className={styles.cardTitle}>{it.title}</h3>
            </div>

            <ul className={styles.list}>
              {it.points.map((p, idx) => (
                <li key={idx} className={styles.row}>
                  <i
                    className={`fas fa-check ${styles.check}`}
                    aria-hidden="true"
                  />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
