import React from 'react'
import Flex from '../../../components/Flex'

const NoContent: React.FC = () => {
  return (
    <Flex
      align='center'
      justify='center'
      style={{
        width: '88%',
        height: '296px',
        border: '4px solid #dad5d5',
        borderRadius: '24px',
        padding: '8px',
        margin: '0 auto'
      }}>
      <p style={{ fontSize: '20px', color: 'gray' }}>
        都道府県を選択すると、人口構成の推移が表示されます。
      </p>
    </Flex>
  )
}

export default NoContent
