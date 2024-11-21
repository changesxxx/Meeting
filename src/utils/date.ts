import dayjs from 'dayjs'


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
export function getToday(format:string = 'YYYY-MM-DD') { 
    return dayjs().format(format)
}


export function dateFormat(date:Date,format:string = 'YYYY-MM-DD') { 
    return dayjs(date).format(format)
}