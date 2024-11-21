import { memo } from 'react'

import { Button } from '@/components/ui/button'

import { Badge } from '@/components/ui/badge'

import MeetingState from '@/components/meeting-state'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { BadgeInfo, CalendarArrowDown, SquarePower, Flower, Target, MapPin } from 'lucide-react'

const meetingRoom = [
  {
    name: '大会议室',
    address: '北京办公室',
    position: 'F22',
    type: '普通会议室',
    state: '空闲',
    nextMeeting: '研讨会',
    devices: ['电视', '麦克风', '投屏']
  },
  {
    name: '小会议室A',
    address: '北京办公室',
    position: 'F21',
    type: '小型会议室',
    state: '已预定',
    nextMeeting: '项目讨论会',
    devices: ['白板', '投影仪']
  },
  {
    name: '小会议室B',
    address: '北京办公室',
    position: 'F21',
    type: '小型会议室',
    state: '空闲',
    nextMeeting: '团队建设',
    devices: ['电视', '麦克风']
  },
  {
    name: '视频会议室',
    address: '北京办公室',
    position: 'F23',
    type: '视频会议室',
    state: '空闲',
    nextMeeting: '远程会议',
    devices: ['视频设备', '麦克风', '投影仪']
  }
]

const MeetingRoomItemV2 = memo(() => {
  return (
    <Table className='w-full text-center text-xs lg:text-sm'>
      <TableHeader>
        <TableRow className='h-[60px]'>
          <TableHead className='text-center'>
            <div className='flex justify-center items-center gap-2'>
              <BadgeInfo size={14}></BadgeInfo>
              <span>会议室名称</span>
            </div>
          </TableHead>

          <TableHead className='text-center'>
            <div className='flex justify-center items-center gap-2'>
              <MapPin size={14}></MapPin>
              <span>会议室位置</span>
            </div>
          </TableHead>

          <TableHead className='text-center'>
            <div className='flex justify-center items-center gap-2'>
              <SquarePower size={14}></SquarePower>
              <span>会议室设备</span>
            </div>
          </TableHead>

          <TableHead className='text-center'>
            <div className='flex justify-center items-center gap-2'>
              <Target size={14}></Target>
              <span>会议室类型</span>
            </div>
          </TableHead>

          <TableHead className='text-center'>
            <div className='flex justify-center items-center gap-2'>
              <CalendarArrowDown size={14}></CalendarArrowDown>
              <span>下一个会议</span>
            </div>
          </TableHead>

          <TableHead className='text-center'>
            <div className='flex justify-center items-center gap-2'>
              <Flower size={14}></Flower>
              <span>会议室预约状态</span>
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {meetingRoom.map((mr) => (
          <TableRow key={mr.name} className='h-[90px]'>
            <TableCell>{mr.name}</TableCell>
            <TableCell>
              {mr.address} {mr.position}
            </TableCell>
            <TableCell>
              {mr.devices.map((d) => (
                <Badge key={d} variant={'secondary'} className='mx-1 font-medium my-1'>
                  {d}
                </Badge>
              ))}
            </TableCell>
            <TableCell>{mr.type}</TableCell>

            <TableCell>{mr.nextMeeting}</TableCell>
            <TableCell>
              <Button size={'us'} variant={'used'} className='[&_svg]:size-2'>
                <MeetingState state={'used'}></MeetingState>
                <span className='text-xs lg:text-sm'>{mr.state}</span>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
})

export default MeetingRoomItemV2
