<template>
  <div class="section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot>默认内容</slot>
    </div>
    <div class="footer" v-if="moreText">
      <span class="more">{{ moreText }}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '默认标题'
  },
  moreText: {
    type: String,
    default: ''
  }
})
</script>

<style lang="less" scoped>
.section {
  padding: 0 15px;
  margin-top: 12px;
  background-color: #fff;
  border-top: 5px solid #f2f3f4;

  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 20px;
      color: #333;
    }
  }

  .centent {
    padding: 8px 0;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 44px;
    line-height: 44px;
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
