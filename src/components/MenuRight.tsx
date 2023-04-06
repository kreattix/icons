import * as React from 'react'
import { SVGProps } from 'react'

const SvgMenuRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M1 5c0-.552.504-1 1.125-1h15.75C18.496 4 19 4.448 19 5s-.504 1-1.125 1H2.125C1.504 6 1 5.552 1 5ZM8 15c0-.552.492-1 1.1-1h8.8c.608 0 1.1.448 1.1 1s-.492 1-1.1 1H9.1c-.608 0-1.1-.448-1.1-1ZM1 10c0-.552.504-1 1.125-1h15.75C18.496 9 19 9.448 19 10s-.504 1-1.125 1H2.125C1.504 11 1 10.552 1 10Z"
    />
  </svg>
)
export default SvgMenuRight
