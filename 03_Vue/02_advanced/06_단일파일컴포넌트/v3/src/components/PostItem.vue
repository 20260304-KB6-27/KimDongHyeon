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
      <div class="arrow" v-on:click="toggle(post.no)" style="cursor: pointer">
        {{ openedNo === post.no ? '▲' : '▼' }}
      </div>
    </div>

    <br />

    <div class="post-content" v-if="openedNo === post.no && post.no !== fixNo">
      <h1>{{ post.title }}</h1>
      <div class="post-item">{{ post.content }}</div>
      <button @click="fixPost(post)">수정</button>
      <button @click="deletePost(post.no)">삭제</button>
      <button @click="closePost(post.no)">닫기</button>
    </div>

    <div class="post-content" v-if="fixNo === post.no && openedNo === post.no">
      <input type="text" class="fixTitle" v-model.trim="fixPostTitle" />
      <textarea
        name="content"
        class="fixContnet"
        v-model.trim="fixPostContent"
      ></textarea
      ><br />
      <button @click="fixSave(post.no)">저장</button>
      <button @click="cancelFix">취소</button>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue';

const openedNo = ref(null);
const fixNo = ref(null);

const fixPostContent = ref('');
const fixPostTitle = ref('');

const toggle = (no) => {
  openedNo.value = openedNo.value === no ? null : no;
};

const closePost = (no) => {
  openedNo.value = openedNo.value === no ? null : no;
};

const fixPost = (post) => {
  fixNo.value = post.no;

  fixPostContent.value = post.content;
  fixPostTitle.value = post.title;
};

const cancelFix = () => {
  fixNo.value = null;
};

const emit = defineEmits('delete', 'fix');

const deletePost = (no) => {
  let result = confirm('정말로 삭제하시겠습니까?');

  if (result === true) emit('delete', no);
  else return;
};

const fixSave = (no) => {
  emit('fix', {
    no: no,
    content: fixPostContent.value,
    title: fixPostTitle.value,
  });

  fixNo.value = null;
};

const props = defineProps({
  post: Object,
});
</script>

<style lang="scss" scoped></style>
