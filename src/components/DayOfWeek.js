import React, { useState } from'react';

const getDayOfWeek = (date) => {
  const d = new Date(date);
  const days = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return days[d.getDay()];
};

const DayOfWeek = () => {
  const [inputDate, setInputDate] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const day = getDayOfWeek(inputDate);
    setResult(`${inputDate} 是 ${day}`);
  };

  return (
    <div>
      <h2>查询某日期是星期几</h2>
      <input
        type="date"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
      />
      <button onClick={handleCalculate}>计算</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default DayOfWeek;