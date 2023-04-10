import * as React from 'react'
import { SVGProps } from 'react'

const SvgAngleRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.293 17.707a1 1 0 0 1 0-1.414L12.586 10 6.293 3.707a1 1 0 0 1 1.414-1.414l6.647 6.646a1.5 1.5 0 0 1 0 2.122l-6.647 6.646a1 1 0 0 1-1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgAngleRight
