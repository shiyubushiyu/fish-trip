<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hot">
        <template v-for="item in groupData.hotCities" :key="item.cityId">
          <span class="hot-item" @click="cityClick(item)">{{ item.cityName }}</span>
        </template>
      </div>
      <template v-for="item in groupData.cities" :key="item.group">
        <van-index-anchor :index="item.group" />
        <template v-for="iten in item.cities" :key="iten.cityId">
          <van-cell :title="iten.cityName" @click="cityClick(item)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>
  
<script setup>
import { computed } from 'vue'
import { useCityStore } from '@/stores'
import { useRouter } from 'vue-router'

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})
const router = useRouter()
const cityStore = useCityStore()

const indexList = computed(() => {
  const groupNames = props.groupData.cities.map(item => item.group)
  return ['#', ...groupNames]
})

/* 选择城市 */
function cityClick(city) {
  cityStore.currentCity = city
  router.back()
}
</script>
  
<style lang="less" scoped>
.hot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 10px;
  padding-right: 25px;

  .hot-item {
    display: inline-block;
    height: 30px;
    width: 70px;
    background-color: #c0eaff;
    margin: 5px 0;
    border-radius: 20px;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
  }
}
</style>
