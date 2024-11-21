import { useState, useCallback } from 'react'

import { Filter } from '@/types'

export const useFilterLogic = (initialFilter: Filter[]) => {
  const [filter, setFilter] = useState<Filter[]>(initialFilter)

  const selectedHandle = useCallback(
    (label: string, filterText: string) => {
      const newFilter = filter.map((f) => ({
        ...f,
        filter: f.filter.map((item) => ({ ...item }))
      }))

      const filterObj = newFilter.find((f) => f.label === label)?.filter.find((f) => f.text === filterText)

      if (filterObj?.selected) {
        filterObj.selected = !filterObj.selected
      } else {
        filterObj!.selected = true
      }

      setFilter(newFilter)
    },
    [filter]
  )

  const selectedResetHandle = useCallback(() => {
    setFilter(initialFilter)
  }, [initialFilter])

  return { filter, selectedHandle, selectedResetHandle }
}
