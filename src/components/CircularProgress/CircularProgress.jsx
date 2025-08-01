// src/components/CircularProgress/CircularProgress.jsx
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./CircularProgress.module.css";

export function CircularProgress({
  label,
  target,
  duration = 1000,
  inView,
  delay = 0, // новый проп
}) {
  const circleRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return; // ждём, пока секция войдёт в зону видимости

    const circle = circleRef.current;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    // сброс в 0 без transition
    setCurrent(0);
    circle.style.transition = "none";
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    // старт анимации с delay
    const startTimeout = setTimeout(() => {
      // включаем плавность
      circle.style.transition = `stroke-dashoffset ${duration}ms ease-out`;

      let startTime = null;
      function animate(time) {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        setCurrent(value);

        // растянули окружность
        const offset = circumference * (1 - value / 100);
        circle.style.strokeDashoffset = offset;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [inView, target, duration, delay]);

  return (
    <div className={styles.wrapper}>
      <svg className={styles.svg} width="120" height="120">
        <circle className={styles.bg} cx="60" cy="60" r="54" />
        <circle ref={circleRef} className={styles.fg} cx="60" cy="60" r="54" />
        <text x="60" y="60" textAnchor="middle" className={styles.text}>
          {current}%
        </text>
      </svg>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

CircularProgress.propTypes = {
  label: PropTypes.string.isRequired,
  target: PropTypes.number.isRequired,
  duration: PropTypes.number,
  inView: PropTypes.bool.isRequired,
  delay: PropTypes.number, // новый проп
};
