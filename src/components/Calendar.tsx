import React, { useState } from 'react';
import './Calendar.css';

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  function goToPreviousMonth() {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  }

  function goToNextMonth() {
    setDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  }

  function getMonthName() {
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined);
  }

  function getDaysInMonth() {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return daysInMonth;
  }

  function getFirstDayOfWeek() {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    return firstDay.getDay();
  }

  function renderCalendar() {
    const daysInMonth = getDaysInMonth();
    const firstDayOfWeek = getFirstDayOfWeek();
    const blanks = [];
    const days = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
      blanks.push(
        <div className="calendar-day empty" key={`blank-${i}`}></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div className="calendar-day" key={`day-${day}`}>
          {day}
        </div>
      );
    }

    return [...blanks, ...days];
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>&lt;</button>
        <h2>{getMonthName()}</h2>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="calendar-body">{renderCalendar()}</div>
    </div>
  );
}
