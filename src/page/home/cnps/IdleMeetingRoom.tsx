import { memo } from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { MapPinned } from 'lucide-react'
import { Button } from '@/components/ui/button'
const IdleMeetingRoom = memo(() => {
  return (
    <Card className='my-6'>
      <CardHeader className='py-4'>
        <CardTitle className='text-sm'>展厅会议室</CardTitle>
        <CardDescription>
          <div className='flex items-center gap-2 mt-2'>
            <MapPinned size={16}></MapPinned>
            <span className='text-sm text-muted-foreground'>北京会议室 F20</span>
          </div>
        </CardDescription>
        <Separator className='my-4' />
      </CardHeader>
      <CardContent className='flex items-center justify-between pb-2'>
        <div className='flex h-5 items-center space-x-4 text-sm'>
          <div>Tv</div>
          <Separator orientation='vertical' />
          <div>扩声</div>
          <Separator orientation='vertical' />
          <div>投影机</div>
        </div>
        <div>
          <Button size={'sm'}>预约</Button>
        </div>
      </CardContent>
    </Card>
  )
})

export default IdleMeetingRoom
