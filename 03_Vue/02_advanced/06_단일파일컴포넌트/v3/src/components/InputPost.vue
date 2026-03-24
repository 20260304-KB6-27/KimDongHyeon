<template>
  <input type="text" v-model.trim="postTitle" placeholder="새 게시글 제목" />
  <input type="text" v-model.trim="postContent" placeholder="새 게시글 내용" />
  <button @click="addPost">작성</button>
</template>

<script setup>
import { ref } from 'vue';

const postTitle = ref('');
const postContent = ref('');

const emit = defineEmits(['add']);

const addPost = () => {
  if (postContent.value === '' || postTitle.value === '') return;

  emit('add', {
    title: postTitle.value,
    content: postContent.value,
  });

  postTitle.value = '';
  postContent.value = '';
};
</script>

<style lang="scss" scoped></style>
