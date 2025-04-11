import React, { useState } from'react';

const getHoursBetween = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const diff = endDate - startDate;
  return Math.floor(diff / (1000 * 60 * 60));
};

const HoursBetween = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const hours = getHoursBetween(startTime, endTime);
    setResult(`${startTime} 到 ${endTime} 的小时数是: ${hours}`);
  };

  return (
    <div>
      <h2>计算两个时间点之间的小时数</h2>
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />
      <button onClick={handleCalculate}>计算</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default HoursBetween;