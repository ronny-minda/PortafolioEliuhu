import * as React from "react"
import styled from "styled-components"


const SSvg = styled.svg`
  height: 300px;
  width: 300px;
  transform: scale(0.8);
  fill: #fff;
  
  transition: 0.2s;
  &:hover {
    fill: #fff6;
  }
`;

const SvgComponent = (props) => (
  <SSvg
    xmlns="http://www.w3.org/2000/svg"

    style={{
      enableBackground: "new 0 0 284.929 284.929",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path d="m282.082 76.511-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856-2.471 0-4.661.95-6.563 2.856L142.466 174.441 30.262 62.241c-1.903-1.906-4.093-2.856-6.567-2.856-2.475 0-4.665.95-6.567 2.856L2.856 76.515C.95 78.417 0 80.607 0 83.082c0 2.473.953 4.663 2.856 6.565l133.043 133.046c1.902 1.903 4.093 2.854 6.567 2.854s4.661-.951 6.562-2.854L282.082 89.647c1.902-1.903 2.847-4.093 2.847-6.565 0-2.475-.945-4.665-2.847-6.571z" />
  </SSvg>
)

export default SvgComponent
