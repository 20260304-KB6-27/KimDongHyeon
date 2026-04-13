# Vue 3 모듈 테스트 예제

> 총 36문제 | 각 문제 옆 유형 표시 참고  
> 정답은 파일 맨 아래 **[정답지]** 섹션에 수록

---

## 1단원. ES6 문법

**[Q1] 객관식** — 아래 코드의 출력 결과로 올바른 것은?

```javascript
{
    let x = 10;
    const y = 20;
}
console.log(x);
```

① `10`  
② `20`  
③ `undefined`  
④ `ReferenceError`

---

**[Q2] 빈칸 채우기** — 다음 구조분해 할당 코드를 완성하세요.

```javascript
const user = { name: '홍길동', age: 25, role: 'admin' };

// name과 role만 추출하고 나머지는 rest에 담으세요
const { name, __________, ...rest } = user;

console.log(name); // '홍길동'
console.log(role); // 'admin'
console.log(rest); // { age: 25 }
```

---

**[Q3] OX** — 다음 설명이 옳으면 O, 틀리면 X로 답하세요.

```javascript
// (가)
const arr = [1, 2, 3];
arr.push(4); // 오류 없이 실행된다

// (나)
const num = 10;
num = 20; // 오류 없이 실행된다
```

① (가): **_  
② (나): _**

---

## 2단원. Script Setup / 기본 템플릿 문법

**[Q4] 객관식** — Vue 3에서 `ref()`로 생성한 반응형 변수를 스크립트 안에서 값을 읽거나 변경할 때 올바른 방법은?

```javascript
const count = ref(0);
```

① `count = 1`  
② `count.value = 1`  
③ `count.set(1)`  
④ `count().value = 1`

---

**[Q5] 코드 오류 찾기** — 아래 컴포넌트에서 버그를 찾고 수정하세요.

```vue
<template>
    <p>{{ message }}</p>
    <button @click="changeMessage">변경</button>
</template>

<script setup>
let message = 'Hello Vue!';

const changeMessage = () => {
    message = 'Hi!';
};
</script>
```

> 버그: ********************\_\_\_********************  
> 수정: ********************\_\_\_********************

---

**[Q6] 빈칸 채우기** — 빈칸을 채워 `v-for` 리스트를 완성하세요.

```vue
<template>
    <ul>
        <li ____________="item in items" ____________="item.id">
            {{ item.name }}
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
const items = ref([
    { id: 1, name: '사과' },
    { id: 2, name: '바나나' },
]);
</script>
```

---

**[Q7] 객관식** — `v-model`을 직접 구현한 것과 동일한 표현은?

```vue
<input v-model="text" />
```

① `<input :value="text" />`  
② `<input @input="text = $event.target.value" :value="text" />`  
③ `<input @change="text = $event" />`  
④ `<input :text="text" @update="text = $event" />`

---

## 3단원. Props & Emit

**[Q8] 빈칸 채우기** — 자식 컴포넌트에서 Props를 타입 검증과 함께 정의하세요.

```vue
<!-- ChildComponent.vue -->
<script setup>
____________({
    title: {
        type: ____________,
        required: ____________,
    },
    count: {
        type: ____________,
        default: ____________,
    },
});
</script>
```

> title: 문자열, 필수 / count: 숫자, 기본값 0

---

**[Q9] OX** — 다음 설명이 옳으면 O, 틀리면 X로 답하세요.

① Props는 부모 → 자식 방향으로만 데이터가 흐른다. (　　)  
② 자식 컴포넌트에서 Props 객체를 직접 수정하는 것이 권장된다. (　　)  
③ `defineEmits`는 자식이 부모에게 이벤트를 전달할 때 사용한다. (　　)

---

**[Q10] 코드 완성** — 자식이 입력값을 부모에게 전달하는 코드를 완성하세요.

```vue
<!-- InputName.vue (자식) -->
<template>
    <input v-model="name" @keyup.enter="sendName" />
</template>

<script setup>
import { ref } from 'vue';
const name = ref('');

const emit = ____________(['name-change']);

const sendName = () => {
    ____________('name-change', { name: name.value });
};
</script>
```

