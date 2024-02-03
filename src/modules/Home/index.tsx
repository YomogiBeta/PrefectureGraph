import React, { useCallback, useState } from 'react'
import PrefecturesCheckField from './PrefecturesCheckField'
import CompositionChart from './CompositionChart'
import { type ChartType } from './types'
import ChartTypeRadioGroup from './ChartTypeRadioGroup'
import Flex from '../../components/Flex'

const Home: React.FC = () => {
  const [prefectures, setPrefectures] = useState<number[]>([])
  const [chartType, setChartType] = useState<ChartType>('totalPopulation')

  const handleAddPrefecture = useCallback((prefCode: number) => {
    setPrefectures(prev => [...prev, prefCode])
  }, [])

  const handleRemovePrefecture = useCallback((prefCode: number) => {
    setPrefectures(prev => prev.filter(pref => pref !== prefCode))
  }, [])

  return (
    <Flex direction='column' gap={3}>
      <PrefecturesCheckField
        checkedPrefectures={prefectures}
        onAdd={handleAddPrefecture}
        onRemove={handleRemovePrefecture}
      />
      <CompositionChart prefectures={prefectures} type={chartType} />
      <ChartTypeRadioGroup
        onChange={e => {
          setChartType(e.target.value as ChartType)
        }}
        value={chartType}
      />
    </Flex>
  )
}

export default Home
