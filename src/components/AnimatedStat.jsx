import React, { useEffect, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function AnimatedStat({ endValue, prefix = "", suffix = "", label, subtext }) {
  const [ref, isVisible] = useScrollReveal(0.2);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1200; // ms
    const increment = Math.max(1, Math.floor(endValue / (duration / 16)));

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, endValue]);

  return (
    <div ref={ref} className="space-y-1">
      <span className="text-3xl sm:text-4xl font-extrabold text-gradient-copper font-mono block tracking-tight">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
      <span className="text-xs font-bold text-paper block font-mono">{label}</span>
      {subtext && <span className="text-[11px] text-paper-muted block">{subtext}</span>}
    </div>
  );
}
