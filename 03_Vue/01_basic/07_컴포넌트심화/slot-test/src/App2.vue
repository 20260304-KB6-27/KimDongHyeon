<template>
  <div class="card-row">
    <BaseCard>
      <template #header> 사용자 프로필 </template>
      <template #body>
        <p><strong>이름:</strong> 홍길동</p>
        <p>
          3월 25일 이전에 풀던 example 컴포넌트로 분리해서 만드는거 완성하세요:
        </p>
        <!-- <p><strong>직무:</strong> 프론트엔드개발자</p>
      <p><strong>경력:</strong> 3년</p> -->
      </template>

      <!-- <template #footer>
      <button>취소</button>
      <button>저장</button>s
    </template> -->
    </BaseCard>
  </div>
</template>

<script setup>
import BaseCard from './components/example2/BaseCard.vue';
</script>

<style scoped></style>
