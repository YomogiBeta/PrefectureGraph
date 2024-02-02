import React, { memo } from 'react'
import useRadioGroup from './RadioGroup/useRadioGroup'

type RadioButtonProps = {
  name?: string
  label: string
  value?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  style?: React.CSSProperties
}
const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  label,
  value,
  checked,
  disabled,
  onChange,
  style
}) => {
  const {
    name: contextName,
    value: contextValue,
    onChange: contextOnChange
  } = useRadioGroup()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    contextOnChange?.(e)
  }
  return (
    <label style={{ color: disabled ? 'gray' : 'black', ...style }}>
      <input
        name={contextName ?? name}
        type='radio'
        value={value}
        checked={contextValue !== undefined ? contextValue === value : checked}
        onChange={handleChange}
        disabled={disabled}
      />
      {label}
    </label>
  )
}

export default memo(RadioButton)
