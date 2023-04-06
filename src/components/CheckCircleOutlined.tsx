import * as React from 'react'
import { SVGProps } from 'react'

const SvgCheckCircleOutlined = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M15.707 6.293a1 1 0 0 1 0 1.414l-6.93 6.93a1.1 1.1 0 0 1-1.555 0l-2.93-2.93a1 1 0 1 1 1.415-1.414L8 12.586l6.293-6.293a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCheckCircleOutlined
