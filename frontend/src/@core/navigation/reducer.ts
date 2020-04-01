import { createReducer } from '@reduxjs/toolkit'
import { NavigationItem } from '@types-local/navigation'

const initialState: NavigationItem[] = [
  { pathname: '/', title: 'Home' },
  { pathname: '/web', title: 'Web' },
  { pathname: '/cs', title: 'Computer Science' },
]

export const navigationReducer = createReducer(initialState, {})
