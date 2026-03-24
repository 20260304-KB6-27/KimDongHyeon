<template>
  <h1>{{ postContent.title }}</h1>
  <div class="post-item">{{ postContent.content }}</div>
  <button @click="fixPost">수정</button>
  <button @click="deletePost">삭제</button>
  <button @click="closePost">닫기</button>
</template>

<script setup>
const emit = defineEmits(['close', 'delete', 'fix']);

const closePost = () => {
  emit('close');
};

const deletePost = () => {
  let result = confirm('정말로 삭제하시겠습니까?');

  if (result === true) emit('delete');
  else return;
};

const fixPost = () => {
  emit('fix');
};

const props = defineProps({
  postContent: Object,
});
</script>

<style lang="scss" scoped></style>
