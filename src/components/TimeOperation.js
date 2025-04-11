import React, { useState } from'react';

const addSubtractHours = (time, hours) => {
  const date = new Date(time);
  date.setHours(date.getHours() + hours);
  return date.toLocaleTimeString();
};

const TimeOperation = () => {
  const [inputTime, setInputTime] = useState('');
  const [hours, setHours] = useState(0);
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const newTime = addSubtractHours(inputTime, hours);
    setResult(`${inputTime} ${hours > 0? '后' : '前'} ${Math.abs(hours)} 小时是: ${newTime}`);
  };

  return (
    <div>
      <h2>对给定时间进行加减小时的运算</h2>
      <input
        type="time"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
      />
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(parseInt(e.target.value))}
      />
      <button onClick={handleCalculate}>计算</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default TimeOperation;