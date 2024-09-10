import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Set the target launch date here
  const targetDate = new Date("2024-12-31T23:59:59").getTime();

  // State to hold the time remaining
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeLeft());

  // Function to calculate the time left
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  }

  useEffect(() => {
    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeLeft());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center py-10">
      <h1 className="text-xl font-bold">Starts in </h1>
      <div className="text-xl mt-5">
         {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
      </div>
      {timeRemaining.days === 0 &&
        timeRemaining.hours === 0 &&
        timeRemaining.minutes === 0 &&
        timeRemaining.seconds === 0 && (
          <div className="text-3xl mt-5 text-green-500">Launched!</div>
        )}
    </div>
  );
};

export default CountdownTimer;
