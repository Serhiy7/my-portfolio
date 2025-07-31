import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
// если в Vite: public/images/hero-bg.png
import heroBg from "/images/hero-bg.png";

export function Hero() {
  const phrases = ["FRONTEND DEVELOPER", "FULLSTACK DEVELOPER"];
  const typingDelay = 80;
  const erasingDelay = 50;
  const newPhraseDelay = 2000;

  const [text, setText] = useState("");
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const tick = () => {
      const current = phrases[phraseIndex];

      if (!isDeleting) {
        // печатаем
        setText(current.substring(0, ++charIndex));
        if (charIndex === current.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, newPhraseDelay);
          return;
        }
      } else {
        // удаляем
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

  // мигание курсора
  useEffect(() => {
    const iv = setInterval(() => setCursorOn((c) => !c), 700);
    return () => clearInterval(iv);
  }, []);

  return (
    <header
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <h2>HELLO I'M</h2>
      <h1>Serhiy Sukalo</h1>
      <h3>
        {text}
        {cursorOn && <span className={styles.cursor}>|</span>}
      </h3>
      <a className={styles.btn} href="#">
        Download My CV
      </a>
    </header>
  );
}
