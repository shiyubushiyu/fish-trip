<template>
  <div class="facility">
    <detail-section title="房屋设施" more-text="查看全部设施">
      <div class="facility-inner">
        <template v-for="(item, index) in houseFacility.houseFacilitys" :key="index">
          <div class="item" v-if="houseFacility?.facilitySort?.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="">
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <template v-for="(iten, indey) in item.facilitys.slice(0, 4)" :key="indey">
                <div class="iten">
                  <van-icon name="passed" color="#1989fa" />
                  <span>{{ iten.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { detailSection } from '@/components'
import { useDetailStore } from '@/stores'
import { storeToRefs } from 'pinia'
const detailStore = useDetailStore()

const { detailInfos } = storeToRefs(detailStore)

const houseFacility = computed(() => {
  const obj = detailInfos.value?.mainPart?.dynamicModule?.facilityModule?.houseFacility
  return obj || {}
})
</script>

<style lang="less" scoped>
.facility-inner {
  display: flex;
  flex-direction: column;
  background-color: #f4f5f6;
  border-radius: 6px;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .head {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30%;

      img {
        width: 25px;
      }

      .text {
        padding-top: 5px;
      }
    }

    .list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      .iten {
        width: 50%;
        padding: 3px 0;
        font-size: 13px;

        .van-icon {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
