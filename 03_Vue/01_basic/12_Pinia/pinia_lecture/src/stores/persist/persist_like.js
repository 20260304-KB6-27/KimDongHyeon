import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLikePersistStore = defineStore(
  'like-counter-persist',
  () => {
    // state
    const likecount = ref(0);

    // getter
    const fivetime = computed(() => likecount.value * 5);

    //actions
    function increment() {
      likecount.value++;
      sessionStorage.setItem('like-session', likecount.value);
    }

    function reset() {
      likecount.value = 0;
    }

    return { likecount, reset, increment, fivetime };
  },
  {
    persist: {
      key: 'like-p', // storage에 저장될 key 이름 (기본값 store ID)
      storage: sessionStorage, // 기본값 : local
      pick: ['likecount'], // 저장하고 싶은 상태값 지정 가능
    },
  },
);
