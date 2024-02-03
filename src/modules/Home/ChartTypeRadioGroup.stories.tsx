import React from 'react'
import type { StoryObj } from '@storybook/react'
import ChartTypeRadioGroup from './ChartTypeRadioGroup'
import { type ChartType } from './types'

export default {
  title: 'Modules/Home/ChartTypeRadioGroup',
  component: ChartTypeRadioGroup,
  argTypes: {}
}

type Story = StoryObj<typeof ChartTypeRadioGroup>

const Template = (args: {
  value?: ChartType
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => <ChartTypeRadioGroup {...args} />

export const Default: Story = {
  args: {
    value: undefined
  },
  render: Template
}
