<template>
  <ul>
    <TodoListItem
      v-for="todoitem in todolist"
      :key="todoitem.id"
      :todoitem="todoitem"
      @toggle="toggleCompleted"
      @delete="deleteTodo"
    ></TodoListItem>
  </ul>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

const emit = defineEmits(['toggle', 'delete']);

const toggleCompleted = (id) => {
  emit('toggle', id);
};

const deleteTodo = (id) => {
  emit('delete', id);
};

const props = defineProps({
  todolist: Array,
});
</script>

<style lang="scss" scoped></style>
