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
            I am a passionate and motivated junior front-end developer dedicated
            to creating responsive, user-friendly web interfaces. My strengths
            lie in flexibility, a commitment to learning new technologies, and
            turning ideas into engaging digital experiences. A strong team
            player with a focus on collaboration, I am eager to grow, tackle
            challenges, and contribute to delivering high-quality solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
