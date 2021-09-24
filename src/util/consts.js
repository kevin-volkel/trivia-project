import React from "react"
import Home from '../Pages/Home'
import Settings from '../Pages/Settings'

export const pages = [
  {
    id: 1,
    url: '/',
    text: 'trivia',
    component: <Home />
  },
  {
    id: 2,
    url: '/settings',
    text: 'settings',
    component: <Settings /> 
  },
]