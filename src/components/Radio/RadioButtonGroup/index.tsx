import React from 'react'
import RadioGroupContext from './RadioGroupContext'

type RadioButtonGroupProps = {
  name: string
  children: React.ReactNode
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  name,
  children,
  value,
  onChange
}) => {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      {children}
    </RadioGroupContext.Provider>
  )
}

export default RadioButtonGroup
