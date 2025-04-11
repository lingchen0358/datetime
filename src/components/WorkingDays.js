import React, { useState } from'react';

const getWorkingDaysBetween = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  let count = 0;
  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    const day = new Date(d).getDay();
    if (day > 0 && day < 6) {
      count++;
    }
  }
  return count;
};

const WorkingDays = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const workingDays = getWorkingDaysBetween(startDate, endDate);
    setResult(`${startDate} 到 ${endDate} 的工作日数量是: ${workingDays}`);
  };

  return (
    <div>
      <h2>计算两个日期之间的工作日数量</h2>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button onClick={handleCalculate}>计算</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default WorkingDays;