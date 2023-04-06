import * as React from 'react'
import { SVGProps } from 'react'

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 3a1 1 0 0 1 1-1h2.5l.707-.707A1 1 0 0 1 7.914 1h4.172a1 1 0 0 1 .707.293L13.5 2H16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM4 6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
    />
  </svg>
)
export default SvgDelete
