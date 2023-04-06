import * as React from 'react'
import { SVGProps } from 'react'

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.707 4.293a1 1 0 0 1 0 1.414l-9.93 9.93a1.1 1.1 0 0 1-1.555 0l-3.93-3.93a1 1 0 1 1 1.415-1.414L7 13.586l9.293-9.293a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgCheck
