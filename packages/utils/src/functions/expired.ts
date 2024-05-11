import moment from "moment";

// Calculate the date 30 days ago
export function thirtyDaysAgo() {
  return moment().subtract(30, "days").toDate();
}
