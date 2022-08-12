<template>
  <div class="search-bar">
    <div class="select-item">
      <div class="start item">
        <div class="name">住</div>
        <div class="date">{{ startDateStr }}</div>
      </div>
      <div class="end item">
        <div class="name">离</div>
        <div class="date">{{ endDateStr }}</div>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/名宿</div>
    </div>
    <div class="right">
      <van-icon name="search" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMainStore } from '@/stores'
import { storeToRefs } from 'pinia';
import { formatMonthDay } from "@/utils";


const mainStore = useMainStore()

const { startDate, endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => formatMonthDay(startDate.value, 'MM.DD',))
const endDateStr = computed(() => formatMonthDay(endDate.value, 'MM.DD',))
</script>

<style lang="less" scoped>
.search-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  color: #999;
  border-radius: 6px;
  background-color: #f2f4f6;

  .select-item {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      line-height: normal;
      font-size: 10px;
    }

    .date {
      position: relative;
      color: #333;
      margin: 0 10px 0 3px;
      font-weight: 500;
    }
  }

  .end .date::after {
    content: ' ';
    width: 0;
    height: 0;
    border: 4px solid #666;
    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
    border-radius: 3px;
    transform: rotate(45deg);
    position: absolute;
    bottom: 0px;
    right: -12px;
  }

  .content {
    position: relative;
    flex: 1;
    padding: 0 6px;
    text-align: left;
    border-left: 1px solid #fff;

    .keyword {
      min-width: 155px;
      font-size: 12px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }
}
</style>
