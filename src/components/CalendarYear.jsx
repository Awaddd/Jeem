import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../Store/Store';
import { buildCalendarTertile } from '../Helpers/MainHelper';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';

dayjs.extend(dayOfYear)

const updateProgress = (data, calendarTertileArray) => {

  // flatten state.progress into just days instead of weeks/days
  let progress = [].concat.apply([], data)

  // update current month's progress
  let newArr = calendarTertileArray.map((day) => {

    //
    let today = dayjs().dayOfYear(dayjs(day.dayOfYear))

    //
    if (today.month() !== dayjs().month()) return day

    //
    if (today.month() == dayjs().month()) {
      return progress[today.date() - 1]
    }

  })

  //
  return newArr

}

function CalendarYear () {

  const [state, dispatch] = useContext(Context)
  const [calendarTertile, setCalendarTertile] = useState(buildCalendarTertile())

  let calendarTertileArray = Object.values(calendarTertile)

  useEffect(() => state.progress.length > 0 && setCalendarTertile(() => [...updateProgress(state.progress, calendarTertileArray)]), [state.progress]);

  return (
    <div className="calendarYear">
      {calendarTertileArray.map((day, key) => (
        <span className={day.active ? 'cell cell-activated' : 'cell'} key={key}></span>
      ))}
    </div>
  )
}

export default CalendarYear;

