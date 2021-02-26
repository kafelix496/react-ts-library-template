import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Story, Meta } from '@storybook/react/types-6-0'

import Checkbox from '../Checkbox'
import type { CheckboxProps } from '../interfaces'
import * as CheckboxStories from './Checkbox.stories'

export default {
  title: 'Example/Checkbox',
  component: Checkbox
} as Meta

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />

export const Basic = Template.bind({})
Basic.args = {
  ...CheckboxStories.Basic.args
}
