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
    text: 'home',
    component: <Home />
  },
  {
    id: 3,
    url: '/browse',
    text: 'browse',
    component: <Browse />
  },
]

export const categories = [
  {
    name: 'Any Category',
    id: 1,
  },
  {
    name: 'General Knowledge',
    id: 9,
  },
  {
    name: 'Books',
    id: 10,
  },
  {
    name: 'Film',
    id: 11,
  },
  {
    name: 'Music',
    id: 12,
  },
  {
    name: 'Musicals & Theatres',
    id: 13,
  },
  {
    name: 'Television',
    id: 14,
  },
  {
    name: 'Video Games',
    id: 15,
  },
  {
    name: 'Board Games',
    id: 16,
  },
  {
    name: 'Science and Nature',
    id: 17,
  },
  {
    name: 'Computers',
    id: 18,
  },
  {
    name: 'Mathematics',
    id: 19,
  },
  {
    name: 'Mythology',
    id: 20,
  },
  {
    name: 'Sports',
    id: 21,
  },
  {
    name: 'Geography',
    id: 22,
  },
  {
    name: 'History',
    id: 23,
  },
  {
    name: 'Politics',
    id: 24,
  },
  {
    name: 'Art',
    id: 25,
  },
  {
    name: 'Celebrities',
    id: 26,
  },
  {
    name: 'Animals',
    id: 27,
  },
  {
    name: 'Vehicles',
    id: 28,
  },
  {
    name: 'Comics',
    id: 29,
  },
  {
    name: 'Gadgets',
    id: 30,
  },
  {
    name: 'Japanese Manga & Anime',
    id: 31,
  },
  {
    name: 'Cartoon & Animations',
    id: 32,
  },
]