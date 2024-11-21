import { memo, useState } from 'react'

import { MenuType } from '@/types'

import { Input } from '@/components/ui/input'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

import DataFilterButton from '@/components/data-filter-button'

import ShowMenu from '@/components/show-menu'

import MeetingRoomItemV1 from './cnps/MeetingRoomItemV1'
import MeetingRoomItemV2 from './cnps/MeetingRoomItemV2'

import { filterData } from '@/data/meetingRoom.ts'

import { useFilterLogic } from '@/hooks/useFilterLogic'

const MeetingRoomList = memo(() => {
  //条件数据
  const { filter, selectedHandle, selectedResetHandle } = useFilterLogic(filterData)

  const [showMenu, setShowMenu] = useState<MenuType>('grid')

  //切换展现形式
  function showMenuHandle(menu: MenuType) {
    setShowMenu(menu)
  }

  return (
    <div className='flex flex-col h-full max-h-full'>
      <div className='flex items-center justify-between h-10'>
        <div className='flex flex-1 items-center space-x-2'>
          <Input placeholder='Filter tasks...' className='h-8 w-[150px] lg:w-[250px]' />

          <DataFilterButton filterData={filter} selectedHandle={selectedHandle} selectedResetHandle={selectedResetHandle}></DataFilterButton>
        </div>

        <ShowMenu showMenu={showMenu} showMenuHandle={showMenuHandle}></ShowMenu>
      </div>

      {showMenu == 'grid' ? (
        <div
          className='mt-8 grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3  xxl:grid-cols-4
       overflow-auto flex-1  max-h-[calc(100%-5.25rem)] scrollbar'
        >
          <MeetingRoomItemV1></MeetingRoomItemV1>
          <MeetingRoomItemV1></MeetingRoomItemV1>

          <MeetingRoomItemV1></MeetingRoomItemV1>

          <MeetingRoomItemV1></MeetingRoomItemV1>

          <MeetingRoomItemV1></MeetingRoomItemV1>

          <MeetingRoomItemV1></MeetingRoomItemV1>

          <MeetingRoomItemV1></MeetingRoomItemV1>
        </div>
      ) : (
        <div className='mt-8   h-[calc(100%-5.25rem)]  rounded-md border bg-white overflow-auto flex-1  max-h-[calc(100%-5.25rem)] scrollbar'>
          <MeetingRoomItemV2></MeetingRoomItemV2>
        </div>
      )}

      <div className='py-8 flex h-11'>
        <Pagination className='!justify-end'>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#' isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
})

export default MeetingRoomList
