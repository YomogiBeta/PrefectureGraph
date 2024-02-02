import React, { memo } from 'react'

type FlexProps = {
  justify:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  align: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap: number
  children: React.ReactNode
  style: React.CSSProperties
}

const Flex: React.FC<FlexProps> = ({
  justify,
  align,
  direction,
  wrap,
  gap,
  children,
  style
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction,
        flexWrap: wrap,
        gap: `${gap * 8}px`,
        ...style
      }}>
      {children}
    </div>
  )
}

export default memo(Flex)
