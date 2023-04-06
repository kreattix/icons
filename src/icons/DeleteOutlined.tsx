import * as React from 'react'
import { SVGProps } from 'react'

const SvgDeleteOutlined = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 3a1 1 0 0 1 1-1h2.5l.707-.707A1 1 0 0 1 7.914 1h4.172a1 1 0 0 1 .707.293L13.5 2H16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M6 7v10h8V7H6ZM5 5a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a1 1 0 0 0-1-1H5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgDeleteOutlined
