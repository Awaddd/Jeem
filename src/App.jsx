import React, { useState } from 'react'
import Store from './Store/Store';
import Calendar from './Components/Calendar';
import CalendarYear from './Components/CalendarYear';

import './assets/css/App.css'

function App() {
  return (
    <Store>
      <div className="App">
        <header className="App-header"><h1>ج</h1></header>
        <CalendarYear></CalendarYear>
        <Calendar></Calendar>
      </div>
    </Store>
  )
}

export default App
