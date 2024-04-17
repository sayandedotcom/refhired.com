import moment from "moment";

export function timeLeft(date: any) {
  var given = moment(date, "YYYY-MM-DD");
  var current = moment().startOf("day");

  const ans = moment.duration(given.diff(current)).asDays();

  if (ans < 0) {
    return `Expired  ${Math.abs(ans)}  ago`;
  } else {
    return `${Math.abs(ans)} time left`;
  }

  // return moment.duration(given.diff(current)).asDays();
}
