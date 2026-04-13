<template>
  <H3>좋아요 갯수 : {{ likecounter.likecount }}</H3>
  <H3>좋아요 갯수 x 5 : {{ likecounter.fivetime }}</H3>
  <button @click="increment" style="margin: 0 10px 0 0">좋아요 누르기</button>
  <button @click="reset">리셋</button>
</template>

<script setup>
import { useLikePersistStore } from '@/stores/persist/persist_like';

const likecounter = useLikePersistStore();
const { increment, reset } = useLikePersistStore();
</script>

<style scoped></style>
