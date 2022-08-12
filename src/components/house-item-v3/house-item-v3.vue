<template>
  <div class="house-item-v3">
    <img :src="house?.image.url" alt="">
    <div class="info">
      <div class="location">
        <van-icon name="location-o" />
        <span>{{ house.location }}</span>
      </div>
      <div class="name">{{ house.houseName }}</div>
      <div class="summary">{{ house.summaryText }}</div>
      <div class="price">
        <div class="new">¥ {{ house.finalPrice }}</div>
        <div class="old">¥ {{ house.productPrice }}</div>
        <div class="tip" v-if="house.priceTipBadge">{{ house?.priceTipBadge.text }}</div>
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
    padding: 10px;
    font-size: 12px;

    .location {
      margin-bottom: 5px;
    }

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
      color: #666;
    }

    .price {
      display: flex;
      align-items: center;

      .new {
        color: var(--primary-color);
        font-size: 15px;
      }

      .old {
        padding: 0 10px;
        color: #999;
        font-size: 12px;
        text-decoration: line-through;
      }

      .tip {
        padding: 3px 7px;
        background-color: var(--primary-color);
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>