```vue
<!-- App.vue (부모) -->
<template>
    <InputName ____________="handleNameChange" />
    <p>입력된 이름: {{ parentName }}</p>
</template>

<script setup>
import { ref } from 'vue';
import InputName from './InputName.vue';

const parentName = ref('');
const handleNameChange = (payload) => {
    parentName.value = ____________;
};
</script>
```

---

**[Q11] 객관식** — Props 유효성 검사에서 `validator` 함수를 사용하는 경우는?

```javascript
defineProps({
    status: {
        type: String,
        validator: (value) => ['pending', 'active', 'inactive'].includes(value),
    },
});
```

① `status`가 문자열인지 확인한다  
② `status`가 특정 값들 중 하나인지 확인한다  
③ `status`가 필수 값인지 확인한다  
④ `status`의 기본값을 설정한다

---

## 4단원. Slot

**[Q12] 빈칸 채우기** — 기본 슬롯을 사용하는 컴포넌트를 완성하세요.

```vue
<!-- MyCard.vue (자식) -->
<template>
  <div class="card">
    <____________>카드 기본 내용</____________>
  </div>
</template>
```

```vue
<!-- App.vue (부모) -->
<template>
    <MyCard>
        <p>부모에서 전달한 내용</p>
    </MyCard>
</template>
```

---

**[Q13] 코드 완성** — Named Slot을 사용해 카드 레이아웃을 완성하세요.

```vue
<!-- BaseCard.vue -->
<template>
    <div class="card">
        <div class="header">
            <slot ____________="____________"></slot>
        </div>
        <div class="body">
            <slot ____________="____________"></slot>
        </div>
    </div>
</template>
```

```vue
<!-- App.vue -->
<template>
    <BaseCard>
        <template ____________="____________">
            <h2>카드 제목</h2>
        </template>
        <template ____________="____________">
            <p>카드 본문 내용</p>
        </template>
    </BaseCard>
</template>
```

---

**[Q14] OX** — Slot에 대한 설명이 옳으면 O, 틀리면 X로 답하세요.

① `<slot>` 태그 안에 내용을 넣으면 부모가 슬롯을 채우지 않았을 때 표시되는 기본값이 된다. (　　)  
② Named Slot은 `#슬롯명` 또는 `v-slot:슬롯명` 으로 접근한다. (　　)  
③ 하나의 컴포넌트에 Named Slot은 최대 2개까지만 정의할 수 있다. (　　)

---

## 5단원. CSS Scoped & Module

**[Q15] 객관식** — `<style scoped>`를 사용했을 때의 동작 설명으로 올바른 것은?

① 해당 스타일이 전역으로 적용된다  
② Vue가 고유한 `data-v-해시값` 속성을 자동으로 추가해 컴포넌트 내에서만 스타일이 적용된다  
③ CSS 클래스명이 자동으로 변환된다  
④ 자식 컴포넌트에도 스타일이 상속된다

---

**[Q16] 빈칸 채우기** — CSS Module 사용법을 완성하세요.

```vue
<template>
    <div :class="____________.box">모듈 스타일 적용</div>
</template>

<script setup>
import { ____________ } from 'vue';
const style = ____________();
</script>

<style ____________>
.box {
    background-color: skyblue;
    padding: 10px;
}
</style>
```

---

## 6단원. Composition API

**[Q17] 객관식** — `ref()`와 `reactive()`의 차이로 올바른 것은?

① `ref()`는 객체에만 사용하고, `reactive()`는 모든 타입에 사용한다  
② `reactive()`는 `.value`로 접근하고, `ref()`는 직접 접근한다  
③ `ref()`는 모든 타입에 사용 가능하고, `reactive()`는 객체/배열에만 사용한다  
④ 두 함수의 차이는 없다

---

**[Q18] 코드 오류 찾기** — 아래 코드에서 반응성이 깨지는 문제를 찾고 수정하세요.

```javascript
import { reactive, toRefs } from 'vue';

const state = reactive({ x: 0, y: 0 });

// 구조분해 할당으로 템플릿에서 사용하려 함
const { x, y } = state;
```

> 문제: ********************\_\_\_********************  
> 수정: ********************\_\_\_********************

