import * as React from 'react'
import { SVGProps } from 'react'

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.331 1.602.968 9.128a.5.5 0 0 0 .335.872H3v7a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-5h3v5a1 1 0 0 0 1 1H16a1 1 0 0 0 1-1v-7h1.697a.5.5 0 0 0 .335-.872l-8.363-7.526a1 1 0 0 0-1.338 0Z"
    />
  </svg>
)
export default SvgHome
