
import React, { useState, useEffect, useRef } from "react";

interface Stat {
  id: number;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: 25,
    label: "Years of Excellence & Ongoing",
    suffix: ""
  },
  {
    id: 2,
    value: 1500,
    label: "Students Enrolled",
    suffix: "+"
  },
  {
    id: 3,
    value: 20,
    label: "Teaching Subjects",
    suffix: ""
  },
  {
    id: 4,
    value: 96,
    label: "College Acceptance Rate",
    suffix: "%"
  }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  // Check if element is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

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

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-emerald-800 via-emerald-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent"></div>
      </div>
      
      <div className="campus-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={stat.id} className="p-3 sm:p-4 lg:p-6 glass-effect rounded-lg border border-emerald-400/30 hover:border-emerald-400/60 transition-all duration-500 group hover:shadow-neon">
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-orbitron font-bold mb-2 break-words neon-text group-hover:animate-neon-flicker">
                {stat.prefix && <span>{stat.prefix}</span>}
                <span>{counters[index].toLocaleString()}</span>
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="text-sm sm:text-base lg:text-xl text-emerald-200 leading-tight font-orbitron">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