---

**[Q19] 빈칸 채우기** — `computed`를 사용해 필터링된 리스트를 만드세요.

```javascript
import { ref, computed } from 'vue';

const todos = ref([
    { id: 1, text: 'Vue 학습', done: true },
    { id: 2, text: 'React 학습', done: false },
    { id: 3, text: 'Pinia 학습', done: true },
]);

// done이 true인 항목만 반환하는 computed
const doneTodos = ____________(() => {
    return todos.value.____________((todo) => todo.____________ === true);
});
```

---

**[Q20] 빈칸 채우기** — `watch`를 사용해 검색어 변경 시 API를 호출하는 코드를 완성하세요.

```javascript
import { ref, watch } from 'vue';

const keyword = ref('');

____________(____________, (newVal, oldVal) => {
    console.log(`검색어 변경: ${oldVal} → ${newVal}`);
    fetchData(newVal);
});
```

---

**[Q21] 객관식** — `computed()`의 특성으로 올바른 것은?

① 의존하는 반응형 데이터가 바뀔 때마다 항상 함수가 재실행된다  
② 의존 데이터가 변경되지 않으면 캐시된 값을 반환한다  
③ `computed`는 비동기 함수로 사용해야 한다  
④ `watch`와 동일한 역할을 한다

---

## 7단원. Vue Router

**[Q22] 빈칸 채우기** — 라우터 설정을 완성하세요.

```javascript
import { createRouter, ____________ } from 'vue-router';
import Home from '@/pages/Home.vue';

const router = ____________({
    history: ____________(),
    routes: [
        { path: '/', name: 'home', component: Home },
        {
            path: '/members/:id',
            name: 'members/id',
            component: () => ____________('@/pages/MemberInfo.vue'),
        },
    ],
});

export default router;
```

---

**[Q23] 객관식** — `useRoute()`와 `useRouter()`의 차이로 올바른 것은?

① `useRoute()`는 라우터를 조작하고, `useRouter()`는 현재 라우트 정보를 읽는다  
② `useRoute()`는 현재 라우트 정보(params, query 등)를 읽고, `useRouter()`는 페이지 이동 등 라우터 조작을 한다  
③ 두 함수는 같은 기능을 한다  
④ `useRouter()`는 컴포넌트 외부에서만 사용한다

---

**[Q24] 코드 완성** — 현재 URL의 `id` params를 읽고 페이지를 이동하는 코드를 완성하세요.

```vue
<script setup>
import { ____________, ____________ } from 'vue-router';

const route = ____________();
const router = ____________();

// URL /members/42 일 때 id 값 읽기
const memberId = Number(route.____________.id);

// /home으로 이동
const goHome = () => {
    router.____________('/');
};
</script>
```

---

**[Q25] 빈칸 채우기** — 중첩 라우트(Nested Route)를 설정하세요.

```javascript
{
  path: '/members-nested',
  component: () => import('@/pages/MembersLayout.vue'),
  ____________: [
    {
      path: '',          // /members-nested
      name: 'members-nested',
      component: () => import('@/pages/MemberDefault.vue')
    },
    {
      path: ':id',       // /members-nested/42
      name: 'members-nested/detail',
      component: () => import('@/pages/MemberDetail.vue')
    }
  ]
}
```

> 중첩 라우트의 자식 컴포넌트는 부모 레이아웃의 `<____________ />` 위치에 렌더링된다.

---

**[Q26] 코드 완성** — 특정 라우트로의 직접 URL 접근을 막는 Navigation Guard를 완성하세요.

```javascript
// /members에서 온 경우만 상세 페이지 접근 허용
const membersGuard = (to, from) => {
  if (from.____________ !== 'members') {
    return ____________; // 접근 거부
  }
};

{
  path: '/members/:id',
  component: () => import('@/pages/MemberInfo.vue'),
  ____________: membersGuard
}
```

---

## 8단원. Axios

**[Q27] 객관식** — Axios와 Fetch API의 차이로 올바른 것은?

