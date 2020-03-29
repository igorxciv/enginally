import React, { FC } from 'react'
import { useMatchesScreenWidth } from '@core/services/window'

type Props = {
  minWidth?: number;
  maxWidth?: number;
}

export const Responsive: FC<Props> = ({ children, minWidth = 0, maxWidth }) => {
  const matches = useMatchesScreenWidth({ minWidth, maxWidth })

  if (matches) {
    return <>{children}</>
  }

  return null
}