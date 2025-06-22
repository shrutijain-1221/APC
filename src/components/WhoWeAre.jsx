import React, { useEffect, useRef, useState } from "react";
import { FaRocket, FaUsers, FaGlobe, FaBoxes } from "react-icons/fa";
import './Whoweare.css';

const stats = [
  { icon: <FaRocket />, end: 6, label: "Years", desc: "Exporting Since" },
  { icon: <FaUsers />, end: 5000, label: "+", desc: "Satisfied Clients" },
  { icon: <FaGlobe />, end: 30, label: "+", desc: "Catering to Countries" },
  { icon: <FaBoxes />, end: 30, label: "+", desc: "Product Range" },
];

const WhoWeAre = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isCounting, setIsCounting] = useState(stats.map(() => false));
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
      setIsCounting(prev => {
        const updated = [...prev];
        updated[i] = true;
        return updated;
      });

      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.end) {
          current = stat.end;
          clearInterval(interval);
          setIsCounting(prev => {
            const updated = [...prev];
            updated[i] = false;
            return updated;
          });
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
    <section  ref={sectionRef}>

      <div className="stats-container">
        {stats.map((item, i) => (
          <div className="stat-card" key={i}>
            <div className={`icon-who ${isCounting[i] ? 'rotating' : ''}`}>
              {item.icon}
            </div>
            <div className="count">{counts[i]}{item.label}</div>
            <p className="desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAre;