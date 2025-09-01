import React, { useMemo, useState } from "react";
import styles from "./Contact.module.css";
import { useInView } from "../../hooks/useInView";

export const Contact = () => {
  // Анимация при входе секции в зону видимости (20%)
  const [ref, inView] = useInView({ threshold: 0.2 });

  // ===== ЛОГИКА ПАНЕЛИ БЫСТРЫХ ДЕЙСТВИЙ (справа)
  const [msg, setMsg] = useState(
    "Hi Serhiy! I saw your portfolio and would like to discuss a project."
  );
  const [copied, setCopied] = useState(false);

  const waUrl = useMemo(
    () => `https://wa.me/380667553203?text=${encodeURIComponent(msg)}`,
    [msg]
  );
  // Telegram не поддерживает автозаполнение текста в личку, ведём в профиль
  const tgUrl = "https://t.me/Syrovui11";

  const mailtoUrl = useMemo(
    () =>
      `mailto:ssukalo79@gmail.com?subject=${encodeURIComponent(
        "Portfolio Contact"
      )}&body=${encodeURIComponent(msg)}`,
    [msg]
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ssukalo79@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  const vcardDataUri = useMemo(() => {
    const v = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Sukalo;Serhiy;;;",
      "FN:Serhiy Sukalo",
      "EMAIL;TYPE=INTERNET:ssukalo79@gmail.com",
      "TEL;TYPE=CELL:+380667553203",
      "ADR;TYPE=HOME:;;Flensburg;;Germany;;;",
      "URL:https://github.com/Serhiy7",
      "END:VCARD",
    ].join("\n");
    return `data:text/vcard;charset=utf-8,${encodeURIComponent(v)}`;
  }, []);

  const presets = [
    "Hi! I’d like to hire you for a frontend project.",
    "Can we schedule a quick call this week?",
    "Loved your projects. Open to collaboration?",
  ];

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

        {/* RIGHT: Панель быстрых действий (без формы) */}
        <div className={`${styles.colRight} ${styles.revealRight}`}>
          <h3 className={styles.title}>Let’s Connect</h3>

          <div className={styles.chips} role="list">
            {presets.map((t) => (
              <button
                key={t}
                className={styles.chip}
                onClick={() => setMsg(t)}
                aria-label="Use preset message"
              >
                {t}
              </button>
            ))}
          </div>

          <label className={styles.label} htmlFor="quickMsg">
            Your message (used for WhatsApp/Email)
          </label>
          <textarea
            id="quickMsg"
            className={`${styles.input} ${styles.msgArea}`}
            rows={5}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />

          <div className={styles.ctaRow}>
            <a
              className={`${styles.btn} ${styles.btnPrimary}`}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Write in WhatsApp"
            >
              <i className="fab fa-whatsapp" />
              WhatsApp
            </a>
            <a
              className={styles.btn}
              href={tgUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message in Telegram"
            >
              <i className="fab fa-telegram-plane" />
              Telegram
            </a>
            <a className={styles.btn} href={mailtoUrl} aria-label="Send email">
              <i className="fas fa-envelope" />
              Email
            </a>
          </div>

          <div className={styles.tools}>
            <button className={styles.tool} onClick={copyEmail}>
              <i className="fas fa-copy" />
              {copied ? "Copied!" : "Copy email"}
            </button>

            <a
              className={styles.tool}
              href={vcardDataUri}
              download="Serhiy_Sukalo.vcf"
            >
              <i className="fas fa-address-card" />
              Download contact (.vcf)
            </a>
            {/* LinkedIn снизу убран по твоей просьбе */}
          </div>
        </div>
      </div>
    </section>
  );
};
