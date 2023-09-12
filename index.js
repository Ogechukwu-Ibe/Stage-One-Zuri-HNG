// days of the week
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const currentDay = new Date().getDay();
const currentUTCTime = new Date().getUTCMilliseconds();
const dayOfWeek = daysOfWeek[currentDay];

// Current Day of the Week
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
  dayOfWeek;

// Current UTC Time
document.querySelector('[data-testid="currentUTCTime"]').textContent =
  currentUTCTime;
