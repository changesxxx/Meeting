import { memo, useState } from 'react'

import { MenuType } from '@/types'

import SearchInput from '@/components/search-input'

import { Calendar } from '@/components/ui/calendar'
import { zhCN } from 'date-fns/locale'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

import { Card } from '@/components/ui/card'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import ShowMenu from '@/components/show-menu'

import { CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { dateFormat } from '@/utils/date'

import DataFilterButton from '@/components/data-filter-button'

import { useFilterLogic } from '@/hooks/useFilterLogic'

import { filterData } from '@/data/meetingRoom.ts'
import { meetings } from '@/data/meeting'

import { getCalendarByMonth, isDateInCurrentMonth, getCurrentWeek } from '@/utils/date'

const CalendarPage = memo(() => {
  const [showMenu, setShowMenu] = useState<MenuType>('grid')

  const [date, setDate] = useState<Date>(new Date())

  //条件数据
  const { filter, selectedHandle, selectedResetHandle } = useFilterLogic(filterData)

  //切换展现形式
  function showMenuHandle(menu: MenuType) {
    setShowMenu(menu)
  }

  return (
    <div className='h-full'>
      <header className='h-12'>
        <div className='flex justify-between'>
          <div className='flex gap-4 items-center'>
            <SearchInput className='w-64'></SearchInput>

            <DataFilterButton filterData={filter} selectedHandle={selectedHandle} selectedResetHandle={selectedResetHandle}></DataFilterButton>
          </div>

          <ShowMenu showMenu={showMenu} showMenuHandle={showMenuHandle}></ShowMenu>
        </div>
      </header>

      <main className='h-[calc(100%-3rem)]'>
        <Card className='h-full p-4 '>
          <div className='flex justify-between  items-center h-12'>
            <h3 className='font-bold'>
              <span>{dateFormat(date)}</span>
            </h3>

            <div className='flex gap-4'>
              <Select>
                <SelectTrigger className='px-3 border-0'>
                  <SelectValue placeholder='Theme' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='light'>Light</SelectItem>
                  <SelectItem value='dark'>Dark</SelectItem>
                  <SelectItem value='system'>System</SelectItem>
                </SelectContent>
              </Select>
              <Popover>
                <PopoverTrigger asChild className='border-0'>
                  <Button variant={'outline'} className={cn('w-[160px] justify-start text-left font-normal', !date && 'text-muted-foreground')}>
                    <CalendarIcon />
                    <span>{dateFormat(date)}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0'>
                  <div className='flex gap-4 items-center'>
                    <Select>
                      <SelectTrigger className='px-3 border-0'>
                        <SelectValue placeholder='Theme' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='light'>Light</SelectItem>
                        <SelectItem value='dark'>Dark</SelectItem>
                        <SelectItem value='system'>System</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className='px-3 border-0'>
                        <SelectValue placeholder='Theme' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='light'>Light</SelectItem>
                        <SelectItem value='dark'>Dark</SelectItem>
                        <SelectItem value='system'>System</SelectItem>
                      </SelectContent>
                    </Select>

                    <Button size={'us'}>今日</Button>
                  </div>

                  <Calendar mode='single' locale={zhCN} selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className='rounded-lg border   border-gray-200 overflow-hidden h-[calc(100%-3rem)] '>
            {/* <CalendarByMonth></CalendarByMonth> */}
            <CalendarByWeek></CalendarByWeek>
          </div>
        </Card>
      </main>
    </div>
  )
})

const CalendarByMonth = memo(() => {
  const week = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']

  return (
    <>
      <div className='flex h-10'>
        {week.map((w) => (
          <span key={w} className='flex-1 py-2 text-center text-sm text-gray-300 font-bold bg-gray-200 border-r border-white last:border-0'>
            {w}
          </span>
        ))}
      </div>

      <div className='grid grid-cols-7 h-[calc(100%-2.5rem)] overflow-auto'>
        {getCalendarByMonth().map((date) => (
          <div
            className={`border-r border-b border-gray-200  date p-2  min-h-24   ${date.isToday() ? 'bg-primary/40 text-white' : ''}`}
            key={date.format('YYYY-MM-DD')}
          >
            <div className='text-right h-6'>
              <span className={`${isDateInCurrentMonth(date) ? '' : 'text-gray-200'}`}>{date.date()}</span>
            </div>

            <div className='overflow-auto scrollbar h-[calc(100%-1.5rem)]'>
              {meetings[date.format('YYYY-MM-DD')] &&
                meetings[date.format('YYYY-MM-DD')].map((meeting) => (
                  <div className='bg-slate-100 rounded-sm mt-2 text-gray-950 text-sm py-1 px-2 flex gap-1 items-center shadow-md cursor-pointer'>
                    <div className='w-1 h-4 bg-blue-600 ' key={meeting.id}></div>
                    <div className='flex truncate flex-1 gap-2'>
                      <span>{meeting.startTime}</span> <span className='truncate'>{meeting.name}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
})

const CalendarByWeek = memo(() => {
  const time = ['8am', '9am', '10am', '11am', '12am', '13pm', '14pm', '15pm', '16pm', '17pm', '18pm', '19pm', '20pm', '21pm', '22pm']
  console.log(getCurrentWeek())

  return (
    <div className='flex h-full overflow-auto scrollbar'>
      <div className='w-24'>
        <div className='h-20 border-r bg-cyan-50/100'></div>
        {time.map((t) => (
          <div className='h-36 text-gray-500/80 text-center border-r bg-cyan-50/80'>{t}</div>
        ))}
      </div>

      <div className='flex-1 grid grid-cols-7'>
        {getCurrentWeek().map((date) => (
          <div className='h-full border-r  last:border-r-0' key={date.format('YYYY-MM-DD')}>
            <div className=' flex flex-col gap-2 justify-center items-center h-20 border-b'>
              <span className='font-bold'>{date.format('DD')}</span>
              <div className='text-sm text-gray-500/80'>{date.format('dddd')}</div>
            </div>

            <div>
              {time.map((t) => (
                <div key={t} className='h-36 border-b'>
                  {t}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

export default CalendarPage
