import { memo } from 'react'

import MainLayout from '@/layout/MainLayout'
import { Outlet } from 'react-router-dom'

const App = memo(() => {
  return (
    <div className='w-full min-h-[100vh]'>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </div>
  )
})

export default App
