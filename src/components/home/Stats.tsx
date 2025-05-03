
import React, { useState, useEffect, useRef } from "react";
interface Stat {
  id: number;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}
const stats: Stat[] = [{
  id: 1,
  value: 25,
  label: "Years of Excellence & Ongoing",
  suffix: ""
}, {
  id: 2,
  value: 1500,
  label: "Students Enrolled",
  suffix: "+"
}, {
  id: 3,
  value: 20,
  label: "Teaching Subjects",
  suffix: ""
}, {
  id: 4,
  value: 96,
  label: "College Acceptance Rate",
  suffix: "%"
}];
const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  // Check if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Animate counters when visible
  useEffect(() => {
    if (!isVisible) return;
    const intervals = stats.map((stat, index) => {
      const duration = 2000; // 2 seconds
      const step = stat.value / (duration / 16); // assuming 60fps
      let current = 0;
      return setInterval(() => {
        current += step;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(intervals[index]);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 16);
    });
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);
  return <section ref={sectionRef} className="py-16 text-white bg-lime-800">
      <div className="campus-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => <div key={stat.id} className="p-6">
              <div className="text-5xl font-playfair font-bold mb-2">
                {stat.prefix && <span>{stat.prefix}</span>}
                <span>{counters[index].toLocaleString()}</span>
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="text-xl opacity-90">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Stats;
