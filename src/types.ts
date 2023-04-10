export type IconNames =
  | 'Add'
  | 'AngleLeft'
  | 'AngleRight'
  | 'AngleUp'
  | 'AngleDown'
  | 'Avatar'
  | 'Check'
  | 'CheckCircle'
  | 'Delete'
  | 'Favourite'
  | 'Home'
  | 'InfoCircle'
  | 'MenuLeft'
  | 'MenuRight'
  | 'Menu'
  | 'Remove'
  | 'Search'
  | 'Settings'

export interface IconNameListProps {
  [key: string]:
    | string
    | React.FunctionComponent<Record<string, unknown>>
    | React.ComponentClass<Record<string, unknown>, unknown>
}
