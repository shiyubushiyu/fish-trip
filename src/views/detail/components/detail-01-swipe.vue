<template>
  <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="3000" lazy-render indicator-color="white">
      <template v-for="item in housePice" :key="item.url">
        <van-swipe-item>
          <img :src="item.url" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">{{ housePice[active]?.title }}{{ active }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDetailStore } from '@/stores'
import { storeToRefs } from 'pinia';

const detailStore = useDetailStore()
const { detailInfos } = storeToRefs(detailStore)

/* 轮播图列表 */
const housePice = computed(() => {
  const arr = detailInfos.value?.mainPart?.topModule?.housePicture?.housePics
  if (arr && arr.length) {
    return arr
  }
  return []
})

</script>

<style lang="less" scoped>
.swipe {
  .my-swipe {
    img {
      width: 100%;
    }
  }

  .indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    border-radius: 4px;
  }
}
</style>
