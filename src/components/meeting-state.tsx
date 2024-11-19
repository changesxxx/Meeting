import { memo } from 'react'

interface MeetingStateProps {
  state: 'used' | 'idle' | 'end'
}

const colorMap = {
  used: 'fill-sky-400 text-sky-400',
  idle: 'fill-lime-400 text-lime-400',
  end: 'fill-orange-400 text-orange-400'
}

const MeetingState = memo(({ state }: MeetingStateProps) => {
  const styleText = colorMap[state]

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`lucide lucide-circle mr-1 h-3 w-3 ${styleText}`}
    >
      <circle cx='12' cy='12' r='10'></circle>
    </svg>
  )
})

export default MeetingState
