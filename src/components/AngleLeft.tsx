import * as React from 'react'
import { SVGProps } from 'react'

const SvgAngleLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.707 2.293a1 1 0 0 1 0 1.414L7.414 10l6.293 6.293a1 1 0 0 1-1.414 1.414l-6.647-6.646a1.5 1.5 0 0 1 0-2.122l6.647-6.646a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgAngleLeft
