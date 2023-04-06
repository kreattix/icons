export type IconNames =
  | 'Logo'
  | 'Close'
  | 'Plus'
  | 'Left'
  | 'Right'
  | 'Up'
  | 'Down'
  | 'ArrowLeft'
  | 'ArrowRight'

export interface IconNameListProps {
  [key: string]:
    | string
    | React.FunctionComponent<Record<string, unknown>>
    | React.ComponentClass<Record<string, unknown>, unknown>
}
