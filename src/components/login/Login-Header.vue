<script setup lang="ts">
import type { CSSProperties } from 'vue'
import IconBrand from '../icons/IconBrand.vue'

const style: CSSProperties = {
  width: '167px',
  height: '45px',
  fill: '#e50914',
  verticalAlign: 'middle',
  lineHeight: '90px'
}
</script>

<template>
  <div class="header-container">
    <IconBrand :style="style" />
  </div>
</template>

<style scoped>
.header-container {
  border-bottom: transparent;
}
</style>
