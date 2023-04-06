import * as React from 'react'
import { SVGProps } from 'react'

const SvgInfoCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm1-15a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 8a1 1 0 0 1 2 0v7a1 1 0 1 1-2 0V8Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgInfoCircle
