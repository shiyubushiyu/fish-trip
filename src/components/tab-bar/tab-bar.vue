<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="item.path">
      <div class="tab-bar-item" :class="{ active: currentIndex === index }"
        @click="currentClickFn({ index, path: item.path })">
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)">
        <img v-else :src="getAssetURL(item.imageActive)">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import tabbarData from '@/assets/data/tabbar.js'
import { getAssetURL } from '@/utils'

const router = useRouter()
const route = useRoute()

const currentIndex = ref(0)

function currentClickFn({ index, path }) {
  currentIndex.value = index
  router.push(path)
}

/* 监听路由 */
watch(route, (newRoute) => {
  newRoute.meta.tabBarIndex && (currentIndex.value = newRoute.meta.tabBarIndex)
})
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f6f6f6;
  background-color: #fff;

  .active {
    color: var(--primary-color);
  }

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 26px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
