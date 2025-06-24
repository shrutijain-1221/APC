import React, { useEffect, useRef, useState } from "react";
import './Whoweare.css';

const stats = [
  { end: 6, label: "+", desc: "Years Exporting" },
  { end: 5000, label: "+", desc: "Satisfied Clients" },
  { end: 30, label: "+", desc: "Catering to Countries" },
  { end: 30, label: "+", desc: "Product Range" },
];

const WhoWeAre = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  const startCounting = () => {
    stats.forEach((stat, i) => {
      let current = 0;
      const increment = Math.ceil(stat.end / 100);

      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.end) {
          current = stat.end;
          clearInterval(interval);
        }

        setCounts(prev => {
          const updated = [...prev];
          updated[i] = current;
          return updated;
        });
      }, 60);
    });
  };

  return (
    <section ref={sectionRef}>
      <div className="stats-container">
        {stats.map((item, i) => (
          <div className="stat-card bg-gray-200" key={i}>
            <div className="count-box">
              <div className="count">{counts[i]}{item.label}</div>
            </div>
            <p className="desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;
