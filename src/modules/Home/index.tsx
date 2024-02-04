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
    <Flex direction='column' gap={3} style={{ margin: '16px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '20px', fontWeight: 700 }}>
        都道府県別人口推移
      </h2>
      <hr style={{ flexGrow: 1, width: '100%' }} />
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
