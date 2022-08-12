

<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <!-- name属性 -->
      <keep-alive include="home">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- 根据当前活跃的路由的hideTabBer来显示隐藏tabbar -->
    <tab-bar v-if="!route.meta.hideTabBer"></tab-bar>
    <!-- loading -->
    <loading v-show="showLoading" />
  </div>
</template>

<script>
export default { name: 'home' }
</script>
<script setup>
import { useRoute } from 'vue-router';
import { tabBar, loading } from '@/components'
import { useMainStore } from '@/stores'
import { storeToRefs } from 'pinia';

const mainStore = useMainStore()
const { showLoading } = storeToRefs(mainStore)

const route = useRoute()
</script>

<style lang="less" scoped>
</style>
