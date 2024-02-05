import React, { memo, useCallback } from 'react'
import { usePrefectures } from '../../api'
import Flex from '../../components/Flex'
import CheckBox from '../../components/CheckBox'

type PrefecturesCheckFieldProps = {
  checkedPrefectures?: number[]
  onAdd?: (prefCode: number) => void
  onRemove?: (prefCode: number) => void
}

const PrefecturesCheckField: React.FC<PrefecturesCheckFieldProps> = ({
  checkedPrefectures,
  onAdd,
  onRemove
}) => {
  const { data: prefectures } = usePrefectures()

  const handleCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value)
      if (checkedPrefectures?.includes(value)) {
        onRemove?.(value)
      } else {
        onAdd?.(value)
      }
    },
    [checkedPrefectures, onAdd, onRemove]
  )

  return (
    <>
      <div>
        <h3
          style={{
            padding: '4px',
            border: '1px solid',
            borderRadius: '8px',
            width: 'fit-content'
          }}>
          都道府県
        </h3>
      </div>
      <Flex wrap='wrap'>
        {prefectures?.map(prefecture => (
          <CheckBox
            key={prefecture.prefCode}
            checked={checkedPrefectures?.includes(prefecture.prefCode)}
            label={prefecture.prefName}
            onChange={handleCheck}
            style={{ minWidth: '96px' }}
            value={prefecture.prefCode}
          />
        ))}
      </Flex>
    </>
  )
}

export default memo(PrefecturesCheckField)