① Fetch API는 자동으로 JSON 파싱을 해주지만, Axios는 수동으로 해야 한다  
② Axios는 응답 데이터가 `response.data`에 있고, Fetch는 `response.json()`을 추가 호출해야 한다  
③ Axios는 브라우저에서 사용할 수 없다  
④ 두 API의 차이는 없다

---

**[Q28] 빈칸 채우기** — Axios 인스턴스를 생성하고 사용하는 코드를 완성하세요.

```javascript
// src/util/axios.js
import axios from 'axios';

const instance = axios.____________({
    ____________: 'http://localhost:3000/api/',
    headers: {
        Authorization: 'Bearer mytoken123',
    },
});

export default instance;
```

```vue
<!-- 컴포넌트에서 사용 -->
<script setup>
import axios from '@/util/axios';

const fetchData = async () => {
    try {
        const response = await axios.____________('/todos');
        console.log(response.____________);
    } catch (e) {
        alert('에러: ' + e);
    }
};
</script>
```

---

**[Q29] 코드 오류 찾기** — 아래 async/await 코드에서 문제점을 찾으세요.

```javascript
const fetchTodos = async () => {
    const response = await axios.get('/todos');
    todoList.value = response.data;
};

fetchTodos();
console.log(todoList.value); // 여기서 데이터를 기대함
```

> 문제: ********************\_\_\_********************

---

## 9단원. Provide / Inject & Composable

**[Q30] 빈칸 채우기** — Provide/Inject 패턴을 완성하세요.

```vue
<!-- App.vue (조상 컴포넌트) -->
<script setup>
import { ref, ____________ } from 'vue';

const count = ref(0);
const increment = () => count.value++;

// 자식에게 데이터 제공
____________('count', count);
____________('actions', { increment });
</script>
```

```vue
<!-- DeepChild.vue (깊은 자식 컴포넌트) -->
<script setup>
import { ____________ } from 'vue';

// 조상에서 주입받기
const count = ____________('count');
const { increment } = ____________('actions');
</script>
```

---

**[Q31] 객관식** — Composable 함수의 특징으로 올바른 것은?

① 반드시 컴포넌트 내부에 정의해야 한다  
② 상태 로직을 재사용 가능한 함수로 추출하여 여러 컴포넌트에서 사용할 수 있다  
③ 반환값은 항상 단일 값이어야 한다  
④ Pinia를 대체하는 전역 상태 관리 도구다

---

**[Q32] 코드 완성** — API 호출 로직을 Composable로 분리하세요.

```javascript
// src/api/useStudent.js
import { ref } from 'vue';
import axios from '@/util/axios';

export const ____________ = () => {
    const students = ____________([]);

    const fetchAllStudents = async () => {
        try {
            const response = await axios.____________('/students');
            students.____________ = response.data;
        } catch (e) {
            console.log('에러:', e);
        }
    };

    return { students, ____________ };
};
```

```vue
<!-- StudentList.vue -->
<script setup>
import { ____________ } from '@/api/useStudent';
import { onMounted } from 'vue';

const { students, fetchAllStudents } = ____________();

onMounted(() => {
    fetchAllStudents();
});
</script>
```

---

## 10단원. Pinia

**[Q33] 빈칸 채우기** — Pinia 스토어를 Composition API 스타일로 정의하세요.

```javascript
import { ref, computed } from 'vue';
import { ____________ } from 'pinia';

export const useCounterStore = ____________('counter', () => {
    // State
    const count = ____________(0);

    // Getter
    const doubleCount = ____________(() => count.value * 2);

    // Action
    function increment() {
        ____________.value++;
    }

    return { count, doubleCount, increment };
});
```

---

**[Q34] 코드 오류 찾기** — Pinia 스토어 사용 시 발생하는 반응성 문제를 찾고 수정하세요.

```vue
<template>
    <p>카운트: {{ count }}</p>
    <button @click="increment">+1</button>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';

// 문제가 있는 코드
const { count, increment } = useCounterStore();
</script>
```

> 문제: ********************\_\_\_********************  
> 수정: ********************\_\_\_********************

---

**[Q35] 빈칸 채우기** — `pinia-plugin-persistedstate`로 스토어를 자동 저장하는 설정을 완성하세요.

