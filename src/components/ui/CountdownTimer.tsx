import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer = ({ targetDate, className }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div
      className={`${className} flex min-w-60 items-stretch gap-[17px] text-black whitespace-nowrap w-[302px]`}
    >
      {timeUnits.map((unit, index) => (
        <React.Fragment key={unit.label}>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg bg-slate-800 text-xl sm:text-2xl font-bold text-white">
              {String(unit.value).padStart(2, "0")}
            </div>
            <span className="mt-1 text-xs sm:text-sm text-slate-600">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <div className="flex min-h-4 mt-[26px] text-xl font-bold">:</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CountdownTimer;
