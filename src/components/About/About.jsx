import { useRef, useEffect } from "react";
import { useInView } from "../../hooks/useInView";
import sh from "../../styles/SectionHeader.module.css";
import styles from "./About.module.css";
import imgAbout from "/images/about.jpg";

export function About() {
  const sectionRef = useRef(null);
  const [hdrRef, hdrInView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add(styles["in-view"]);
        } else {
          sectionRef.current.classList.remove(styles["in-view"]);
          // форсируем reflow, чтобы анимации могли запуститься заново
          // eslint-disable-next-line no-unused-expressions
          sectionRef.current.offsetWidth;
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const items = [
    { icon: "fa-user", label: "Name", value: "Serhiy Sukalo" },
    { icon: "fa-phone", label: "Phone", value: "01234567890" },
    {
      icon: "fa-map-marker-alt",
      label: "Address",
      value: "Flensburg, Germany",
    },
    { icon: "fa-envelope", label: "Email", value: "ssukalo79@gmail.com" },
    {
      icon: "fa-calendar-alt",
      label: "Date Of Birth",
      value: "14 November 1994",
    },
    { icon: "fa-flag", label: "Nationality", value: "Ukrainian" },
  ];

  return (
    <section id="about" ref={sectionRef} className={styles.about}>
      <div
        ref={hdrRef}
        className={`${sh.sectionHeader} ${hdrInView ? sh.inView : ""}`}
      >
        <h2>
          <span>ABOUT ME</span>
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.avatar}>
          <img src={imgAbout} alt="Avatar" />
          <p>Frontend Developer</p>
        </div>
        <div className={styles.info}>
          <ul>
            {items.map((it, i) => (
              <li key={i}>
                <span>
                  <i className={`fas ${it.icon}`}></i>
                </span>
                <div>
                  <strong>{it.label}</strong>
                  <br />
                  {it.value}
                </div>
              </li>
            ))}
          </ul>
          <p>
            I’m a pragmatic junior front-end developer who enjoys turning ideas
            into fast, accessible UIs. I iterate quickly, keep code clean, and
            collaborate well with designers and backend. Looking to join a team
            where I can grow and deliver user-facing features end-to-end.
          </p>
        </div>
      </div>
    </section>
  );
}
