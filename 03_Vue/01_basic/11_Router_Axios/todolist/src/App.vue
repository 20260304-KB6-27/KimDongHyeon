<template>
    <div class="container">
        <Header></Header>
        <RouterView></RouterView>
    </div>
</template>

<script setup>
import Header from './components/Header.vue';
// import todoLists from '../db.json';
import { computed, onMounted, provide, reactive } from 'vue';
import axios from 'axios';

// axios로 todolist 조회하기
const BASEURI = '/api/todos';

// 1.todo List 조회하기
const state = reactive({
    todoLists: [],
});

const fetchTodoList = async () => {
    try {
        const response = await axios.get(BASEURI);

        if (response.status === 200) {
            console.log('response.data : ', response.data);

            state.todoLists = response.data;
        } else {
            alert('데이터 조회 실패');
        }
    } catch (e) {
        alert('에러발생 :  ' + e);
        console.log('err: ', e);
    }
};

// 토글 조작
const toggleDone = (id) => {
    let index = state.todoLists.findIndex((item) => item.id === id);

    // 완료상태 수정
    state.todoLists[index].done = !state.todoLists[index].done;
};

// 2. todo 추가하기
// const addTodo = ({ todo, desc }) => {
//   state.todoLists.push({ id: Date.now(), todo, desc, done: false });
// };

const addTodo = async ({ todo, desc }) => {
    try {
        const payload = { todo, desc };

        const response = await axios.post(BASEURI, payload);

        if (response.status === 201) {
            console.log('response.data : ', response.data);

            state.todoLists.push({ id: Date.now(), todo, desc, done: false });
        } else {
            alert('데이터 추가 실패');
        }
    } catch (e) {
        console.log(e);
    }
};

// 3. edit todo 추가
const editTodo = async ({ id, todo, desc }) => {
    try {
        const payload = { todo, desc };

        const response = await axios.put(`${BASEURI}/${id}`, payload);

        if (response.status === 200) {
            console.log('response.data: ', response.data);

            let index = state.todoLists.findIndex((item) => item.id === id);
            state.todoLists[index].todo = todo;
            state.todoLists[index].desc = desc;
        }
    } catch (e) {
        console.log(e);
    }
};

// todolist가 변경되면 inject한 컴포넌트도 재랜더링 되도록
provide(
    'todoList',
    computed(() => state.todoLists),
);

provide('actions', { toggleDone, addTodo, editTodo });

// DOM이 준비가 된 이후에 초기데이터를 준비
onMounted(() => {
    fetchTodoList(); // 데이터 준비용
});
</script>

<style scoped></style>
