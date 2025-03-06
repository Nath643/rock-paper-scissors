import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {isWeekend as isSatSun} from './15-is-weekend.js';

const currentDay = dayjs();

const fiveDaysAhead = currentDay.add(5, 'days');
const formattedFiveDaysAhead = fiveDaysAhead.format('MMMM D');
console.log(formattedFiveDaysAhead);

const oneMonthAhead = currentDay.add(1, 'month');
const formattedoneMonthAhead = oneMonthAhead.format('MMMM D');
console.log(formattedoneMonthAhead);

const oneMonthBefore = currentDay.subtract(1, 'month');
const formattedOneMonthBefore = oneMonthBefore.format('MMMM D');
console.log(formattedOneMonthBefore);

const dayOfTheWeek = currentDay.format('dddd');
console.log(dayOfTheWeek);


console.log(isSatSun(currentDay));
console.log(isSatSun(oneMonthAhead));
console.log(isSatSun(oneMonthBefore));