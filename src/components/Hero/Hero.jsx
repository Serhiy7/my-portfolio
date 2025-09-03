import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import heroBg from "/images/hero-bg.png"; // из public/images

export function Hero() {
  const phrases = ["FRONTEND DEVELOPER", "FULLSTACK DEVELOPER"];
  const typingDelay = 80;
  const erasingDelay = 50;
  const newPhraseDelay = 2000;

  const [text, setText] = useState("");
  const [cursorOn, setCursorOn] = useState(true);

  // корректный путь и в dev, и на gh-pages
  const cvUrl = `${import.meta.env.BASE_URL}cv/Serhiy_Sukalo_CV.pdf`;

  useEffect(() => {
    let phraseIndex = 0,
      charIndex = 0,
      isDeleting = false,
      timeoutId;
    const tick = () => {
      const current = phrases[phraseIndex];
      if (!isDeleting) {
        setText(current.substring(0, ++charIndex));
        if (charIndex === current.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, newPhraseDelay);
          return;
        }
      } else {
        setText(current.substring(0, --charIndex));
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      timeoutId = setTimeout(tick, isDeleting ? erasingDelay : typingDelay);
    };
    tick();
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setCursorOn((c) => !c), 700);
    return () => clearInterval(iv);
  }, []);

  return (
    <header className={styles.hero}>
      {/* Фон отдельным изображением — быстрее, чем CSS background */}
      <div className={styles.heroBg} aria-hidden="true">
        <img src={heroBg} alt="" fetchPriority="high" decoding="async" />
      </div>

      <h2>HELLO I'M</h2>
      <h1>Serhiy Sukalo</h1>
      <h3>
        {text}
        {cursorOn && <span className={styles.cursor}>|</span>}
      </h3>

      <a
        className={styles.btn}
        href={cvUrl}
        download="Serhiy_Sukalo_CV.pdf"
        target="_blank"
        rel="noopener"
      >
        Download My CV
      </a>
    </header>
  );
}
