import React from "react"
import Home from '../Pages/Home'
import Browse from '../Pages/Browse'
import Settings from '../Pages/Settings'

export const pages = [
  {
    id: 2,
    url: '/settings',
    text: 'settings',
    component: <Settings /> 
  },
  {
    id: 1,
    url: '/',
    text: 'trivia',
    component: <Home />
  },
  {
    id: 3,
    url: '/browse',
    text: 'browse',
    component: <Browse />
  },
]