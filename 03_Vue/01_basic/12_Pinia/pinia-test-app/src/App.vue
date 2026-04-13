<template>
  count : {{ store.count }}
  <br />
  doubleCount : {{ doubleCount }}
  <br />
  <button @click="increment">증가</button>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js';
import { computed } from 'vue';

// const { count, doubleCount, increment } = useCounterStore();
// 위 코드와 같이 구조분해할당을 하면 상태 데이터는 값이 복사되어 반응성을 잃어버림
// but, increment 약션 함수는 정상 작동
// 아래와 같이 수정할 수 있음

const store = useCounterStore();
const doubleCount = computed(() => store.doubleCount);
const { increment } = useCounterStore(); // 액션 함수만 분해할당

// const store = useCounterStore();
// console.log(store);
// console.log(store.count);
// store.count = 10;
</script>

<style scoped></style>