```javascript
// main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ____________ from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.____________(____________);

createApp(App).use(pinia).mount('#app');
```

```javascript
// stores/counter.js
export const useCounterStore = defineStore(
    'counter',
    () => {
        const count = ref(0);
        return { count };
    },
    {
        ____________: {
            key: 'my-counter',
            storage: ____________, // 세션 스토리지에 저장
            pick: ['____________'], // count만 저장
        },
    },
);
```

---

**[Q36] 서술형** — 다음 세 가지 방법의 차이를 설명하세요.

```javascript
// 방법 A
const count = ref(Number(localStorage.getItem('count') || 0));

// 방법 B
const store = defineStore(
    'counter',
    () => {
        const count = ref(0);
        return { count };
    },
    { persist: true },
);

// 방법 C
const store = defineStore(
    'counter',
    () => {
        const count = ref(0);
        return { count };
    },
    { persist: { storage: sessionStorage } },
);
```

① 방법 A의 특징:  
② 방법 B의 특징:  
③ 방법 C의 특징:

---

---

# [정답지]

> 아래를 보기 전에 먼저 문제를 풀어보세요!

---

## 1단원. ES6 문법

**[Q1]** ④ `ReferenceError`  
→ `let`은 블록 스코프이므로 `{}` 밖에서 접근하면 ReferenceError 발생

**[Q2]** `role`

```javascript
const { name, role, ...rest } = user;
```

**[Q3]**  
① (가): O — `const` 배열은 재할당은 불가하지만 요소 추가/변경은 가능  
② (나): X — `const` 변수에 재할당하면 TypeError 발생

---

## 2단원. Script Setup / 기본 템플릿 문법

**[Q4]** ② `count.value = 1`  
→ `ref()`로 생성한 변수는 스크립트에서 `.value`로 접근

**[Q5]**

- 버그: `message`가 일반 변수(`let`)이므로 변경해도 화면이 업데이트되지 않음
- 수정: `const message = ref('Hello Vue!')` 로 선언하고, `message.value = 'Hi!'`로 변경

**[Q6]**

```vue
<li v-for="item in items" :key="item.id">
```

→ `v-for`, `:key`

**[Q7]** ②  
→ `v-model`은 `:value`(바인딩)와 `@input`(이벤트)의 단축 표현

---

## 3단원. Props & Emit

**[Q8]**

```javascript
defineProps({
    title: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        default: 0,
    },
});
```

**[Q9]**  
① O  
② X — Props는 읽기 전용이며, 직접 수정하면 안 됨 (단방향 데이터 흐름 원칙)  
③ O

**[Q10]**

```javascript
// 자식
const emit = defineEmits(['name-change']);
emit('name-change', { name: name.value });
```

```vue
<!-- 부모 -->
<InputName @name-change="handleNameChange" />
parentName.value = payload.name;
```

**[Q11]** ②  
→ `validator` 함수는 값이 허용된 범위 내에 있는지 검사

---

## 4단원. Slot

**[Q12]**

```vue
<slot>카드 기본 내용</slot>
```

**[Q13]**

```vue
<!-- BaseCard.vue -->
<slot name="header"></slot>
<slot name="body"></slot>

<!-- App.vue -->
<template #header>
    또는
    <template v-slot:header>
        <template #body> 또는 <template v-slot:body></template></template
    ></template>
</template>
```

**[Q14]**  
① O  
② O — `#슬롯명`은 `v-slot:슬롯명`의 단축 문법  
③ X — Named Slot 개수 제한 없음

---

## 5단원. CSS Scoped & Module

**[Q15]** ②  
→ Vue는 Scoped CSS에 `data-v-해시값` 속성 선택자를 자동으로 추가해 격리

**[Q16]**

```vue
<div :class="style.box">
import { useCssModule } from 'vue';
const style = useCssModule();
<style module>
```

---

## 6단원. Composition API

**[Q17]** ③  
→ `ref()`는 모든 타입(원시값 포함), `reactive()`는 객체/배열만 사용 가능

**[Q18]**

- 문제: `reactive()` 객체를 구조분해 할당하면 반응성이 사라짐
- 수정: `const { x, y } = toRefs(state)` — `toRefs()`로 감싸야 반응성 유지

