import React from "react"
import Home from '../Pages/Home'
import Settings from '../Pages/Settings'
import Endless from '../Pages/Endless'

export const pages = [
  {
    id: 3,
    url: '/endless',
    text: 'endless',
    component: <Endless />
  },
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