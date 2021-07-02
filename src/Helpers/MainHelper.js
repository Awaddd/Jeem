export const initialiseCalendarMonth = (numWeeks, totalDays) => {
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

  return arr;
}
