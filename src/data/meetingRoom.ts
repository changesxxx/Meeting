import {Filter} from '@/types'

export const filterData :Filter[]= [
  {
    label: 'state',
    filter: [
      {
        text: 'user'
      },
      {
        text: 'end'
      },
      {
        text: 'staet'
      },
      {
        text: 'none'
      }
    ]
  },
  {
    label: 'type',
    filter: [
      {
        text: '普通'
      },
      {
        text: '大型会议室'
      },
      {
        text: '中小会议室'
      }
    ]
  }
]
