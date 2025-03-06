export function isWeekend(dayJsObject) {
  const dayJsObjectDay = dayJsObject.format('dddd');
  
  if (dayJsObjectDay === 'Saturday' || dayJsObjectDay === 'Sunday') {
    return 'It is the weekend';
  } else {
    return 'It is not the weekend';
  }
}

export default isWeekend;