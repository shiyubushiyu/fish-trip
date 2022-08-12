<template>
  <div class="search">
    <van-nav-bar title="搜索" left-text="返回" left-arrow @click-left="onClickLeft" />
    没有做，嘿嘿嘿~~~~~~~~~~~~~
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
function onClickLeft() {
  router.back()
}
</script>

<style scoped>
</style>
