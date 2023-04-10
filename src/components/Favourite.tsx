import * as React from 'react'
import { SVGProps } from 'react'

const SvgFavourite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.222 10.536a5 5 0 1 1 7.07-7.072l.708.708.707-.708a5 5 0 0 1 7.071 7.072l-7.424 7.424a.5.5 0 0 1-.708 0l-7.424-7.425Z"
    />
  </svg>
)
export default SvgFavourite
