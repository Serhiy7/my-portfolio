import React from "react";
import styles from "./Contact.module.css";
import { useInView } from "../../hooks/useInView";

export const Contact = () => {
  // Анимацию запускаем, когда секция на экране на 20%
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className={`${styles.contact} ${inView ? styles.inView : ""}`}
    >
      <div className={styles.wrapper}>
        {/* LEFT: Tiles */}
        <div className={`${styles.colLeft} ${styles.revealLeft}`}>
          <h3 className={styles.title}>Contacts</h3>

          <div className={styles.tiles}>
            <a
              className={`${styles.tile} ${styles.stagger}`}
              style={{ "--d": 1 }}
              href="https://github.com/Serhiy7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${styles.badge} ${styles.git}`}>
                <i className="fab fa-github" />
              </span>
              <span className={styles.tileText}>GitHub / Serhiy7</span>
            </a>

            <a
              className={`${styles.tile} ${styles.stagger}`}
              style={{ "--d": 2 }}
              href="https://www.linkedin.com/in/serhiy-sukalo-844b1b349"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${styles.badge} ${styles.in}`}>
                <i className="fab fa-linkedin-in" />
              </span>
              <span className={styles.tileText}>LinkedIn Profile</span>
            </a>

            <a
              className={`${styles.tile} ${styles.stagger}`}
              style={{ "--d": 3 }}
              href="mailto:ssukalo79@gmail.com"
            >
              <span className={`${styles.badge} ${styles.mail}`}>
                <i className="fas fa-envelope" />
              </span>
              <span className={styles.tileText}>ssukalo79@gmail.com</span>
            </a>

            <a
              className={`${styles.tile} ${styles.stagger}`}
              style={{ "--d": 4 }}
              href="https://t.me/Syrovui11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${styles.badge} ${styles.tg}`}>
                <i className="fab fa-telegram-plane" />
              </span>
              <span className={styles.tileText}>@Syrovui11</span>
            </a>

            <a
              className={`${styles.tile} ${styles.stagger}`}
              style={{ "--d": 5 }}
              href="https://wa.me/380667553203"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${styles.badge} ${styles.wa}`}>
                <i className="fab fa-whatsapp" />
              </span>
              <span className={styles.tileTextColumn}>
                WhatsApp
                <small>+380 66 755 32 03</small>
              </span>
            </a>

            <div
              className={`${styles.tile} ${styles.stagger}`}
              style={{ "--d": 6 }}
              aria-label="Location"
            >
              <span className={`${styles.badge} ${styles.map}`}>
                <i className="fas fa-map-marker-alt" />
              </span>
              <span className={styles.tileText}>Flensburg, Germany</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className={`${styles.colRight} ${styles.revealRight}`}>
          <h3 className={styles.title}>Get In Touch</h3>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input
              className={styles.input}
              type="text"
              placeholder="Your Name"
            />
            <input className={styles.input} type="email" placeholder="Email" />
            <input className={styles.input} type="text" placeholder="Phone" />
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              rows="4"
              placeholder="Your Message"
            />
            <button className={styles.button} type="submit">
              Send Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
