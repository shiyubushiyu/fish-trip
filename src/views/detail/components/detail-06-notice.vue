<template>
  <div class="notice">
    <detail-section title="预定须知">
      <div class="notice-inner">
        <template v-for="(item, index) in orderRules" :key="index">
          <div class="item">
            <span class="title">{{ item.title }}</span>
            <span class="intro">{{ item.introduction }}</span>
            <span class="tip" v-if="item.tips">查看说明</span>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { detailSection } from '@/components'
import { useDetailStore } from '@/stores'
import { storeToRefs } from 'pinia'
const detailStore = useDetailStore()

const { detailInfos } = storeToRefs(detailStore)

const orderRules = computed(() => {
  const obj = detailInfos.value?.mainPart?.dynamicModule?.rulesModule?.orderRules
  return obj || {}
})
</script>

<style lang="less" scoped>
.notice-inner {
  .item {
    display: flex;
    margin: 10px 0 20px;
    font-size: 12px;

    .title {
      width: 64px;
      color: #666;
    }

    .intro {
      flex: 1;
      color: #333;
    }
  }
}
</style>
