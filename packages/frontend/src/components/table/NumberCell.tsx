import cx from 'classnames'
import React, { ReactNode } from 'react'

import { PercentChange } from '../PercentChange'

export interface NumberCellProps {
  signed?: boolean
  children: ReactNode
  className?: string
}

export function NumberCell(props: NumberCellProps) {
  return (
    <span className={cx('text-base md:text-lg', props.className)}>
      {props.signed && typeof props.children === 'string' ? (
        <PercentChange value={props.children} />
      ) : (
        props.children
      )}
    </span>
  )
}
