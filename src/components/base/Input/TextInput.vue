<script setup lang="ts">
import { ref, onUpdated } from 'vue'
import { type InputHTMLAttributes } from 'vue'
import IconDanger from '../../icons/iconDanger.vue'

const props = withDefaults(
  defineProps<{
    inputAttributes: InputHTMLAttributes
    inputValue: string
    labelText?: string
    errorMessage?: string
  }>(),
  {
    inputAttributes: () => ({})
  }
)

const emit = defineEmits<{
  // named tuple syntax
  'update:inputValue': [value: string]
}>()

const classNames = ref<Record<string, boolean>>({})

onUpdated(() => {
  // console.log({ inputValue })
})

const onFocusOut = (e: FocusEvent) => {
  const currentTarget = e.currentTarget

  const eventValue = (e.target as HTMLInputElement).value

  //console.log({ eventValue, inputValue: inputValue, currentTarget })
  /*
  if (!inputValue.length) {
    classNames.value = {
      ...classNames.value,
      isEmpty: true
    }
    return
  }
  */
}

const onFocusIn = (e: FocusEvent) => {
  const eventValue = (e.target as HTMLInputElement).value
  //console.log({ eventValue, inputValue })

  classNames.value = {
    isFocused: true
  }
}

const onInputChange = (e: Event) => {
  const eventValue = (e.target as HTMLInputElement).value
  console.log('inputchange', eventValue)
  emit('update:inputValue', eventValue)
}
</script>

<template>
  <div class="input__maincontainer">
    <div class="input__body" :class="classNames">
      <!--<label>{{ labelText }}</label> -->
      <input
        :bind="inputAttributes"
        :value="inputValue"
        @input="onInputChange"
        v-on:focusin="onFocusIn"
        v-on:focusout="onFocusOut"
        type="text"
      />
    </div>
    <div v-show="errorMessage" class="input__errorcontainer">
      <IconDanger style="{ fill: none,  width: 16, height: 16;}" />
      <span class="input__errormessage">{{ errorMessage }}</span>
    </div>
    {{ inputValue }}
  </div>
</template>

<style lang="scss" scoped>
.input__maincontainer {
  .input__body {
    position: relative;
    width: 100%;
    height: fit-content;
    margin-bottom: 10px;

    label {
      position: absolute;
      top: 50%;
      left: 1%;
      transform: translate(-1%, -50%);
    }
    input {
      width: 100%;
      box-sizing: border-box;
      margin: 0;
      padding: 0.8rem 0.8rem;
      z-index: 2;

      &:focus {
        outline: 1px #193146 solid;
        outline-width: 1px;
        outline-offset: 0;
        /* outer indicator */
        box-shadow: 0 0 0 2px #f9f9f9;
        border-radius: 1px;
      }
    }
  }
  .input__errorcontainer {
    color: red;
    display: flex;
    gap: 5px;
    align-items: center;
    .input__errormessage {
    }
  }
}
</style>
