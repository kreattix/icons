import * as React from 'react'
import { SVGProps } from 'react'

const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm5.707-12.293a1 1 0 0 0-1.414-1.414L8 12.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l2.93 2.93a1.1 1.1 0 0 0 1.555 0l6.93-6.93Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCheckCircle
