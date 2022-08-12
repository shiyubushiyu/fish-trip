<template>
  <div class="search-box">
    <!-- 城市选择 -->
    <div class="location section">
      <div class="city" @click="cityClick">{{ currentCity.cityName || '请选择' }}</div>
      <div class="postion" @click="postionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/定位.png" alt="">
      </div>
    </div>
    <!-- 日期范围 -->
    <div class="section date-range" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <div class="tip">入住</div>
          <div class="time">{{ startDateStr }}</div>
        </div>
      </div>
      <div class="stay">共 {{ stayCount }} 晚</div>
      <div class="end">
        <div class="date">
          <div class="tip">离店</div>
          <div class="time">{{ endDateStr }}</div>
        </div>
      </div>
    </div>
    <!-- 价格/人数选择 -->
    <div class="section">
      <div class="describe">价格不限</div>
      <div class="describe">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section">
      <div class="describe">关键字/位置/民宿名</div>
    </div>
    <!-- 热门建议 -->
    <div class="hot-suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div class="item" :style="{ color: item.tagText.color, background: item.tagText.background.color }">{{
            item.tagText.text
        }}</div>
      </template>
    </div>

    <!-- 搜索 -->
    <div class="search-btn" @click="searchBtnClick">
      开始搜索
    </div>
    <!-- 日历弹窗 -->
    <van-calendar v-model:show="showCalendar" type="range" color="#1989fa" :show-confirm="false" :formatter="formatter"
      @confirm="onConfirm" />
  </div>
</template>

<script setup>
import { toRefs, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCityStore, useHomeStore, useMainStore } from '@/stores'
import { Notify } from 'vant';
import { storeToRefs } from 'pinia';

const router = useRouter()
const cityStore = useCityStore()
const homeStore = useHomeStore()
const mainStore = useMainStore()

const { currentCity } = toRefs(cityStore)
const { hotSuggests } = toRefs(homeStore)
const { startDate, endDate, startDateStr, endDateStr, stayCount } = storeToRefs(mainStore)
const showCalendar = ref(false) // 日历组件

/* 位置/城市 */
function cityClick() {
  router.push('/city')
}

/* 获取当前位置信息 */
function postionClick() {
  navigator.geolocation.getCurrentPosition(res => {
    console.log('获取位置成功：', res)
  }, err => {
    console.log('获取位置失败：', err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}

/* 日历时间选择 */
function onConfirm(dateArr) {
  mainStore.startDate = dateArr[0]
  mainStore.endDate = dateArr[1]
  showCalendar.value = false
}

/* 日期文案 */
function formatter(day) {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }
  return day
}

/* 开始搜索 */
function searchBtnClick() {
  if (!currentCity.value.cityName) return Notify({ type: 'danger', message: '请先选择城市' });
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}
</script>

<style lang="less" scoped>
.search-box {
  .location {
    .city {
      flex: 1;
      font-size: 15px;
      color: #333;
    }

    .postion {
      width: 74px;

      .text {
        font-size: 12px;
        color: #666;
      }

      img {
        margin-left: 5px;
        height: 18px;
        width: 18px;
      }
    }
  }

  .section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 44px;
  }

  .tip {
    font-size: 12px;
    color: #999;
  }

  .describe {
    font-size: 14px;
    color: #999;
  }

  .time {
    margin-top: 5px;
    color: #333;
    font-size: 15px;
    font-weight: 500px;
    line-height: 1;
  }

  .hot-suggest {
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
    // justify-content: center;

    .item {
      padding: 4px 8px;
      margin: 4px;
      border-radius: 5px;
      font-size: 12px;
    }
  }

  .search-btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
    margin: 10px auto;
  }
}
</style>
