<template>
    <div class="row">
        <div class="col p-3">
            <h2>Edit Todo</h2>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="form-group">
                <!-- htmlfor : label이랑 input을 연결해주는 속성 -->
                <label htmlFor="todo">할일:</label>
                <input type="text" class="form-control" id="todo" v-model="editItem.todo" />
            </div>
            <div class="form-group">
                <label htmlFor="desc">설명:</label>
                <textarea class="form-control" rows="3" id="desc" v-model="editItem.desc"></textarea>
            </div>
            <div class="form-group">
                <button type="button" class="btn btn-primary m-1" @click="editTodoHandler">수정</button>
                <button type="button" class="btn btn-primary m-1" @click="router.push('/todos')">취소</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const { editTodo } = inject('actions');

const router = useRouter();
const route = useRoute();

const todoId = route.params.id;

const todoList = inject('todoList');

const todoItem = todoList.value.find((item) => item.id === todoId);

const editItem = reactive({ todo: todoItem.todo, desc: todoItem.desc });

const editTodoHandler = () => {
    editTodo({ id: todoId, ...editItem });

    // 목록화면으로 이동
    router.push('/todos');
};
</script>

<style scoped></style>
