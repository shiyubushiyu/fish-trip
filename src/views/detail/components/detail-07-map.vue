<template>
  <div class="map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div ref="mapRef" id="baidu"></div>
    </detail-section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { detailSection } from '@/components'
import { useDetailStore } from '@/stores'
import { storeToRefs } from 'pinia'

const mapRef = ref()
const detailStore = useDetailStore()

const { detailInfos } = storeToRefs(detailStore)

const orderRules = computed(() => {
  const obj = detailInfos.value?.mainPart?.dynamicModule?.positionModule
  return obj || {}
})

onMounted(() => {

})
watch(orderRules, (val) => {
  if (val) {
    const map = new BMapGL.Map(mapRef.value);          // 创建地图实例
    const point = new BMapGL.Point(orderRules.value.longitude, orderRules.value.latitude);  // 创建点坐标 经纬
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    const marker = new BMapGL.Marker(point);   // 创建标注  
    map.addOverlay(marker);                     // 将标注添加到地图中
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }
})
</script>

<style scoped>
#baidu {
  height: 250px;
}
</style>
