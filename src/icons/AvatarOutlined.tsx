import * as React from 'react'
import { SVGProps } from 'react'

const SvgAvatarOutlined = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.773 17.506A7.983 7.983 0 0 1 10 18a7.983 7.983 0 0 1-2.773-.494 8.114 8.114 0 0 1-2.432-1.439c.185-.08.393-.163.623-.245C6.808 15.328 8.582 15 10 15c1.418 0 3.192.328 4.582.822.23.082.438.164.623.245a8.114 8.114 0 0 1-2.433 1.44Zm3.829-2.986C14.963 13.65 12.195 13 10 13c-2.195 0-4.964.649-6.602 1.52a8 8 0 1 1 13.203 0Zm1.39 1.492A9.956 9.956 0 0 0 20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 2.256.747 4.338 2.008 6.012a10.023 10.023 0 0 0 4.693 3.431A9.864 9.864 0 0 0 10 20a9.97 9.97 0 0 0 7.183-3.043c.49-.498.76-.876.809-.945Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgAvatarOutlined
