import { defineStore } from "pinia";
import { formatMonthDay, getDiffDays } from "@/utils";

const startDate = new Date(); // 当前时间
const endDate = new Date();
endDate.setDate(startDate.getDate() + 1); // 明天时间

export const useMainStore = defineStore("main", {
  state() {
    return {
      token: "",
      startDate: startDate,
      endDate: endDate,
      showLoading: false,
    };
  },
  actions: {},
  getters: {
    /* 字符串开始日期 */
    startDateStr() {
      return formatMonthDay(this.startDate);
    },
    /* 字符串结束日期 */
    endDateStr() {
      return formatMonthDay(this.endDate);
    },
    /* 相隔多少天 */
    stayCount() {
      return getDiffDays(this.startDate, this.endDate);
    },
  },
});
