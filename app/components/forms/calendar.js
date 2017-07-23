import React from 'react';
import { render } from 'react-dom';

import InfiniteCalendar,{
	Calendar,
	withRange,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet

const CalendarWithRange = withRange(Calendar);

// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

render(
  <InfiniteCalendar
  	Component={CalendarWithRange}
    width={400}
    height={600}
    selected={today}
    rowHeight={40}
    className={'calendar'}
    onScroll={function(scrollTop) {
      console.log(scrollTop);
  }}
    // disabledDays={[0,6]}
    minDate={lastWeek}
    displayOptions={{
    	layout:'landscape',
    	shouldHeaderAnimate:true,
    	showOverlay:true,
    	showTodayHelper:true,
    }}
	/>,
  document.getElementById('root')
);

module.exports = Calendar;


