import dayjs from "dayjs";

/* 获取月日 */
export function formatMonthDay(date, formatStr = "MM月DD日") {
  return dayjs(date).format(formatStr);
}

/* 获取两个时间之间的天数 */
export function getDiffDays(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day");
}
