<template>
  <PostItem
    v-for="post in posts"
    :key="post.no"
    :post="post"
    @delete="deletePost"
    @fix="fixedPost"
  ></PostItem>
</template>

<script setup>
import PostItem from './PostItem.vue';

const props = defineProps({
  posts: Array,
});

const emit = defineEmits(['delete', 'fix']);

const deletePost = (no) => {
  emit('delete', no);
};

const fixedPost = (fixPost) => {
  emit('fix', fixPost);
};
</script>

<style lang="scss" scoped></style>
