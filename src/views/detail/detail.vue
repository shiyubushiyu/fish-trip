<template>
  <div ref="detailRef" class="detail">
    <van-nav-bar title="详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <!-- tabbar -->
    <tab-control v-model="currentIndex" class="tabs" v-if="showTabControl" :titles="tabList" @click="tabControlClick" />
    <detail-swipe />
    <detail-infos />
    <detail-facility name="设施" :ref="getSectionRef" />
    <detail-landlord name="介绍" :ref="getSectionRef" />
    <detail-comment name="评论" :ref="getSectionRef" />
    <detail-notice name="须知" :ref="getSectionRef" />
    <detail-map name="周边" :ref="getSectionRef" />
    <detail-intro />
    <div class="footer">
      <img src="@/assets/img/美女.jpg" alt="">
      <div class="text">宏源旅途,永无止境！</div>
    </div>
    <!-- <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <template #tip>
        你的收货地址不支持配送, <span @click="onClickLink">修改地址</span>
      </template>
    </van-submit-bar> -->
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { useDetailStore } from '@/stores'
import { DetailSwipe, DetailInfos, DetailFacility, DetailLandlord, DetailComment, DetailNotice, DetailMap, DetailIntro } from './components'
import { tabControl } from '@/components'
import { useScroll } from '@/hooks'

const router = useRouter()
const route = useRoute()
const detailStore = useDetailStore()
const { scrollTop } = useScroll()
const detailRef = ref()
const currentIndex = ref(0)

// tab
const showTabControl = computed(() => {
  return scrollTop.value > 300
})
const sectionEls = ref({}) // 导航滚动的元素
const tabList = computed(() => {
  return Object.keys(sectionEls.value)
})

/* 导航滚动 */
function getSectionRef(index) {
  if (!index) return
  if (Object.keys(sectionEls.value).length >= 5) return
  sectionEls.value[index.$el.getAttribute('name')] = index.$el
}
function tabControlClick(index) {
  const key = Object.keys(sectionEls.value)[index]
  window.scrollTo({
    top: sectionEls.value[key].offsetTop - 44,
    behavior: 'smooth'
  })
}

function onClickLeft() {
  router.back()
}

detailStore.fetchDetailInfos(route.params.id)

// 页面滚动，滚动时匹配对应的tab的index
watch(scrollTop, (val) => {
  // console.log(val)
  // 1. 获取所有的区域的offsetTops
  const els = Object.values(sectionEls.value)
  const values = els.map(item => item.offsetTop)
  // 2. 根据newindex去匹配想要的索引
  for (let i = 0; i <= values.length - 1; i++) {
    if (val >= values[i] - 44) {
      if (currentIndex.value !== i) {
        currentIndex.value = i
      }
    }
  }
})

</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12px;
  background-color: #fff;

  img {
    width: 50%;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
