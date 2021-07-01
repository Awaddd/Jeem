import React, { useState, useContext, useEffect } from 'react';
import {Context} from '../Store/Store';

function Calendar () {

  //define date
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let totalDays = new Date(year, month, 0).getDate();

  //calculate the number of weeks/rows based on the total days in the current month
  let numWeeks = Math.floor(Math.sqrt(totalDays));

  //
  let arr = [];
  let currentDay = 1;

  for (let week = 0; week < numWeeks; week++) {
  
    arr[week] = [];

    for (let day = 0; day < 7; day++) {
      if (currentDay <= totalDays) {
        arr[week][day] = {day: currentDay, active: false};
        currentDay++;
      }
    }
  
  }

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    dispatch({type: 'SET_PROGRESS', payload: arr});
  }, [])

  function toggleCell (week, day) {
    state.progress[week][day].active = !state.progress[week][day].active;
    dispatch({ type: 'SET_PROGRESS', payload: state.progress });
  }

  return (
    <div className="calendar">
      <header>
        <div className="row">
          <div className="cell"><span>Monday</span></div>
          <div className="cell"><span>Tuesday</span></div>
          <div className="cell"><span>Wednesday</span></div>
          <div className="cell"><span>Thursday</span></div>
          <div className="cell"><span>Friday</span></div>
          <div className="cell"><span>Saturday</span></div>
          <div className="cell"><span>Sunday</span></div>
        </div>
      </header>
      <main>

        {state.progress.map((row, parentKey) => (

          <div className="row" key={parentKey}>

            {row.map((cell, childKey) => (

              <div className={cell.active ? "cell cell-activated" : "cell"} onClick={() => toggleCell(parentKey, childKey)} key={childKey}>
                <span>{cell.day}</span>
              </div>

            ))}

          </div>

        ))}

      </main>
    </div>
  )
}

export default Calendar;