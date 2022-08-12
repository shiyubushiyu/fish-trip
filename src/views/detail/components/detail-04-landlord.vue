<template>
  <div class="landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="intro">
        <div class="top">
          <img :src="landlord.topScroll" alt="">
        </div>
        <div class="header">
          <div class="left">
            <div class="avatar">
              <img :src="landlord.hotelLogo" alt="">
            </div>
            <div class="info">
              <div class="name">{{ landlord.hotelName }}</div>
              <div class="tags">
                <template v-for="(item, index) in landlord.hotelTags" :key="index">
                  <div class="item" :style="{ color: item.tagText.color }">
                    <span>{{ item.tagText.text }}</span>
                    <span v-if="index !== landlord.hotelTags.length - 1" class="divider">|</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="btn">联系房东</div>
          </div>
        </div>
        <div class="bottom">
          <template v-for="(item, index) in landlord.hotelSummary" :key="index">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="score"> {{ item.introduction }}</div>
              <div class="desc">{{ item.tip }}</div>
            </div>
          </template>
        </div>
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

const landlord = computed(() => {
  const obj = detailInfos.value?.mainPart?.dynamicModule?.landlordModule
  return obj || {}
})
</script>

<style lang="less" scoped>
.landlord {
  .intro {

    .top {
      img {
        width: 100%;
      }
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;

      .left {
        flex: 1;
        display: flex;
        align-items: center;

        .avatar {
          img {
            width: 70px;
          }
        }

        .info {
          width: 100%;
          display: flex;
          flex-direction: column;

          .name {
            font-size: 15px;
            font-weight: 500;
          }

          .tags {
            padding: 4px 0;
            display: flex;
            flex-wrap: wrap;
            font-size: 13px;
          }
        }
      }

      .right {
        .btn {
          width: 70px;
          height: 30px;
          background-color: var(--primary-color);
          line-height: 30px;
          text-align: center;
          font-size: 13px;
          color: #fff;
          border-radius: 5px;
        }
      }

    }

    .bottom {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #333;
      margin: 10px 0;

      .score {
        padding: 4px 0;
        font-size: 15px;
        color: #000;
        font-weight: 500;
      }
    }
  }
}
</style>
