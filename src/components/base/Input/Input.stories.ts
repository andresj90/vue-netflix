import type { Meta, StoryObj } from '@storybook/vue3'

import TextInput from './TextInput.vue'

const meta: Meta<typeof TextInput> = {
  component: TextInput
}

export default meta

type InputStory = StoryObj<typeof TextInput>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Input: InputStory = {
  render: (args) => ({
    components: { TextInput },
    setup() {
      console.log({ args })
      return { args }
    },
    template: `<TextInput v-bind="args"/>`
  }),
  args: {
    inputAttributes: {
      placeholder: 'Email or phone number',
      value: 'example'
    },
    labelText: 'Email or phone number',
    errorMessage: 'Please enter a valid email or phone number.'
  }
}
