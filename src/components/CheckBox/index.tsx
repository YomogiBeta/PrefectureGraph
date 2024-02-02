import React, { memo } from 'react'

type CheckBoxProps = {
  label: string
  checked?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  style: React.CSSProperties
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  checked,
  disabled,
  onChange,
  style
}) => {
  return (
    <label style={{ color: disabled ? 'gray' : 'black', ...style }}>
      <input
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        type='checkbox'
      />
      {label}
    </label>
  )
}

export default memo(CheckBox)
