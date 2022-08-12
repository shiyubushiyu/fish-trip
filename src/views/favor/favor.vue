<template>
  <div class="favor">
    <van-nav-bar title="收藏" />
  </div>
</template>

<script setup>
import { useFavorStore } from '@/stores'

const favorStore = useFavorStore()

favorStore.fetchFavorList()
</script>

<style scoped>
</style>
