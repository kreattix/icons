import * as React from 'react'
import { SVGProps } from 'react'

const SvgAngleDown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.293 6.293a1 1 0 0 1 1.414 0L10 12.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-6.646 6.647a1.5 1.5 0 0 1-2.122 0L2.293 7.707a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgAngleDown
