import React from'react';
import './App.css';
import DateDiff from './components/DateDiff';
import DayOfWeek from './components/DayOfWeek';
import HoursBetween from './components/HoursBetween';
import WorkingDays from './components/WorkingDays';
import TimeOperation from './components/TimeOperation';

function App() {
  return (
    <div className="App">
      <h1>日期和时间计算工具</h1>
      <DateDiff />
      <DayOfWeek />
      <HoursBetween />
      <WorkingDays />
      <TimeOperation />
    </div>
  );
}

export default App;