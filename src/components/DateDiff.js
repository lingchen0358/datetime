import React, { useState } from'react';

const getTimeDiff = (time, unit) => {
  const now = new Date();
  const target = new Date(time);
  const diff = now - target;
  switch (unit) {
    case'seconds':
      return Math.floor(diff / 1000);
    case'minutes':
      return Math.floor(diff / (1000 * 60));
    case 'hours':
      return Math.floor(diff / (1000 * 60 * 60));
    case 'days':
      return Math.floor(diff / (1000 * 60 * 60 * 24));
    case 'weeks':
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    case'months':
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    case 'years':
      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    default:
      return 0;
  }
};

const DateDiff = () => {
  const [inputDate, setInputDate] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('seconds');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const diff = getTimeDiff(inputDate, selectedUnit);
    setResult(`${inputDate} 到现在的 ${selectedUnit} 数是: ${diff}`);
  };

  return (
    <div>
      <h2>从现在起或过去的时间差值计算</h2>
      <input
        type="datetime-local"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
      />
      <select value={selectedUnit} onChange={(e) => setSelectedUnit(e.target.value)}>
        <option value="seconds">秒</option>
        <option value="minutes">分钟</option>
        <option value="hours">小时</option>
        <option value="days">天</option>
        <option value="weeks">周</option>
        <option value="months">月</option>
        <option value="years">年</option>
      </select>
      <button onClick={handleCalculate}>计算</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default DateDiff;