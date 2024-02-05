import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'
import { GatsbyBrowser } from 'gatsby'
import React from 'react'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element
}) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      {element}
    </>
  )
}
