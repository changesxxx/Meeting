import { memo } from 'react'

import { cn } from '@/lib/utils'

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'

import { Separator } from '@/components/ui/separator'

import { Badge } from '@/components/ui/badge'

import { Button } from '@/components/ui/button'

import { PlusCircle, Check, X } from 'lucide-react'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface FilterObj {
  text: string
  selected?: boolean
}

interface Filter {
  label: string
  filter: FilterObj[]
}

interface DataFilterButtonProps {
  filterData: Filter[]
  selectedHandle: (label: string, filterTtext: string) => void
  selectedResetHandle: () => void
}

const DataFilterButton = memo(({ filterData, selectedHandle, selectedResetHandle }: DataFilterButtonProps) => {
  const filterSelected = new Map()

  filterData.forEach((data) => {
    if (data.filter.filter((f) => f.selected).length > 0) {
      filterSelected.set(
        data.label,
        data.filter.filter((f) => f.selected)
      )
    }
  })

  return (
    <>
      {filterData.map((data) => (
        <Popover key={data.label}>
          <PopoverTrigger className='border-dashed border border-primary text-xs font-medium px-3 bg-background  text-primary h-8 inline-flex justify-center gap-2 items-center rounded-md hover:bg-accent hover:text-primary /80  shadow-sm transition-colors whitespace-nowrap'>
            <PlusCircle size={'16'}></PlusCircle>
            {data.label}
            {filterSelected.get(data.label) && (
              <>
                <Separator orientation='vertical' className='w-[1px] mx-2 h-4' />
                {filterSelected.get(data.label).length > 0 && filterSelected.get(data.label).length <= 3 ? (
                  <>
                    {data.filter
                      .filter((f) => f.selected)
                      .map((f) => (
                        <Badge variant={'outline'} className='bg-secondary rounded-sm text-secondary-foreground font-normal' key={f.text}>
                          <span>{f.text}</span>
                        </Badge>
                      ))}
                  </>
                ) : (
                  <Badge variant={'outline'} className='bg-secondary rounded-sm text-secondary-foreground font-normal'>
                    <span>{data.filter.filter((f) => f.selected).length} 个条件</span>
                  </Badge>
                )}
              </>
            )}
          </PopoverTrigger>
          <PopoverContent className='w-[200px] p-0' align='start'>
            <Command>
              <CommandInput placeholder={data.label}></CommandInput>
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {data.filter.map((filter) => (
                    <CommandItem
                      key={filter.text}
                      onSelect={(e) => {
                        selectedHandle(data.label, filter.text)
                      }}
                    >
                      <div
                        className={cn(
                          'mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary ',
                          filter.selected ? 'bg-primary text-primary-foreground' : 'opacity-50 [&_svg]:invisible'
                        )}
                      >
                        <Check />
                      </div>
                      <span>{filter.text}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      ))}
      <div>
        {filterSelected.size > 0 && (
          <Button variant='ghost' className='h-8 px-2 lg:px-3' onClick={() => selectedResetHandle()}>
            Reset
            <X />
          </Button>
        )}
      </div>
    </>
  )
})

export default DataFilterButton
