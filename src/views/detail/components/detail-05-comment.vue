<template>
  <div class="comment">
    <detail-section title="热门评论" more-text="查看全部100条评论">
      <div class="comment-inner">
        <div class="left">
          <div class="score">
            <div class="text">{{ comment.overall }}</div>
          </div>
          <div class="info">
            <div class="title">{{ comment.scoreTitle }}</div>
            <div class="count">{{ comment.totalCount }}条评论</div>
            <div class="star">
              <van-rate v-model="comment.overall" color="#ff9645" size="12"></van-rate>
            </div>
          </div>
        </div>
        <div class="right">
          <template v-for="(item, index) in comment.subScores" :key="index">
            <span class="item">{{ item }}</span>
          </template>
        </div>
      </div>
      <div class="content">
        <template v-for="(item, index) in comment.commentTagVo" :key="index">
          <div class="content-item" :style="{ color: item.color, backgroundColor: item.backgroundColor }">{{ item.text
          }}</div>
        </template>
      </div>
      <div class="comment-etail">
        <div class="user">
          <div class="avatar">
            <img :src="comment?.comment?.userAvatars" alt="">
          </div>
          <div class="profile">
            <div class="name">{{ comment?.comment?.userName }}</div>
            <div class="date">{{ comment?.comment?.checkInDate }}</div>
          </div>
        </div>
        <div class="text">{{ comment?.comment?.commentDetail }}</div>
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

const comment = computed(() => {
  const obj = detailInfos.value?.mainPart?.dynamicModule?.commentModule
  return obj || {}
})
</script>

<style lang="less" scoped>
.comment {

  .comment-inner {
    display: flex;
    padding: 10px 0;

    .left {
      display: flex;

      .score {
        width: 65px;
        height: 100%;
        color: #333;
        position: relative;
        font-weight: 600;
        // top: 20px;

        .text {
          font-size: 48px;
          position: relative;
          z-index: 9;
        }
      }

      .info {
        width: 110px;
        margin-left: 19px;
        font-size: 12px;
        color: #333;

        .count {
          margin: 3px 0;
          color: #999;
        }
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-wrap: wrap;

      .item {
        margin-right: 2px;
        border-radius: 8px;
        font-size: 12px;
      }
    }
  }

  .content {
    display: flex;
    flex-wrap: wrap;

    .content-item {
      padding: 4px 8px;
      margin-right: 5px;
      border-radius: 6px;
      font-size: 13px;
      margin-bottom: 5px;
    }
  }

  .comment-etail {
    .user {
      display: flex;
      align-items: center;
      padding-bottom: 10px;

      .avatar {
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;

        img {
          width: 40px;
        }
      }

      .profile {

        .name {
          font-size: 14px;
          color: #000;
          font-weight: 500;
        }

        .date {
          font-size: 13px;
          color: #999;
        }
      }
    }

    .text {
      line-height: 20px;
      font-size: 13px;
      color: #000;
    }
  }
}
</style>
