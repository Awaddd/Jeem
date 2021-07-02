import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../Store/Store';
import { months, FORMAT_TIMESTAMP } from '../Helpers/DateHelper';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import objectSupport from 'dayjs/plugin/objectSupport';

dayjs.extend(dayOfYear)
dayjs.extend(objectSupport)

const buildCalendarTertile = () => {
  //
  let date = dayjs()
  let tertile = Math.floor((date.month() + 4) / 4) -1
  let currentTertile = [...months[tertile]]

  //
  let year = date.year()
  let firstDay = dayjs({year, month: currentTertile[0].key - 1})

  //
  let month = currentTertile[3].key - 1
  let lastMonthInTertile = dayjs({year, month})
  let daysInMonth = dayjs(lastMonthInTertile).daysInMonth()
  let lastDay = dayjs({year, month, day: daysInMonth})

  //
  let obj = {}
  for (let i = firstDay.dayOfYear(); i <= lastDay.dayOfYear(); i++) {
    obj[i] = { date: dayjs().dayOfYear(i).format('YYYY-MM-DD'), dayOfYear: i, active: false }
  }

  return obj
}

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

