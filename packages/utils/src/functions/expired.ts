import moment from "moment";

export function expired(date: any) {
  return moment().isAfter(date);
}
