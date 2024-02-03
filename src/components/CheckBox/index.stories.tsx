import React from 'react'
import type { StoryObj } from '@storybook/react'
import CheckBox from './index'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    style: { control: 'object' }
  }
}

type Story = StoryObj<typeof CheckBox>

const Template = (args: {
  label: string
  value?: string | number
  checked?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  style?: React.CSSProperties
}) => <CheckBox {...args} />

export const Default: Story = {
  args: {
    label: 'Default'
  },
  render: Template
}
