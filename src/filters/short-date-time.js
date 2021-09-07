export default (value) => {
  const date1 = new Date(value);
  const date = new Date(Date.UTC(date1.getUTCFullYear(), date1.getMonth(), date1.getDate(), date1.getHours(), date1.getMinutes(), date1.getSeconds()));
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
