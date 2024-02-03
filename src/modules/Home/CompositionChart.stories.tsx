import React from 'react'
import type { StoryObj } from '@storybook/react'
import CompositionChart from './CompositionChart'
import { type Middleware, SWRConfig, type SWRResponse } from 'swr'
import { compositionsMock, prefecturesMock } from './mocks'
import { type ChartType } from './types'

export default {
  title: 'Modules/Home/CompositionChart',
  component: CompositionChart,
  argTypes: {
    prefectures: { control: 'array' },
    type: {
      control: 'select',
      options: [
        'totalPopulation',
        'youngerPopulation',
        'workingAgePopulation',
        'elderlyPopulation'
      ]
    }
  }
}

const mockMidleware: Middleware = () => {
  return (key): SWRResponse<any, any> => {
    if (key === '/api/v1/prefectures') {
      return {
        data: prefecturesMock,
        error: null,
        isValidating: false,
        mutate: async () => {},
        isLoading: false
      }
    }

    return {
      data: compositionsMock,
      error: null,
      isValidating: false,
      mutate: async () => {},
      isLoading: false
    }
  }
}

type Story = StoryObj<typeof CompositionChart>

const Template = (args: { prefectures: number[]; type?: ChartType }) => (
  <SWRConfig value={{ use: [mockMidleware] }}>
    <CompositionChart prefectures={args.prefectures} type={args.type} />
  </SWRConfig>
)

export const Default: Story = {
  args: {
    prefectures: [11],
    type: 'totalPopulation'
  },
  render: Template
}
