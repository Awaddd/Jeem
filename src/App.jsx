import React, { useState } from 'react'
import Store from './Store/Store';
import Calendar from './Components/Calendar';
import CalendarYear from './Components/CalendarYear';
import dayjs from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';
dayjs.extend(objectSupport)


import './assets/css/App.css'

function App() {

  const [ month, setMonth ] = useState(new Date().getMonth())

  return (
    <Store>
      <div className="App">

        <header className="App-header"><h1>ج</h1></header>

        <CalendarYear></CalendarYear>

        <h2 className="App-month-label">{ dayjs({year: dayjs().year(), month: month, day: 1 }).format('MMMM') }</h2>
  
        <section className="App-calendar-wrapper">
          <div className="App-calendar-navigation"><button onClick={() => month >= 0 && setMonth(month - 1)}> prev </button></div>
          <Calendar month={month}></Calendar>
          <div className="App-calendar-navigation"><button onClick={() => month < 11 && setMonth(month + 1)}> next </button></div>
        </section>

      </div>
    </Store>
  )
}

export default App
