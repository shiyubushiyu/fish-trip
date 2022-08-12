<template>
  <div class="home" ref="homeRef">
    <nav-bar />
    <div class="banner">
      <img src="@/assets/img/R-C.jpg" alt="">
    </div>
    <!-- 城市选择 -->
    <home-search-box />
    <!-- 热门推荐 -->
    <home-categories />

    <!-- 搜索栏 -->
    <div v-show="isShowSearchBar" class="search">
      <search-bar />
    </div>
    <!-- 列表数据 -->
    <home-content />
  </div>
</template>

<script setup>
import { watch, computed, ref } from 'vue';
import { useHomeStore } from '@/stores'
import { NavBar, HomeSearchBox, HomeCategories, HomeContent } from './components'
import { searchBar } from '@/components'
import { useScroll } from '@/hooks'

const homeRef = ref()
const homeStore = useHomeStore()
const { isReachBottom, scrollTop } = useScroll(homeRef.value)

// 搜索栏显示隐藏
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})
/* 调用获取热门推荐 */
homeStore.fetchHotSuggestData()
/* 调用获取分类列表 */
homeStore.fetchCategoriesData()
/* 调用房屋列表 */
homeStore.fetchHouseListData()

// 监听触底事件
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(_ => {
      isReachBottom.value = false
    })
  }
})


</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;

  .banner {
    img {
      width: 100%;
    }
  }

  .search {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
    z-index: 20;
  }
}
</style>
