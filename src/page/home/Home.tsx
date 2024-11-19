import { memo, useState } from 'react'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { Button } from '@/components/ui/button'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import { Calendar } from '@/components/ui/calendar'

import TodayMeeting from '@/page/home/cnps/TodayMeeting'

import { UserRoundPlus } from 'lucide-react'
import IdleMeetingRoom from './cnps/IdleMeetingRoom'

const Home = memo(() => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    /* 左侧内容
      快速创建会议

      当前会议信息(包含我的当天所有会议,当天所有会议)
    */
    <div className='h-full flex gap-8 pt-4 px-4'>
      <div className='flex-[3_3_0%]'>
        <div className='mb-4'>
          <h2 className='font-bold mb-2'>Hello w-z3</h2>
          <span className='text-describe'>welcome to ,youe person meeting assingtstn</span>
        </div>

        <Card>
          <CardHeader>
            <Tabs defaultValue='account' className='w-full'>
              <TabsList className='flex'>
                <TabsTrigger value='account' className='flex-1'>
                  普通会议
                </TabsTrigger>
                <TabsTrigger value='password' className='flex-1'>
                  研讨会
                </TabsTrigger>
                <TabsTrigger value='password1' className='flex-1'>
                  测试会议
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className='flex space-x-2'>
              <div className='flex-1'>
                <Input type='text' placeholder='会议主题' />
              </div>
              <div>
                <Button variant='outline' className='bg-primary text-primary-foreground shadow hover:bg-primary/90 px-4 '>
                  快速创建会议
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className='flex justify-between w-full gap-10'>
              <div className='flex-1'>
                <Label htmlFor='email' className='text-describe'>
                  Email
                </Label>
                <Input type='text' id='email' placeholder='会议主题' className='mt-2' />
              </div>

              <div className='flex-1'>
                <span className='text-describe text-sm '>会议主题</span>
                <Select>
                  <SelectTrigger className='mt-2'>
                    <SelectValue placeholder='主题' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='light'>浅色</SelectItem>
                    <SelectItem value='dark'>深色</SelectItem>
                    <SelectItem value='system'>系统</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='flex-1 flex flex-col justify-between'>
                <div className='text-describe text-sm '>邀请参会人</div>
                {/* hover:bg-primary/90 */}
                <Button variant='outline' className='text-primary-foreground shadow  px-4 '>
                  <span>邀请参会人</span>
                  <UserRoundPlus></UserRoundPlus>
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>

        {/*当前会议 */}
        <div className='mt-8  '>
          <h2 className='font-bold mb-6'>最近的会议</h2>

          <div className='overflow-auto scrollbar max-h-[36rem]'>
            <TodayMeeting></TodayMeeting>

            <TodayMeeting></TodayMeeting>

            <TodayMeeting></TodayMeeting>
          </div>

          {/* <TodayMeeting></TodayMeeting> */}
        </div>
      </div>
      {/* 
      右侧内容 

      日历
      当前空闲可预约的会议室列表
      */}
      <div className='flex-[2_2_0%] rounded-lg shadow-sm '>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          className='rounded-md border w-full flex border-b-0 min-h-[320px]'
          classNames={{
            months: 'flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1',
            month: 'space-y-4 w-full flex flex-col',
            table: 'w-full h-full border-collapse space-y-1',
            head_row: '',
            row: 'w-full mt-2'
          }}
        ></Calendar>

        <div className='mt-8'>
          <h2 className='font-bold mb-6'>当前空闲会议室</h2>
          <div className='overflow-auto scrollbar max-h-[36rem] px-4'>
            <IdleMeetingRoom></IdleMeetingRoom>

            <IdleMeetingRoom></IdleMeetingRoom>

            <IdleMeetingRoom></IdleMeetingRoom>

            <IdleMeetingRoom></IdleMeetingRoom>
            <IdleMeetingRoom></IdleMeetingRoom>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Home
