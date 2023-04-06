import * as React from 'react'
import { SVGProps } from 'react'

const SvgAvatar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10Zm-7-2.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 7.423C4 14.153 7.585 13 10 13s6 1.154 6 1.923c0 0-2.025 3.077-6 3.077s-6-3.077-6-3.077Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgAvatar
