<template>
  <h2>2. 범위 CSS (Scoped)</h2>
  <div class="box">Scoped CSS가 적용된 박스입니다.</div>
</template>

<script setup></script>

<style scoped>
/* 
Scoped 속성
- 이 컴토넌트에만 스타일 적용
- Vue가 data-v-해시값 속성을 생성하여 적용
- 다른 컴토넌트의 같은 클래스명과 충돌 x
*/

.box {
  background-color: aqua;
  border: 2px solid blue;
}
</style>
