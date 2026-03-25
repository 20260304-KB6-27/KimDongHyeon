<script setup>
import GlobalCssDemo from './components/GlobalCssDemo.vue';
import ScopedCssDemo from './components/ScopedCssDemo.vue';
import CssModuleDemo from './components/CssModuleDemo.vue';
</script>

<template>
  <div class="container">
    <h1>Vue CSS 스타일 방법</h1>
    <!-- 전역 CSS 적용 -->
    <GlobalCssDemo></GlobalCssDemo>

    <!-- Scoped CSS -->
    <ScopedCssDemo></ScopedCssDemo>

    <!-- CSS Module -->
    <CssModuleDemo></CssModuleDemo>
  </div>
</template>

<!-- 전역 -->
<!-- App.vue 의 <style> : 전역처럼 동작함 -->
<!-- main.css와 역할을 구분하기 위래 주로 앱의 레이아웃 구성 -->
<style>
.container {
  max-width: 600px;
  margin: 40px auto;
}
</style>
