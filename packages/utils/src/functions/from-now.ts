// import moment from "moment";
// export function fromNow(date: any) {
//   return moment(date).fromNow();
// }
import { formatDistanceToNow } from "date-fns";

export function fromNow(date) {
  const distance = formatDistanceToNow(date, { addSuffix: true });

  // Replace full words with single characters
  return distance
    .replace("about", "a")
    .replace("less than", "1 seconds")
    .replace("a minute", "50 seconds")
    .replace("minutes", "m")
    .replace("an hour", "h")
    .replace("hours", "h")
    .replace("hour", "h")
    .replace("a day", "d")
    .replace("days", "d")
    .replace("a week", "w")
    .replace("weeks", "w")
    .replace("a month", "M")
    .replace("months", "M")
    .replace("a year", "y")
    .replace("years", "y")
    .replace("ago", "")
    .replace("a", "")
    .replace("dy", "d");
}
