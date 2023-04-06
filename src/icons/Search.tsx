import * as React from 'react'
import { SVGProps } from 'react'

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.665 5.249a6.5 6.5 0 1 1 1.414-1.414l5.958 5.958a1 1 0 0 1-1.414 1.414l-5.958-5.958Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgSearch
