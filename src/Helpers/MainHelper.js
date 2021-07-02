import { months } from '../Helpers/DateHelper';
import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';
import dayOfYear from 'dayjs/plugin/dayOfYear';

dayjs.extend(objectSupport)

export const initialiseCalendarMonth = () => {

  //define date
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let totalDays = new Date(year, month, 0).getDate();

  //calculate the number of weeks/rows based on the total days in the current month
  let numWeeks = Math.floor(Math.sqrt(totalDays));

  let arr = [];
  let currentDay = 1;

  for (let week = 0; week < numWeeks; week++) {

    arr[week] = [];

    for (let day = 0; day < 7; day++) {
      if (currentDay <= totalDays) {
        arr[week][day] = {day: currentDay, active: false };
        currentDay++;
      }
    }

  }

  return arr;

}

export const buildCalendarTertile = () => {

  //
  let date = dayjs()
  let tertile = Math.floor((date.month() + 4) / 4) -1
  let currentTertile = [...months[tertile]]

  //
  let year = date.year()
  let firstDay = dayjs({year, month: currentTertile[0].key - 1})

  //
  let month = currentTertile[3].key - 1
  let lastDay = dayjs({year, month, day: dayjs(dayjs({year, month})).daysInMonth()})

  //
  let obj = {}
  for (let i = firstDay.dayOfYear(); i <= lastDay.dayOfYear(); i++) {
    obj[i] = { date: dayjs().dayOfYear(i).format('YYYY-MM-DD'), dayOfYear: i, active: false }
  }

  return obj

}
