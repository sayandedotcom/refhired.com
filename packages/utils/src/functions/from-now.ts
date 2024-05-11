import moment from "moment";

export function fromNow(date: any) {
  return moment(date).fromNow();
}
