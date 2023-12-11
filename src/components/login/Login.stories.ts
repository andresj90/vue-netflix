import type { Meta, StoryObj } from '@storybook/vue3'
import LoginHeader from './Login-Header.vue'
import LoginUserInput from './LoginUserInput.vue'
import Login from './Login-Main.vue'

const meta: Meta<typeof LoginHeader> = {
  component: LoginHeader
}

export default meta
type LoginHeaderStory = StoryObj<typeof LoginHeader>
type LoginStory = StoryObj<typeof Login>
type LoginUserInputStory = StoryObj<typeof Login>

export const Header: LoginHeaderStory = {
  render: () => ({
    components: { LoginHeader },
    template: '<LoginHeader  />'
  })
}

export const LoginMain: LoginStory = {
  name: 'Login',
  render: () => ({
    components: { Login },
    template: '<Login  />'
  })
}

export const LoginUserName: LoginUserInputStory = {
  name: 'LoginUserInput',
  render: () => ({
    components: { LoginUserInput },
    template: '<LoginUserInput  />'
  })
}
