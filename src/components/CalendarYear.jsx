import React, { useState, useContext, useEffect } from 'react';
import {Context} from '../Store/Store';
import Calendar from './Calendar';

function CalendarYear () {

  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    console.log(state.progress);
  });

  return (
    <div>

    </div>
  )
}

export default CalendarYear;

