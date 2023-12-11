// Use type safe message keys with `next-intl`
export type Messages = typeof import("../messages/en.json");
declare interface IntlMessages extends Messages {}
