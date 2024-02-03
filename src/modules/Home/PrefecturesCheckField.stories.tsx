import React from 'react'
import type { StoryObj } from '@storybook/react'
import PrefecturesCheckField from './PrefecturesCheckField'
import { type Middleware, SWRConfig, type SWRResponse } from 'swr'
import { prefecturesMock } from './mocks'

export default {
  title: 'Modules/Home/PrefecturesCheckField',
  component: PrefecturesCheckField,
  argTypes: {
    checkedPrefectures: { control: 'array' }
  }
}

const mockMidleware: Middleware = () => {
  return (): SWRResponse<any, any> => {
    return {
      data: prefecturesMock,
      error: null,
      isValidating: false,
      mutate: async () => {},
      isLoading: false
    }
  }
}

type Story = StoryObj<typeof PrefecturesCheckField>

const Template = (args: {
  checkedPrefectures?: number[]
  // onAdd?: (prefCode: number) => void
  // onRemove?: (prefCode: number) => void
}) => {
  const [checkedPrefectures, setCheckedPrefectures] = React.useState(
    args.checkedPrefectures ?? []
  )
  return (
    <SWRConfig value={{ use: [mockMidleware] }}>
      <PrefecturesCheckField
        checkedPrefectures={checkedPrefectures}
        onAdd={prefCode => {
          setCheckedPrefectures(prev => [...prev, prefCode])
        }}
        onRemove={prefCode => {
          setCheckedPrefectures(prev => prev.filter(pref => pref !== prefCode))
        }}
      />
    </SWRConfig>
  )
}

export const Default: Story = {
  args: {
    checkedPrefectures: []
  },
  render: Template
}
