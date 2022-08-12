<template>
  <div class="categories">
    <template v-for="item in categories" :kay="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <span class="title">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';
import { useHomeStore } from '@/stores'

const homeStore = useHomeStore()
const { categories } = toRefs(homeStore) 
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  padding: 0 10px;
  height: 80px;

  /* 隐藏滚动条 */
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    /* 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。 */
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;

    img {
      width: 32px;
      height: 32px;
    }

    .title {
      padding: 5px;
    }
  }
}
</style>
