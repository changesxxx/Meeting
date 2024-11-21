import { memo } from 'react'

import { MenuType } from '@/types'

interface ShowMenuProps {
  showMenu: MenuType
  showMenuHandle: (menu: MenuType) => void
}

import { LayoutGrid, List } from 'lucide-react'

const showMenu = memo(({ showMenu, showMenuHandle }: ShowMenuProps) => {
  return (
    <div className='flex items-center rounded-lg overflow-hidden'>
      <div
        className={`flex-1 flex items-center px-3 py-2 cursor-pointer  ${showMenu == 'grid' ? 'bg-primary/60 text-white' : 'bg-gray-200'}`}
        onClick={() => showMenuHandle('grid')}
      >
        <LayoutGrid size={18} />
      </div>
      <div
        className={`flex-1 flex items-center px-3 py-2 cursor-pointer ${showMenu == 'list' ? 'bg-primary/60 text-white' : 'bg-gray-200'}`}
        onClick={() => showMenuHandle('list')}
      >
        <List size={18}></List>
      </div>
    </div>
  )
})

export default showMenu
