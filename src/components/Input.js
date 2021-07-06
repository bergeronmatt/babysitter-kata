import React, { useState, useEffect } from "react";

export default function Input({ clockIn, clockOut, bedtime }) {

  // set the state of the input form
  const [chosenClockIn, setChosenClockIn] = useState('');
  const [chosenBedtime, setChosenBedtime] = useState('');
  const [chosenClockOut, setChosenClockOut] = useState('');

  useEffect(() => {
      clockIn(chosenClockIn);
      bedtime(chosenBedtime);
      clockOut(chosenClockOut);
  })

  const clearTimes = (e) => {
      e.preventDefault();

      setChosenClockIn('');
      setChosenBedtime('');
      setChosenClockOut('');
  }

  return (
    <div className="container">
      <div className="time_form">
        <form className="form">
          <div className="clockIn">
            <label><p>Clock In</p></label>
            <input
              id="clockIn"
              type="time"
              name="chosenClockIn"
              onChange={e => setChosenClockIn(e.target.value)}
              value={chosenClockIn}
            />
            <label><p>Bedtime</p></label>
            <input
              id="bedtime"
              type="time"
              name="chosenBedtime"
              onChange={e => setChosenBedtime(e.target.value)}
              value={chosenBedtime}
            />
            <label><p>Clock Out</p></label>
            <input
              id="clockOut"
              type="time"
              name="chosenClockOut"
              onChange={e => setChosenClockOut(e.target.value)}
              value={chosenClockOut}
            />
          </div>
          <button className='clear_btn' onClick={clearTimes}>Clear</button>
        </form>
      </div>
    </div>
  );
}
