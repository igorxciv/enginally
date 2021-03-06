import { createReducer } from '@reduxjs/toolkit'
import { NavigationItem } from '@types-internal/navigation'

const initialState: NavigationItem[] = [
  { pathname: '/web', title: 'Web' },
  { pathname: '/cs', title: 'Computer Science' },
]

export const navigationReducer = createReducer(initialState, {})
