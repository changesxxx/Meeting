import { memo } from 'react'

import { Card } from '@/components/ui/card'

import { Badge } from '@/components/ui/badge'

import { AspectRatio } from '@/components/ui/aspect-ratio'

import MeetingState from '@/components/meeting-state'

import { MapPin, MessageSquareWarning, UserRoundPlus } from 'lucide-react'

const MeetingRoomItemV1 = memo(() => {
  return (
    <Card className='w-full h-[22rem] xl:h-96 cursor-pointer'>
      {/* overflow-hidden */}
      <div className='max-h-40 xl:max-h-44  xxl:max-h-48 overflow-hidden rounded-lg relative'>
        <AspectRatio ratio={16 / 9} className='unset -translate-y-3/4'>
          <img
            // src='http://hxkxiot.com:8081/huaxia/attachements/MeetingRoom/picFiles/small_20220608134900055393.png'
            src='https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_1280.jpg'
            alt='Image'
            className='rounded-md object-cover w-full'
          />
        </AspectRatio>
        <span className='absolute top-0 left-1'>
          <Badge variant={'secondary'} className=''>
            普通会议室
          </Badge>
        </span>
      </div>

      <div className='p-4 flex flex-col'>
        <span className='font-bold'>大会议室</span>
        <div className='flex items-center text-sm py-2 text-muted-foreground'>
          <MapPin size={14}></MapPin>
          <span className=''>北京办公室 F22</span>
        </div>

        <div className='flex justify-between '>
          <div>
            <div className='flex gap-4 py-4'>
              <Badge variant={'outline'} className='bg-secondary  text-secondary-foreground font-normal'>
                <span>电视</span>
              </Badge>

              <Badge variant={'outline'} className='bg-secondary  text-secondary-foreground font-normal'>
                <span>电视</span>
              </Badge>

              <Badge variant={'outline'} className='bg-secondary  text-secondary-foreground font-normal'>
                <span>电视</span>
              </Badge>
            </div>
            <div className='flex gap-4 py-4 text-sm items-center md:text-xs'>
              <div className='flex items-center'>
                <MeetingState state='used'></MeetingState>还有2小时结束会议
              </div>
              <div className='flex items-center gap-1'>
                <MessageSquareWarning size={12}></MessageSquareWarning>
                <span className='font-bold'>12条会议信息</span>
              </div>
            </div>
          </div>

          <div className='flex items-center cursor-pointer'>
            <Badge>
              <UserRoundPlus size={24}></UserRoundPlus>
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  )
})

export default MeetingRoomItemV1
