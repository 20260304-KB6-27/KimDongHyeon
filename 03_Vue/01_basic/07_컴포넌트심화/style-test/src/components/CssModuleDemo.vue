<template>
  <h2>3. CSS Module</h2>
  <!-- CSS 모듈은 객체처럼 사용 -->
  <div :class="style.box">Css Module이 적용된 박스입니다.</div>

  <div>style: {{ style }}</div>
</template>

<script setup>
import { useCssModule } from 'vue';

// composition 방식 -> useCssModule()로 $style 객체를 꺼내옴
const style = useCssModule();
</script>

<style module>
/* 
module
- CSS 모듈은 클래스명 자체를 고유하게 바꾼다
*/
.box {
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: greenyellow;
  border: 2px solid green;
}
</style>
