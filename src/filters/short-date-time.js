export default (value) => {
  const date = new Date(value);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  let amPm = 'AM';

  if (hours > 12) {
    amPm = 'PM';
    hours -= 12;

    if (hours === 0) {
      hours = 12;
    }
  }

  return `${date.toDateString()} ${hours}:${minutes} ${amPm}`;
};
