<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <house-item-v3 v-if="item.discoveryContentType === 3" :house="item.data" @click="houseItemClick(item.data)" />
        <house-item-v9 v-if="item.discoveryContentType === 9" :house="item.data" @click="houseItemClick(item.data)" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from '@/stores'
import { toRefs } from 'vue';
import { houseItemV3, houseItemV9 } from '@/components'
import { useRouter } from 'vue-router'

const router = useRouter()
const homestore = useHomeStore()
const { houseList } = toRefs(homestore)

/* 热门精选item点击事件 */
function houseItemClick(data) {
  router.push(`/detail/${data.houseId}`)
}

</script>

<style lang="less" scoped>
.content {
  padding: 0 10px;

  .title {
    margin-bottom: 20px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
