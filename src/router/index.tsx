import { createBrowserRouter } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

import App from '@/App'

import Home from '@/page/home/Home'

import MeetingRoomList from '@/page/meetingRoomList/MeetingRoomList'

import Calendar from '@/page/calendar/Calendar'
import { useState } from 'react'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/meetingRoom',
        element: <MeetingRoomList />
      },
      {
        path: '/calendar',
        element: <Calendar />
      }
    ]
  }
]

export default createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
})
