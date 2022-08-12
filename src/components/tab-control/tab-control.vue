<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="index">
      <div class="tab-control-item" :class="{ active: index === currentIndex }" @click="itemClick(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click', 'update:modelValue'])
const props = defineProps({
  titles: {
    type: Array,
    default: []
  },
  modelValue: {
    type: Number,
    required: true
  }
})

const currentIndex = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

function itemClick(index) {
  emit('click', index)
}
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #f2f3f4;

  .tab-control-item {
    flex: 1;
  }

  .active {
    color: var(--primary-color);

    span {
      border-bottom: 3px solid var(--primary-color);
    }
  }
}
</style>
