import React, { memo } from 'react'
import RadioButton from '../../components/Radio/RadioButton'
import RadioButtonGroup from '../../components/Radio/RadioButtonGroup'
import { type ChartType } from './types'
import Flex from '../../components/Flex'

type ChartTypeRadioGroupProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: ChartType
}
const ChartTypeRadioGroup: React.FC<ChartTypeRadioGroupProps> = ({
  onChange,
  value
}) => {
  return (
    <RadioButtonGroup name='chartType' onChange={onChange} value={value}>
      <Flex gap={1} wrap='wrap'>
        <RadioButton label='総人口' value='totalPopulation' />
        <RadioButton label='年少人口' value='youngerPopulation' />
        <RadioButton label='生産年齢人口' value='workingAgePopulation' />
        <RadioButton label='老年人口' value='elderlyPopulation' />
      </Flex>
    </RadioButtonGroup>
  )
}

export default memo(ChartTypeRadioGroup)
