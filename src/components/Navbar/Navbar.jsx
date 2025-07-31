import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("#");

  useEffect(() => {
    let prevY = window.scrollY;
    const onScroll = () => {
      setHidden(window.scrollY > prevY);
      prevY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`${styles.navbar} ${hidden ? styles.hidden : ""}`}>
      <ul className={styles.navList}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href ? styles.active : ""}
              onClick={() => setActive(l.href)}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
