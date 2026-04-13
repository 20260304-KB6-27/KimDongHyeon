<template>
  <h1>App</h1>
  <h2>App에서 보는 Counter : {{ counter.count }}</h2>
  <hr />
  <Counter />
  <h1>Like</h1>
  <hr />
  <h2>App에서 보는 Like : {{ likecounter.likecount }}</h2>
  <Like />
</template>

<script setup>
import { useCounterPersistStore } from '@/stores/persist/persist_counter';
import Counter from './components/Counter.vue';
import Like from './components/Like.vue';
import { useLikePersistStore } from './stores/persist/persist_like';

const counter = useCounterPersistStore();
const likecounter = useLikePersistStore();
</script>

<style scoped></style>
