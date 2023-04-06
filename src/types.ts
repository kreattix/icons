export type IconNames =
  | 'Add'
  | 'Avatar'
  | 'Check'
  | 'CheckCircle'
  | 'Delete'
  | 'Home'
  | 'InfoCircle'
  | 'Menu'
  | 'MenuLeft'
  | 'MenuRight'
  | 'Remove'
  | 'Search'
  | 'Settings'

export interface IconNameListProps {
  [key: string]:
    | string
    | React.FunctionComponent<Record<string, unknown>>
    | React.ComponentClass<Record<string, unknown>, unknown>
}
