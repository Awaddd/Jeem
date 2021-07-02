import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../Store/Store';
import { months, FORMAT_TIMESTAMP } from '../Helpers/DateHelper';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import objectSupport from 'dayjs/plugin/objectSupport';

dayjs.extend(dayOfYear)
dayjs.extend(objectSupport)

function CalendarYear () {

  const [state, dispatch] = useContext(Context)


  let date = dayjs()
  let tertile = Math.floor((date.month() + 4) / 4) -1
  let currentTertile = [...months[tertile]]

  let year = date.year()
  let month = currentTertile[0].key - 1
  let dayOne = dayjs({year, month})

  month = currentTertile[3].key - 1
  let lastMonthInTertile = dayjs({year, month})
  let daysInMonth = dayjs(lastMonthInTertile).daysInMonth()
  let lastDayInTertile = dayjs({year, month, day: daysInMonth})

  let obj = {}
  for (let i = dayOne.dayOfYear(); i <= lastDayInTertile.dayOfYear(); i++) {
    obj[i] = { date: dayjs().dayOfYear(i).format(FORMAT_TIMESTAMP), active: false }
  }

  const [calendarTertile, setCalendarTertile] = useState(obj)

  let x = Object.values(calendarTertile)

  return (
    <div className="calendarYear">
      {x.map((value, key) => (
        <span className={value.active ? 'cell cell-activated' : 'cell'} key={key}></span>
      ))}
    </div>
  )
}

export default CalendarYear;

