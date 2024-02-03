import React from 'react'
import type { StoryObj } from '@storybook/react'
import Flex from './index'

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    justify: {
      control: {
        type: 'select',
        options: [
          'flex-start',
          'flex-end',
          'center',
          'space-between',
          'space-around'
        ]
      }
    },
    align: {
      control: {
        type: 'select',
        options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
      }
    },
    direction: {
      control: {
        type: 'select',
        options: ['row', 'column', 'row-reverse', 'column-reverse']
      }
    },
    wrap: {
      control: {
        type: 'select',
        options: ['nowrap', 'wrap', 'wrap-reverse']
      }
    },
    gap: { control: 'number' },
    style: { control: 'object' }
  }
}

type Story = StoryObj<typeof Flex>

const Template = (args: {
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: number
  children: React.ReactNode
  style?: React.CSSProperties
}) => <Flex {...args} />

const TemplateChildren = () => (
  <>
    <div style={{ width: 100, height: 100, background: 'red' }} />
    <div style={{ width: 100, height: 50, background: 'green' }} />
    <div style={{ width: 100, height: 100, background: 'blue' }} />
  </>
)

export const Default: Story = {
  args: {
    justify: 'flex-start',
    align: 'flex-start',
    direction: 'row',
    wrap: 'nowrap',
    gap: 1,
    children: <TemplateChildren />,
    style: {}
  },
  render: Template
}
