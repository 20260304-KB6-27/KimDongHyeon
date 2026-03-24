<template>
  <li @click="toggleCompleted(todoitem.id)">
    <span
      :style="{ textDecoration: todoitem.completed ? 'line-through' : 'none' }"
    >
      {{ todoitem.todo }} {{ todoitem.completed ? '[완료]' : '' }}
    </span>

    <!-- 삭제하기 -->
    <button @click="deleteTodo(todoitem.id)">삭제</button>
  </li>
</template>

<script setup>
const emit = defineEmits(['toggle', 'delete']);

const toggleCompleted = (id) => {
  emit('toggle', id);
};
const deleteTodo = (id) => {
  emit('delete', id);
};

const props = defineProps({
  todoitem: Object,
});
</script>

<style lang="scss" scoped></style>
