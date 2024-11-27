import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import updateLocale from 'dayjs/plugin/updateLocale'
import 'dayjs/locale/zh-cn'
import isToday from 'dayjs/plugin/isToday'

import localizedFormat from 'dayjs/plugin/localizedFormat'

import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(calendar)
dayjs.extend(updateLocale)
dayjs.extend(isSameOrBefore)
dayjs.extend(isToday)
dayjs.extend(localizedFormat)
dayjs.locale('zh-cn')

dayjs.updateLocale('zh-cn', {
  weekStart: 1
})
/* 
Y	18	年
YY	18	年，两位数
YYYY	2018	年，四位数
M	1-12	月份，从 1 开始
MM	01-12	月份，两位数
D	1-31	日
DD	01-31	日，两位数
H	0-23	小时
HH	00-23	小时，两位数
m	0-59	分钟
mm	00-59	分钟，两位数
s	0-59	秒
ss	00-59	秒 两位数
SSS	000-999	毫秒 三位数
*/
export function getToday(format: string = 'YYYY-MM-DD') {
  return dayjs().format(format)
}

export function dateFormat(date: Date, format: string = 'YYYY-MM-DD') {
  return dayjs(date).format(format)
}

export function getCalendarByMonth(month: string = dayjs().format('YYYY-MM')) {
  const calendar = []

  const date = dayjs(month + '-01')

  let monthStartDate = date.startOf('month').startOf('week')

  const monthEndDate = date.endOf('month').endOf('week')

  while (monthStartDate.isSameOrBefore(monthEndDate)) {
    calendar.push(monthStartDate)

    monthStartDate = monthStartDate.add(1, 'day')
  }

  return calendar
}

// 判断日期是否是当月内
export function isDateInCurrentMonth(date: Dayjs) {
  const currentDate = dayjs()
  // 获取当前日期的年份和月份
  const currentYear = currentDate.year()
  const currentMonth = currentDate.month()

  // 获取传入日期的年份和月份
  const inputYear = date.year()
  const inputMonth = date.month()

  // 判断年份和月份是否相同

  console.log(currentMonth, inputMonth)

  return currentYear === inputYear && currentMonth === inputMonth
}

//获取指定日期周日期
export function getCurrentWeek(date: Dayjs = dayjs()) {
  const calendar = []

  let startDate = date.startOf('week')

  const endDate = date.endOf('week')

  while (startDate.isSameOrBefore(endDate)) {
    calendar.push(startDate)

    startDate = startDate.add(1, 'day')
  }

  return calendar
}

export function diffMinute(startTime: string, endTime: string) {
  return dayjs(endTime).diff(dayjs(startTime), 'minute')
}
