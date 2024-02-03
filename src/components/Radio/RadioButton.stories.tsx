import React from 'react'
import type { StoryObj } from '@storybook/react'
import RadioButton from './RadioButton'
import RadioButtonGroup from './RadioButtonGroup'

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    style: { control: 'object' }
  }
}

type Story = StoryObj<typeof RadioButton>

const Template = (args: {
  name?: string
  label: string
  checked?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  style?: React.CSSProperties
}) => <RadioButton {...args} />

export const Default: Story = {
  args: {
    label: 'Default'
  },
  render: Template
}

export const RadioButtonGroupStory = () => {
  const [value, setValue] = React.useState('option1')
  return (
    <RadioButtonGroup
      name='group1'
      onChange={e => {
        setValue(e.target.value)
      }}
      value={value}>
      <RadioButton checked label='Option 1' value='option1' />
      <RadioButton label='Option 2' value='option2' />
      <RadioButton checked label='Option 3' value='option3' />
    </RadioButtonGroup>
  )
}
