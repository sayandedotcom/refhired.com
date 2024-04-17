import moment from "moment";

export function fromNow(date: any) {
  return moment(date, "YYYYMMDD").fromNow();
  // return date;
  // formatDistance(Date.now(), date);
}
