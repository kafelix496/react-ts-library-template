import React from 'react'

import type { CheckboxProps } from './interfaces'

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const [isChecked, setCheckedStatus] = React.useState<boolean>(false)

  const onChange = (): void => {
    setCheckedStatus(!isChecked)
  }

  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {isChecked ? props.labelOn : props.labelOff}
    </label>
  )
}

export default Checkbox
