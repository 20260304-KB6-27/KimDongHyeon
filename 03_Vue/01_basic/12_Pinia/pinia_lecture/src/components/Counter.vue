<template>
  <H3>반응형으로 꺼내기 : {{ counter.count }}</H3>
  <H3>값만 꺼내기 : {{ count }}</H3>
  <button @click="increment" style="margin: 0 10px 0 0">증가</button>
  <button @click="reset">리셋</button>
</template>

<script setup>
// import { useCounterStore } from '@/stores/counter';
import { useCounterPersistStore } from '@/stores/persist/persist_counter';

// state를 꺼낼 때는 구조분해 할당을 하게 되면, 반응형이 깨짐
const counter = useCounterPersistStore(); // 객체 자체를 꺼내서 쓰는 방식
const { count, increment, reset } = useCounterPersistStore(); // 구조분해할당으로 꺼내는 방식
</script>

<style scoped></style>
