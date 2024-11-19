import { memo, useState } from 'react'

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

import MeetingRoomItemV1 from './cnps/MeetingRoomItemV1'

import { filterData } from '@/data/meetingRoom.js'

interface FilterObj {
  text: string
  selected?: boolean
}

interface Filter {
  label: string
  filter: FilterObj[]
}

const MeetingRoomList = memo(() => {
  const [filter, setFilter] = useState<Filter[]>(filterData)

  function selectedHandle(label: string, filterText: string) {
    const newFilter = filter.map((f) => ({
      ...f,
      filter: f.filter.map((item) => ({ ...item }))
    }))

    const filterObj = newFilter.find((f) => f.label == label)?.filter.find((f) => f.text == filterText)

    if (filterObj?.selected) {
      filterObj!.selected = !filterObj!.selected
    } else {
      filterObj!.selected = true
    }

    setFilter(newFilter)
  }

  function selectedResetHandle() {
    setFilter(filterData)
  }

  return (
    <div className='flex flex-col justify-between h-full max-h-full'>
      <div className='flex items-center justify-between h-10'>
        <div className='flex flex-1 items-center space-x-2'>
          <Input placeholder='Filter tasks...' className='h-8 w-[150px] lg:w-[250px]' />

          <DataFilterButton filterData={filter} selectedHandle={selectedHandle} selectedResetHandle={selectedResetHandle}></DataFilterButton>
        </div>

        <div>111</div>
      </div>

      <div
        className='mt-8 grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-3  xxl:grid-cols-4
       overflow-auto flex-1  max-h-[calc(100%-5.25rem)]'
      >
        <MeetingRoomItemV1></MeetingRoomItemV1>
      </div>

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
