// src/components/Countdown.tsx
import { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const weddingDate = new Date('2026-09-05T14:00:00'); //5. september
    const difference = +weddingDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Tage: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Stunden: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minuten: Math.floor((difference / 1000 / 60) % 60),
        Sekunden: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // This is the cleanup function that clears the timer when the component is unmounted
    return () => clearTimeout(timer);
  }); // No dependency array, so it runs on every re-render (every second)

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <div key={interval} className="text-center">
      <div className="text-4xl md:text-6xl font-bodoni text-brownNew">
        {(value as Object).toString().padStart(2, '0')}
      </div>
      <div className="text-sm uppercase tracking-wider">{interval}</div>
    </div>
  ));

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      {timerComponents.length ? timerComponents : <span className="text-2xl font-bodoni text-love-pink">Der große Tag ist da!</span>}
    </div>
  );
};

export default Countdown;