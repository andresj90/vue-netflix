import type { Meta, StoryObj } from '@storybook/vue3'
import FooterSecondary from './Footer-Secondary.vue'
import LanguageSelectionInput from './LanguageSelection.vue'

const meta: Meta<typeof FooterSecondary> = {
  component: FooterSecondary
}

export default meta
type FooterSecondaryStory = StoryObj<typeof FooterSecondary>
type LanguageSelectionInputStory = StoryObj<typeof FooterSecondary>

export const Secondary: FooterSecondaryStory = {
  render: () => ({
    components: { FooterSecondary },
    template: '<FooterSecondary  />'
  })
}

export const Input: LanguageSelectionInputStory = {
  render: () => ({
    components: { LanguageSelectionInput },
    template: '<LanguageSelectionInput  />'
  })
}
