import React, { memo, useCallback, useEffect, useState } from 'react'
import ReactECharts, { type EChartsOption } from 'echarts-for-react'
import { useCompositions, usePrefectures } from '../../../api'
import { type ChartType } from '../types'
import NoContent from './NoContent'

type CompositionChartProps = {
  prefectures: number[]
  type?: ChartType
}
const CompositionChart: React.FC<CompositionChartProps> = ({
  prefectures,
  type
}) => {
  const [acceptedPrefectures, setAcceptedPrefectures] = useState<number[]>([])
  const { data: compositios, allLoad } = useCompositions(acceptedPrefectures)
  const { data: prefecturesData } = usePrefectures()

  const getPrefectureName = useCallback(
    (prefCode: number) => {
      return prefecturesData?.find(
        prefecture => prefecture.prefCode === prefCode
      )?.prefName
    },
    [prefecturesData]
  )

  const getTypeIndex = useCallback(() => {
    if (type === 'totalPopulation') return 0
    if (type === 'youngerPopulation') return 1
    if (type === 'workingAgePopulation') return 2
    if (type === 'elderlyPopulation') return 3
    return 0
  }, [type])

  const currentCompositionsSeries = useCallback(() => {
    return compositios?.map(composition => ({
      name: getPrefectureName(composition.prefCode),
      type: 'line',
      data: prefectures.includes(composition.prefCode)
        ? composition.data[getTypeIndex()].data.map(data => data.value)
        : null
    }))
  }, [compositios, getPrefectureName, getTypeIndex, prefectures])

  useEffect(() => {
    setAcceptedPrefectures(prev => {
      // prevに含まれていないprefecturesを追加
      const newPrefectures = prefectures.filter(
        prefCode => !prev.includes(prefCode)
      )
      return [...prev, ...newPrefectures]
    })
    void allLoad()
  }, [allLoad, prefectures])

  const getChartOptions: EChartsOption = useCallback(
    () => ({
      title: {
        text: `${compositios?.[0]?.data[getTypeIndex()].label ?? '総人口'} - 推移`
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: compositios?.[0]?.data[0].data.map(data => data.year)
      },
      yAxis: {
        type: 'value'
      },
      series: currentCompositionsSeries()
    }),
    [compositios, currentCompositionsSeries, getTypeIndex]
  )

  return prefectures.length > 0 ? (
    <ReactECharts option={getChartOptions()} />
  ) : (
    <NoContent />
  )
}

export default memo(CompositionChart)
