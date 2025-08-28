import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.wrapper}>
        {/* LEFT: Tiles */}
        <div className={styles.colLeft}>
          <h3 className={styles.title}>Portfolio & Contacts</h3>

          <div className={styles.tiles}>
            <a
              className={styles.tile}
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${styles.badge} ${styles.git}`}>
                <i className="fab fa-github" />
              </span>
              <span className={styles.tileText}>GitHub</span>
            </a>

            <a
              className={styles.tile}
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${styles.badge} ${styles.in}`}>
                <i className="fab fa-linkedin-in" />
              </span>
              <span className={styles.tileText}>LinkedIn</span>
            </a>

            <a className={styles.tile} href="mailto:someone@website.com">
              <span className={`${styles.badge} ${styles.mail}`}>
                <i className="fas fa-envelope" />
              </span>
              <span className={styles.tileText}>someone@website.com</span>
            </a>

            <a
              className={styles.tile}
              href="https://t.me/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${styles.badge} ${styles.tg}`}>
                <i className="fab fa-telegram-plane" />
              </span>
              <span className={styles.tileText}>@yourhandle</span>
            </a>

            <a className={styles.tile} href="tel:+48575551828">
              <span className={`${styles.badge} ${styles.phone}`}>
                <i className="fas fa-phone" />
              </span>
              <span className={styles.tileText}>+48 575-551-828</span>
            </a>

            <div className={styles.tile} aria-label="Location">
              <span className={`${styles.badge} ${styles.map}`}>
                <i className="fas fa-map-marker-alt" />
              </span>
              <span className={styles.tileText}>Kraków, Poland</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className={styles.colRight}>
          <h3 className={styles.title}>Let’s have a fun</h3>

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

export default Contact;
