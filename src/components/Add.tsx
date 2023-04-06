import * as React from 'react'
import { SVGProps } from 'react'

const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M10 1a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H2a1 1 0 1 1 0-2h7V2a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgAdd
