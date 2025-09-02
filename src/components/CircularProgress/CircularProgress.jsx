import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./CircularProgress.module.css";

export function CircularProgress({
  label,
  target,
  duration = 1000,
  inView,
  delay = 0,
}) {
  const circleRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const circle = circleRef.current;
    if (!circle) return;

    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    // начальные значения
    setCurrent(0);
    circle.style.transition = "none"; // только rAF-анимация
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const startTimeout = setTimeout(() => {
      let startTime = null;

      function step(ts) {
        if (startTime == null) startTime = ts;
        const elapsed = ts - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * target);
        setCurrent(value);

        const offset = circumference * (1 - value / 100);
        circle.style.strokeDashoffset = `${offset}`;

        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [inView, target, duration, delay]);

  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.svg}
        width="120"
        height="120"
        role="img"
        aria-label={`${label} ${current}%`}
      >
        {/* Вращаем ТОЛЬКО кольцо */}
        <g className={styles.ring}>
          <circle className={styles.bg} cx="60" cy="60" r="54" />
          <circle
            ref={circleRef}
            className={styles.fg}
            cx="60"
            cy="60"
            r="54"
          />
        </g>

        {/* Текст не вращаем, центрируем атрибутом */}
        <text
          x="60"
          y="60"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.text}
        >
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
  delay: PropTypes.number,
};
