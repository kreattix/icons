import * as React from 'react'
import { SVGProps } from 'react'

const SvgInfoCircleOutlined = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M9 8a1 1 0 0 1 2 0v7a1 1 0 1 1-2 0V8ZM11 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
    />
  </svg>
)
export default SvgInfoCircleOutlined
