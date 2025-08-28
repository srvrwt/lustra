import "./../styles/Stats.css";
import React, { useState, useEffect } from "react";

export default function Stats() {
  const statsData = [
    { label: "Courses", value: 2, suffix: "K+" },
    { label: "Students Trust Us", value: 25, suffix: "K+" },
    { label: "Brand Collabrations", value: 12, suffix: "+" },
    { label: "Awards Achieved", value: 50, suffix: "+" },
  ];

  return (
    <section className="stats">
      <div className="container-md">
        {statsData.map((stat, index) => (
          <StatItem key={index} stat={stat} />
        ))}

      </div>
    </section>
  );
}

function StatItem({ stat }) {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, inView]);

  useEffect(() => {
    if (!inView) return;

    const duration = 2500;
    const steps = 60;
    const increment = stat.value / steps;
    const stepTime = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, stat.value]);

  return (
    <div className="stat-item" ref={setRef}>
      <h2 className="stat-value">
        {count.toLocaleString()}{stat.suffix || ""}
      </h2>
      <p className="stat-label">{stat.label}</p>
    </div>
  );
}