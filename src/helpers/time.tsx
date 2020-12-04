export const getCurrentTimer = () => {
  const weekdays: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentTime: Date = new Date();
  const hour: number = currentTime.getHours();
  const minute: number = currentTime.getMinutes();
  const second: number = currentTime.getSeconds();
  const section: string = hour >= 12 ? 'pm' : 'am';
  const weekday: string = weekdays[currentTime.getDay()];
  const month: string = months[currentTime.getMonth()];
  const day: number = currentTime.getDate();
  const year: number = currentTime.getFullYear();

  return {
    hour,
    minute,
    second,
    section,
    weekday,
    month,
    day,
    year,
  };
}