<template>
  <div class="intro">
    <h2 class="title">{{ priceIntro.title }}</h2>
    <div class="content">{{ priceIntro.introduction }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useDetailStore } from '@/stores'
import { storeToRefs } from 'pinia'

const detailStore = useDetailStore()

const { detailInfos }: any = storeToRefs(detailStore)

const priceIntro = computed(() => {
  const obj = detailInfos.value?.mainPart?.introductionModule
  return obj || {}
})
</script>

<style lang="less" scoped>
.intro {
  padding: 16px 12px;
  border-top: 5px solid #f2f3f4;

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }

  .content {
    padding: 10px 0;
  }
}
</style>
