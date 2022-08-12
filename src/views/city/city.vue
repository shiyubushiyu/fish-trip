<template>
  <div class="city">
    <div class="top">
      <!-- 1. 搜索 -->
      <van-search v-model="searchValue" show-action shape="round" placeholder="请输入搜索关键词" @cancel="cancelClick" />

      <!-- 2. tab的切换 -->
      <van-tabs v-model:active="tabActive" color="#1296db" line-width="24" line-height="5">
        <template v-for="(value, key, index) in allCitys" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCitys" :key="index">
        <city-group v-show="tabActive === key" :groupData="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCityStore } from '@/stores'
import { storeToRefs } from 'pinia';
import { CityGroup } from './components'
// import { getCityAll } from '@/services'

const router = useRouter()
const searchValue = ref()
const tabActive = ref()
const cityStore = useCityStore() // 获取到pinia是store实例
// const allCity = ref({}) // 城市资源

/* 取消 */
function cancelClick() {
  router.back()
}

/**
 * 这个位置发送网络请求有两个缺点：
 *    1. 如果网络请求太多，那么页面组件中久包含大量对于网络请求和数据的处理逻辑
 *    2. 如果页面封装了很多子组件，子组件需要这些数据，我们必须一步步将数据传递过去（props）
 */
// 网络请求： 请求城市的数据
// getCityAll().then(res => {
//   allCity.value = res.data
// })
cityStore.fetchAllCitiesData()
// 通过storeToRefs让解构出来的数据变成响应式，使用toRefs也可以
const { allCitys } = storeToRefs(cityStore)

// 目的： 获取选中标签后的数据
// 1. 获取正确的key：将tabs中绑定的tabActive正确绑定
// 2. 根据key从allCitys获取数据，
const currentGroup = computed(() => allCitys.value[tabActive.value])

</script>

<style lang="less" scoped>
.city {
  /* 局部重新定义vant的css变量的值 */
  --van-tabs-line-height: 38px;

  // .top {
  //   position: relative;
  //   z-index: 9;
  // }

  .content {
    height: calc(100vh - 92px);
    overflow-y: auto;
  }
}
</style>
