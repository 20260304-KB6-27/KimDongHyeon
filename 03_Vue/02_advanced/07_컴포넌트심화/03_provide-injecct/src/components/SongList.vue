<template>
  <ul>
    <SongListItem
      v-for="song in songs"
      :key="song.id"
      :song="song"
    ></SongListItem>
  </ul>

  <div>체크된 곡 수 : {{ doneCount }}</div>
</template>

<script setup>
import { inject } from 'vue';
import SongListItem from './SongListItem.vue';
const props = defineProps(['songs']);

// 반응형 값 (computed)을 전달받음
const doneCount = inject('doneCount');
</script>

<style scoped></style>
