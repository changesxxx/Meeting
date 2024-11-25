import { memo } from 'react'

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { EllipsisVertical, CalendarRange, Clock2 } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

const TodayMeeting = memo(() => {
  return (
    <Card className='my-6'>
      <CardHeader className='flex'>
        <CardTitle className='flex justify-between items-center'>
          <div>
            <div className='text-sm'>UI/UX Revamp Startegy</div>
            <div className='flex text-sm text-describe py-4 gap-4'>
              <div className='flex items-center gap-2'>
                <CalendarRange size={16}></CalendarRange>
                <span>2024-12-01</span>
              </div>

              <div className='flex items-center gap-2'>
                <Clock2 size={16}></Clock2>
                <span>56分</span>
              </div>
            </div>
          </div>
          <div className='flex gap-8 max-h-7'>
            {/* <Badge variant='notstarted'>未开始</Badge> */}
            <Badge variant='used'>已开始</Badge>

            <EllipsisVertical className='cursor-pointer'></EllipsisVertical>
          </div>
        </CardTitle>
        <CardDescription className='max-w-full'>
          <p className='line-clamp-2'>
            These cookies allow the website to provide personalized functionality.These cookies allow the website to provide personalized
            functionality.
          </p>
        </CardDescription>
      </CardHeader>

      <CardFooter className='gap-4'>
        <Badge variant={'outline'}>主持人:王小胖</Badge>
        <Badge variant={'outline'}>联系电话:13310191020</Badge>
        <Badge variant={'outline'}>普通会议</Badge>
      </CardFooter>
    </Card>
  )
})

export default TodayMeeting
