import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);

  // прячем/показываем шапку при скролле (кроме случая, когда открыт бургер)
  useEffect(() => {
    let prevY = window.scrollY;
    const onScroll = () => {
      if (menuOpen) return;
      setHidden(window.scrollY > prevY);
      prevY = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // закрывать меню при ресайзе на десктоп
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 820 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  // закрытие по Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          hidden && !menuOpen ? styles.hidden : ""
        }`}
      >
        {/* Логотип/бренд при желании */}
        <div className={styles.brand}>{/* <a href="#">Serhiy</a> */}</div>

        {/* Кнопка-бургер (видна только на мобилках) */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Меню */}
        <ul
          className={`${styles.navList} ${menuOpen ? styles.open : ""}`}
          role="menu"
        >
          {links.map((l) => (
            <li key={l.href} role="none">
              <a
                role="menuitem"
                href={l.href}
                className={active === l.href ? styles.active : ""}
                onClick={() => handleLinkClick(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Затемнение фона при открытом меню */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.show : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
