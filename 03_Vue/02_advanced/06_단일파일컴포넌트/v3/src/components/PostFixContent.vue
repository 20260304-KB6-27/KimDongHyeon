<template>
  <input type="text" class="fixTitle" v-model.trim="fixPostTitle" />
  <textarea
    name="content"
    class="fixContnet"
    v-model.trim="fixPostContent"
  ></textarea
  ><br />
  <button @click="fixSave(fixingPost)">저장</button>
  <button @click="cancelFix">취소</button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  fixingPost: Object,
});

const fixPostTitle = ref(props.fixingPost?.title?.trim() || '');
const fixPostContent = ref(props.fixingPost?.content?.trim() || '');

const emit = defineEmits(['cancel-fix', 'save-fix']);

const cancelFix = () => {
  emit('cancel-fix');
};

const fixSave = () => {
  emit('save-fix', {
    content: fixPostContent.value,
    title: fixPostTitle.value,
  });
};
</script>

<style lang="scss" scoped></style>
