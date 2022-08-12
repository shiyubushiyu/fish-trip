<template>
  <div class="loading">
    <div class="bg">
      <img src="@/assets/img/loading.gif" alt="">
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .2);
  display: flex;
  justify-content: center;
  align-items: center;

  .bg {
    height: 70px;
    width: 70px;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    align-items: center;

    img {
      width: 70px;
    }
  }
}
</style>
