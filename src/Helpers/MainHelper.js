import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';
import { FORMAT_TIMESTAMP } from '../Helpers/DateHelper';

dayjs.extend(objectSupport)

export const initialiseCalendarMonth = (numWeeks, totalDays) => {

  let arr = [];
  let currentDay = 1;

  for (let week = 0; week < numWeeks; week++) {

    arr[week] = [];

    for (let day = 0; day < 7; day++) {
      if (currentDay <= totalDays) {
        arr[week][day] = {day: currentDay, active: false, date: dayjs({ year: dayjs().year(), month: dayjs().month(), day: currentDay }).format(FORMAT_TIMESTAMP) };
        currentDay++;
      }
    }

  }

  return arr;

}
