//여름 1주차 과제!!

import React, { useState, useEffect } from 'react';

const UseEffectTimer2 = () => {
  const targetDate = '2024-07-10 18:30';

  const targetDateTime = new Date(targetDate);

  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    const calculateTimeDifference = () => {
      const now = new Date();
      const difference = targetDateTime - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
    };

    const interval = setInterval(() => {
      const timeLeft = calculateTimeDifference();
      setRemainingTime(timeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {remainingTime ? (
        <>
          <h1>다음 주 수요일 18시 30분까지 남은 시간</h1>
          <h2>{remainingTime}</h2>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UseEffectTimer2;
