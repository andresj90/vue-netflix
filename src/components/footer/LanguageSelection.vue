<script lang="ts" setup>
import { ref } from 'vue'
import { CIcon } from '@coreui/icons-vue'
import { cilGlobeAlt } from '@coreui/icons'

const selectedLanguage = ref<string>('ENG')
const onSelectedLanguageOption = (event: Event) => {
  selectedLanguage.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <div class="language-selection-container">
    <CIcon icon="cilGlobeAlt" size="xxl" />
    <select
      name="select"
      id="select-language-input"
      aria-label="Choose a language"
      @change="onSelectedLanguageOption($event)"
      v-bind:value="selectedLanguage"
    >
      <option value="ENG">English</option>
      <option value="ES">Español</option>
    </select>
  </div>
</template>

<style scope>
select {
  line-height: 1.7;
  padding: 13px 26px 13px 50px;
  text-indent: 0;
  background-color: #000;
  background-image: url(https://coothead.co.uk/images/world.png);
  background-repeat: no-repeat;
  background-size: 1.4em auto;
  background-position: 0.8em center;
  font-size: 13px;
  color: #757575;
  font-family: netflixsans;
}

select::after {
  border: 1px solid red;
}

option {
  font-weight: normal;
  display: block;
  min-height: 1.2em;
  padding: 0px 2px 1px;
  white-space: nowrap;
}
</style>
