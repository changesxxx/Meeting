export interface MeetingObject {
  createTime: string
  creator: Creator
  creatorName: string
  endDate: string
  endTime: string
  id: string
  lianXiRen: string
  lianXiRenPhone: string
  meetingDate: string
  meetingRoom: MeetingRoom
  meetingRoomIds: string
  meetingRoomNames: string
  name: string
  personCount: number
  startTime: string
  state: string
  version: number
  xuYueTimes: number
  zuhuId: string
  user?: string
}
interface MeetingRoom {
  daShaoShiJian: number
  id: string
  louCeng: LouCeng
  name: string
  version: number
  zhunBeiShiJian: number
  zuhuId: string
}
interface LouCeng {
  name: string
  version: number
  zuhuId: string
}
interface Creator {
  errorTimes: number
  id: string
}

type Meetings = {
  [date: string]: MeetingObject[]
}

export const meetingList: MeetingObject[] = [
  {
    createTime: '2024-11-04 11:31:39',
    creator: {
      errorTimes: 0,
      id: '11'
    },
    creatorName: '刘晋',
    endDate: '2024-11-06 23:59:58',
    endTime: '11:05',
    id: '24110411313953512',
    lianXiRen: '刘晋',
    lianXiRenPhone: '18610049820',
    meetingDate: '2024-11-06',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '22053017051665265',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '簪菊',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '22053017051665265',
    meetingRoomNames: '金尚源 金尚源 簪菊',
    name: '美团大众团购',
    personCount: 1,
    startTime: '09:00',
    state: '已结束',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-10-28 19:33:06',
    creator: {
      errorTimes: 0,
      id: 'HongZhuanHeng'
    },
    creatorName: '洪专恒',
    endDate: '2024-10-29 23:59:58',
    endTime: '11:00',
    id: '241028193306326407',
    lianXiRen: '洪专恒',
    lianXiRenPhone: '13120163566',
    meetingDate: '2024-10-29',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '220530170723752266',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '明强MingQiang',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '220530170723752266',
    meetingRoomNames: '金尚源 金尚源 明强MingQiang',
    name: 'Membership讨论',
    personCount: 8,
    startTime: '10:00',
    state: '已结束',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-11-08 14:36:42',
    creator: {
      errorTimes: 0,
      id: 'HongZhuanHeng'
    },
    creatorName: '洪专恒',
    endDate: '2024-11-12 23:59:58',
    endTime: '11:00',
    id: '241108143642911645',
    lianXiRen: '洪专恒',
    lianXiRenPhone: '13120163566',
    meetingDate: '2024-11-12',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '220830101307119157',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '拙诚ZhuoCheng',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '220830101307119157',
    meetingRoomNames: '金尚源 金尚源 拙诚ZhuoCheng',
    name: '小程序会员',
    personCount: 3,
    startTime: '10:00',
    state: '已结束',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-11-18 14:59:49',
    creator: {
      errorTimes: 0,
      id: 'HongZhuanHeng'
    },
    creatorName: '洪专恒',
    endDate: '2024-11-19 23:59:58',
    endTime: '11:00',
    id: '241118145949291767',
    lianXiRen: '洪专恒',
    lianXiRenPhone: '13120163566',
    meetingDate: '2024-11-19',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '220830101307119157',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '拙诚ZhuoCheng',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '220830101307119157',
    meetingRoomNames: '金尚源 金尚源 拙诚ZhuoCheng',
    name: '金尚会员小程序讨论',
    personCount: 4,
    startTime: '10:00',
    state: '已结束',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-10-31 10:12:20',
    creator: {
      errorTimes: 0,
      id: 'fbbdf9e93a4f4dada7f06003c5b2a3a4'
    },
    creatorName: '管理员',
    endDate: '2024-10-31 23:59:58',
    endTime: '12:00',
    id: '241031101220646470',
    lianXiRen: '管理员',
    lianXiRenPhone: '13436588803',
    meetingDate: '2024-10-31',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '220530171457609270',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '忆菊',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '220530171457609270',
    meetingRoomNames: '金尚源 金尚源 忆菊',
    name: '测试',
    personCount: 1,
    startTime: '10:15',
    state: '已取消',
    user: '44522222钉钉的',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-11-06 11:01:08',
    creator: {
      errorTimes: 0,
      id: '11'
    },
    creatorName: '刘晋',
    endDate: '2024-11-09 23:59:58',
    endTime: '12:05',
    id: '241106110108139551',
    lianXiRen: '刘晋',
    lianXiRenPhone: '18610049820',
    meetingDate: '2024-11-09',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '220830101307119157',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '拙诚ZhuoCheng',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '220830101307119157',
    meetingRoomNames: '金尚源 金尚源 拙诚ZhuoCheng',
    name: '美团教培',
    personCount: 1,
    startTime: '10:25',
    state: '已结束',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-11-21 09:59:07',
    creator: {
      errorTimes: 0,
      id: '11'
    },
    creatorName: '刘晋',
    endDate: '2024-11-21 23:59:58',
    endTime: '12:30',
    id: '241121095907724855',
    lianXiRen: '刘晋',
    lianXiRenPhone: '18610049820',
    meetingDate: '2024-11-21',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '22053017051665265',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '簪菊',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '22053017051665265',
    meetingRoomNames: '金尚源 金尚源 簪菊',
    name: '美团团购',
    personCount: 1,
    startTime: '10:25',
    state: '已结束',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-10-31 11:10:37',
    creator: {
      errorTimes: 0,
      id: 'fbbdf9e93a4f4dada7f06003c5b2a3a4'
    },
    creatorName: '管理员',
    endDate: '2024-10-31 23:59:58',
    endTime: '14:00',
    id: '241031111037958477',
    lianXiRen: '管理员',
    lianXiRenPhone: '13436588803',
    meetingDate: '2024-10-31',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '220530171457609270',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '忆菊',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '220530171457609270',
    meetingRoomNames: '金尚源 金尚源 忆菊',
    name: '测试',
    personCount: 1,
    startTime: '11:20',
    state: '已取消',
    user: '44522222钉钉的',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-11-20 11:47:02',
    creator: {
      errorTimes: 0,
      id: 'fbbdf9e93a4f4dada7f06003c5b2a3a4'
    },
    creatorName: '管理员',
    endDate: '2024-11-20 23:59:58',
    endTime: '13:00',
    id: '241120114702357840',
    lianXiRen: '管理员',
    lianXiRenPhone: '13436588803',
    meetingDate: '2024-11-20',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '220530171457609270',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '忆菊',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '220530171457609270',
    meetingRoomNames: '金尚源 金尚源 忆菊',
    name: '测试',
    personCount: 1,
    startTime: '11:50',
    state: '已结束',
    user: '44522222钉钉的',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-10-31 12:14:33',
    creator: {
      errorTimes: 0,
      id: 'fbbdf9e93a4f4dada7f06003c5b2a3a4'
    },
    creatorName: '管理员',
    endDate: '2024-10-31 23:59:58',
    endTime: '14:45',
    id: '241031121433611484',
    lianXiRen: '管理员',
    lianXiRenPhone: '13436588803',
    meetingDate: '2024-10-31',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '220530171457609270',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '忆菊',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '220530171457609270',
    meetingRoomNames: '金尚源 金尚源 忆菊',
    name: '测试',
    personCount: 1,
    startTime: '12:55',
    state: '已结束',
    user: '44522222钉钉的',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-10-30 13:20:53',
    creator: {
      errorTimes: 0,
      id: '4'
    },
    creatorName: '李聪颖',
    endDate: '2024-10-30 23:59:58',
    endTime: '16:30',
    id: '241030132053803441',
    lianXiRen: '李聪颖',
    lianXiRenPhone: '13811128063',
    meetingDate: '2024-10-30',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '22053017051665265',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '簪菊',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '22053017051665265',
    meetingRoomNames: '金尚源 金尚源 簪菊',
    name: 'CBC项目会',
    personCount: 1,
    startTime: '13:25',
    state: '已结束',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-11-06 13:10:46',
    creator: {
      errorTimes: 0,
      id: '453'
    },
    creatorName: '韩宇宙',
    endDate: '2024-11-06 23:59:58',
    endTime: '15:05',
    id: '241106131046792587',
    lianXiRen: '韩宇宙',
    lianXiRenPhone: '18510771216',
    meetingDate: '2024-11-06',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '220617104634768071',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '访菊',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '220617104634768071',
    meetingRoomNames: '金尚源 金尚源 访菊',
    name: '宝马品牌学院IT设备供应商讲解会议',
    personCount: 2,
    startTime: '14:00',
    state: '已结束',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-11-25 14:01:39',
    creator: {
      errorTimes: 0,
      id: '11'
    },
    creatorName: '刘晋',
    endDate: '2024-11-26 23:59:58',
    endTime: '15:00',
    id: '241125140139259899',
    lianXiRen: '刘晋',
    lianXiRenPhone: '18610049820',
    meetingDate: '2024-11-26',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '220530170723752266',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '明强MingQiang',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '220530170723752266',
    meetingRoomNames: '金尚源 金尚源 明强MingQiang',
    name: '美团大众预订',
    personCount: 1,
    startTime: '14:25',
    state: '未开始',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  },
  {
    createTime: '2024-11-25 14:01:39',
    creator: {
      errorTimes: 0,
      id: '11'
    },
    creatorName: '刘晋',
    endDate: '2024-11-26 23:59:58',
    endTime: '16:00',
    id: '24112514013925989911',
    lianXiRen: '刘晋',
    lianXiRenPhone: '18610049820',
    meetingDate: '2024-11-26',
    meetingRoom: {
      daShaoShiJian: 5,
      id: '220530170723752266',
      louCeng: {
        name: '金尚源',
        version: 0,
        zuhuId: 'bj'
      },
      name: '明强MingQiang',
      version: 0,
      zhunBeiShiJian: 0,
      zuhuId: 'bj'
    },
    meetingRoomIds: '220530170723752266',
    meetingRoomNames: '金尚源 金尚源 明强MingQiang',
    name: '美团大众预订111',
    personCount: 1,
    startTime: '15:35',
    state: '未开始',
    version: 0,
    xuYueTimes: 0,
    zuhuId: 'bj'
  }
]

export const meetings: Meetings = {}

meetingList.forEach((meeting) => {
  const date = meeting.meetingDate // 获取会议日期

  // 如果该日期还没有在汇总对象中，初始化一个数组
  if (!meetings[date]) {
    meetings[date] = []
  }

  // 将当前会议数据添加到对应日期的数组中
  meetings[date].push(meeting)
})
