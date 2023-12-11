<script setup lang="ts">
import { ref } from 'vue'
import TextInput from '../base/Input/TextInput.vue'
const errorMessage = ref<string>('')
const inputValue = ref<string>('')
</script>

<template>
  <TextInput
    label-text="Email or phone number"
    :error-message="errorMessage"
    v-model:input-value="inputValue"
  />
  {{ inputValue }}
</template>

<style scoped lang="scss"></style>
