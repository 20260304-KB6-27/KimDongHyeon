import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLikeStore = defineStore('like-counter', () => {
  // state
  // const likecount = ref(0);
  const likecount = ref(Number(sessionStorage.getItem('like-session') || 0));

  // getter
  // 여러 컴포넌트에서 사용하는(공유되는) 계산 값
  const fivetime = computed(() => likecount.value * 5);

  //actions
  function increment() {
    likecount.value++;

    /*
    sessionStorage
    - 현재 '탭'에서만 유지됨 ( 임시 데이터, 일회성 상태)
    */
    sessionStorage.setItem('like-session', likecount.value);
  }

  function reset() {
    likecount.value = 0;
  }

  return { likecount, reset, increment, fivetime };
});
