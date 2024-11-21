import { memo, useState } from 'react'

import { MenuType } from '@/types'

import SearchInput from '@/components/search-input'

import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'

import { Card } from '@/components/ui/card'

import { Separator } from '@/components/ui/separator'

import ShowMenu from '@/components/show-menu'

import { CalendarIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { dateFormat } from '@/utils/date'

import DataFilterButton from '@/components/data-filter-button'

import { useFilterLogic } from '@/hooks/useFilterLogic'

import { filterData } from '@/data/meetingRoom.ts'

const CalendarPage = memo(() => {
  const [showMenu, setShowMenu] = useState<MenuType>('grid')

  const [date, setDate] = useState<Date>(new Date())

  //条件数据
  const { filter, selectedHandle, selectedResetHandle } = useFilterLogic(filterData)

  console.log('date', date)

  //切换展现形式
  function showMenuHandle(menu: MenuType) {
    setShowMenu(menu)
  }

  return (
    <div className='h-full'>
      <header>
        <div className='flex justify-between'>
          {/*  <Popover>
            <PopoverTrigger asChild>
              <Button variant={'outline'} className={cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')}>
                <CalendarIcon />
                <span>{dateFormat(date)}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar mode='single' selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover> */}
          <div className='flex gap-4 items-center'>
            <SearchInput className='w-64'></SearchInput>

            <DataFilterButton filterData={filter} selectedHandle={selectedHandle} selectedResetHandle={selectedResetHandle}></DataFilterButton>
          </div>

          <ShowMenu showMenu={showMenu} showMenuHandle={showMenuHandle}></ShowMenu>
        </div>
      </header>
      <Separator className='my-4' />

      <main>
        <Card>2</Card>
      </main>
    </div>
  )
})

export default CalendarPage
