export type MenuType = 'grid' | 'list'


export interface FilterObj {
  text: string
  selected?: boolean
}

export interface Filter {
  label: string
  filter: FilterObj[]
}