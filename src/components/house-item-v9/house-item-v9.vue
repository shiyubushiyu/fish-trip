<template>
  <div class="house-item-v3">
    <img :src="house.image.url" alt="">
    <div class="info">
      <div class="summary">{{ house.summaryText }}</div>
      <div class="name">{{ house.houseName }}</div>
      <div class="price">
        <van-rate :model-value="itemScore" color="#fff" :size="15" readonly allow-half />
        <div class="new">¥ {{ house.finalPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
  house: {
    type: Object,
    default: () => ({})
  }
})

const itemScore = computed(() => Number(props.house.commentScore))
</script>

<style lang="less" scoped>
.house-item-v3 {
  position: relative;
  width: 49%;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
  }

  .info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 10px;
    font-size: 12px;
    color: #fff;

    .summary {
      margin-bottom: 5px;
    }

    .name {
      margin-bottom: 10px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden; //溢出内容隐藏
      text-overflow: ellipsis; //文本溢出部分用省略号表示
      display: -webkit-box; //特别显示模式
      -webkit-line-clamp: 2; //行数
      line-clamp: 2;
      -webkit-box-orient: vertical; //盒子中内容竖直排列
    }

    .price {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