**[Q19]**

```javascript
const doneTodos = computed(() => {
    return todos.value.filter((todo) => todo.done === true);
});
```

**[Q20]**

```javascript
watch(keyword, (newVal, oldVal) => {
    console.log(`검색어 변경: ${oldVal} → ${newVal}`);
    fetchData(newVal);
});
```

**[Q21]** ②  
→ `computed()`는 의존 데이터가 변경되지 않으면 캐시된 값을 반환 (성능 최적화)

---

## 7단원. Vue Router

**[Q22]**

```javascript
import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { ... },
    {
      path: '/members/:id',
      component: () => import('@/pages/MemberInfo.vue')
    }
  ]
});
```

**[Q23]** ②  
→ `useRoute()` = 현재 라우트 정보 읽기 / `useRouter()` = 라우터 조작(이동 등)

**[Q24]**

```javascript
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
const memberId = Number(route.params.id);
router.push('/');
```

**[Q25]**

- `children` 키워드 사용
- 자식 컴포넌트는 부모 레이아웃의 `<RouterView />` 위치에 렌더링

**[Q26]**

```javascript
const membersGuard = (to, from) => {
    if (from.name !== 'members') {
        return false;
    }
};

{
    beforeEnter: membersGuard;
}
```

---

## 8단원. Axios

**[Q27]** ②  
→ Axios: `response.data` / Fetch: `response.json()` 호출 필요

**[Q28]**

```javascript
const instance = axios.create({
  baseURL: 'http://localhost:3000/api/',
  ...
});

const response = await axios.get('/todos');
console.log(response.data);
```

**[Q29]**

- 문제: `fetchTodos()`는 비동기 함수이므로 `console.log` 실행 시점에 데이터가 아직 로드되지 않았음
- 해결: `await fetchTodos()`를 사용하거나 `onMounted` 내에서 데이터 로드 후 처리

---

## 9단원. Provide / Inject & Composable

**[Q30]**

```javascript
// App.vue
import { ref, provide } from 'vue';
provide('count', count);
provide('actions', { increment });

// DeepChild.vue
import { inject } from 'vue';
const count = inject('count');
const { increment } = inject('actions');
```

**[Q31]** ②  
→ Composable은 재사용 가능한 상태 로직을 함수로 추출한 패턴 (Vue 3 권장 방식)

**[Q32]**

```javascript
// useStudent.js
export const useStudent = () => {
    const students = ref([]);
    const fetchAllStudents = async () => {
        const response = await axios.get('/students');
        students.value = response.data;
    };
    return { students, fetchAllStudents };
};

// StudentList.vue
import { useStudent } from '@/api/useStudent';
const { students, fetchAllStudents } = useStudent();
```

---

## 10단원. Pinia

**[Q33]**

```javascript
import { defineStore } from 'pinia';
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
        count.value++;
    }
    return { count, doubleCount, increment };
});
```

**[Q34]**

- 문제: Pinia 스토어를 구조분해 할당하면 `count`의 반응성이 끊어져 화면이 업데이트되지 않음
- 수정 방법 1: `const counter = useCounterStore()` 후 `counter.count`, `counter.increment()` 사용
- 수정 방법 2: `const { count, increment } = storeToRefs(useCounterStore())` 사용 (action은 일반 구조분해)

**[Q35]**

```javascript
// main.js
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
pinia.use(piniaPluginPersistedstate);

// stores/counter.js
{
  persist: {
    key: 'my-counter',
    storage: sessionStorage,
    pick: ['count']
  }
}
```

**[Q36]**  
① **방법 A**: 수동으로 `localStorage`를 읽어 초기값 설정. 저장/복원을 직접 코드로 관리해야 함. 변경 시 `localStorage.setItem()`을 별도로 호출해야 함  
② **방법 B**: `persist: true`로 `pinia-plugin-persistedstate`가 자동으로 `localStorage`에 저장/복원. 가장 편리한 방식  
③ **방법 C**: `sessionStorage`를 사용해 탭/브라우저가 닫히면 데이터가 사라짐. 임시 데이터(장바구니, 세션 등)에 적합
