<template>
  <li>
    <div
      style="
        display: flex;
        justify-content: space-between;
        text-align: center;
        align-items: center;
      "
    >
      <h2>{{ post.no }}. {{ post.title }}</h2>
      <div class="arrow" v-on:click="toggle" style="cursor: pointer">
        {{ opened ? '▲' : '▼' }}
      </div>
    </div>

    <br />
    <div v-if="opened">
      <div class="post-content" v-if="!fixing">
        <PostContent
          :postContent="post"
          @close="toggle"
          @delete="deletePost(post.no)"
          @fix="fixPost"
        />
      </div>

      <div class="post-content" v-else-if="fixing">
        <PostFixContent
          :fixingPost="post"
          @cancel-fix="fixPost"
          @save-fix="fixSave($event, post.no)"
        />
      </div>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue';
import PostContent from './PostContent.vue';
import PostFixContent from './PostFixContent.vue';

const opened = ref(false);
const fixing = ref(false);

const toggle = () => {
  opened.value = !opened.value;
};

const fixPost = () => {
  fixing.value = !fixing.value;
};

const emit = defineEmits('delete', 'fix');

const deletePost = (no) => {
  emit('delete', no);
};

const fixSave = (data, no) => {
  emit('fix', {
    no: no,
    content: data.content,
    title: data.title,
  });

  fixing.value = false;
};

const props = defineProps({
  post: Object,
});
</script>

<style lang="scss" scoped></style>
