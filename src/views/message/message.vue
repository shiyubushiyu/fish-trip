<template>
  <div class="message">
    <div class="user">
      <img src="@/assets/img/logo.jpg" alt="">
      <span>小白🐏</span>
    </div>
    <div class="content">
      <van-button type="primary">退出登录</van-button>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.message {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .user {
    display: flex;
    align-items: center;
    padding: 30px 20px;
    background: linear-gradient(rgb(130, 130, 255), pink);

    img {
      width: 50px;
      border-radius: 50%;
    }

    span {
      padding: 0 20px;
      font-size: 18px;
      font-weight: 600;
    }
  }

  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
