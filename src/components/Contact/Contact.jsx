import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.wrapper}>
        {/* Contact Address */}
        <div className={styles.col}>
          <h3 className={styles.subtitle}>CONTACT ADDRESS</h3>

          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={styles.icon}>
                <i className="fas fa-map-marker-alt" />
              </span>
              <span className={styles.itemText}>
                <strong>Address:</strong> 635 Elraml, South Corner Street,
                Alexandria, Egypt.
              </span>
            </li>

            <li className={styles.item}>
              <span className={styles.icon}>
                <i className="fas fa-phone" />
              </span>
              <span className={styles.itemText}>
                <strong>Phone:</strong> +20&nbsp;012&nbsp;345&nbsp;6789
              </span>
            </li>

            <li className={styles.item}>
              <span className={styles.icon}>
                <i className="fab fa-whatsapp" />
              </span>
              <span className={styles.itemText}>
                <strong>Whatsapp:</strong> +20&nbsp;012&nbsp;859&nbsp;7859
              </span>
            </li>

            <li className={styles.item}>
              <span className={styles.icon}>
                <i className="fab fa-skype" />
              </span>
              <span className={styles.itemText}>
                <strong>Skype:</strong> e.example
              </span>
            </li>

            <li className={styles.item}>
              <span className={styles.icon}>
                <i className="fas fa-envelope" />
              </span>
              <span className={styles.itemText}>
                <strong>Email:</strong>{" "}
                <a className={styles.link} href="mailto:someone@website.com">
                  someone@website.com
                </a>
              </span>
            </li>

            <li className={styles.item}>
              <span className={styles.icon}>
                <i className="fas fa-home" />
              </span>
              <span className={styles.itemText}>
                <strong>Website:</strong>{" "}
                <a className={styles.link} href="https://www.website.com">
                  www.website.com
                </a>
              </span>
            </li>
          </ul>

          <div className={styles.socials}>
            <a className={styles.social} href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a className={styles.social} href="#" aria-label="Twitter">
              <i className="fab fa-twitter" />
            </a>
            <a className={styles.social} href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className={styles.social} href="#" aria-label="Behance">
              <i className="fab fa-behance" />
            </a>
            <a className={styles.social} href="#" aria-label="Pinterest">
              <i className="fab fa-pinterest" />
            </a>
            <a className={styles.social} href="#" aria-label="Vimeo">
              <i className="fab fa-vimeo-v" />
            </a>
            <a className={styles.social} href="#" aria-label="RSS">
              <i className="fas fa-rss" />
            </a>
            <a className={styles.social} href="#" aria-label="Google Plus">
              <i className="fab fa-google-plus-g" />
            </a>
            <a className={styles.social} href="#" aria-label="User">
              <i className="fas fa-user-circle" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.col}>
          <h3 className={styles.subtitle}>LET’S HAVE A FUN</h3>

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

      {/* Footer */}
      <footer className={styles.footer}>
        © Moraco ALL RIGHTS RESERVED BY{" "}
        <a className={styles.brand} href="#">
          MARWA EL-MANAWY
        </a>
      </footer>
    </section>
  );
};
