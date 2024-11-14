import { createBrowserRouter } from 'react-router-dom'

import type { RouteObject } from 'react-router-dom'

import App from '@/App'

import Home from '@/page/home/Home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/home',
        element: <Home />
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
