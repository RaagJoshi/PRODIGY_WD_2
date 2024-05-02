import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        const now = Date.now();
        setElapsedTime(now - startTime);
      });
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const startStopwatch = () => {
    setIsRunning(true);
    setStartTime(Date.now() - elapsedTime);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const pad = (num) => {
      return num < 10 ? "0" + num : num;
    };

    const milliseconds = pad(Math.floor((time % 1000) / 10));
    const seconds = pad(Math.floor((time / 1000) % 60));
    const minutes = pad(Math.floor((time / (1000 * 60)) % 60));
    const hours = pad(Math.floor((time / (1000 * 60 * 60)) % 24));

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <>
      <p>Author is Raag Joshi</p>
      <p>Stopwatch</p>
      <p>{formatTime(elapsedTime)}</p>
      <button
        className="stopwatch"
        onClick={isRunning ? stopStopwatch : startStopwatch}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button className="stopwatch" onClick={resetStopwatch}>
        Reset
      </button>
    </>
  );
};

export default Stopwatch;
