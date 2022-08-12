import { ref, onMounted, onUnmounted } from "vue";
import { throttle } from "underscore";

/* 监听滚动底部 */
export function useScroll() {
  const isReachBottom = ref(false);
  const clientHeight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);
  /* 节流 */
  const scrollListenerHanler = throttle(() => {
    clientHeight.value = document.documentElement.clientHeight; // 当前窗口的高度
    scrollTop.value = document.documentElement.scrollTop; // 当前窗口顶部滚动的距离
    scrollHeight.value = document.documentElement.scrollHeight; // 当前窗口可以滚动的距离
    if (clientHeight.value + scrollTop.value >= scrollHeight.value - 40) {
      /* 距离底部40 */
      isReachBottom.value = true;
    }
  });

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHanler);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHanler);
  });

  return {
    isReachBottom,
    clientHeight,
    scrollTop,
    scrollHeight,
  };
}
