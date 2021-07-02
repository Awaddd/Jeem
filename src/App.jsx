import React, { useState } from 'react'
import Store from './Store/Store';
import Calendar from './Components/Calendar';
import CalendarYear from './Components/CalendarYear';
import dayjs from 'dayjs';

import './assets/css/App.css'

function App() {
  return (
    <Store>
      <div className="App">

        <header className="App-header"><h1>ج</h1></header>

        <CalendarYear></CalendarYear>

        <h2 className="App-month-label">{dayjs().format('MMMM')}</h2>
  
        <Calendar></Calendar>

      </div>
    </Store>
  )
}

export default App
