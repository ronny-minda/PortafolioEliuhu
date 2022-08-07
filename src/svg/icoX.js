import * as React from "react"
import styled from "styled-components"

const Ssvg = styled.svg`
    /* background-color: red; */
    position: fixed;
    top: -100px;
    right: -100px;
    transform: scale(0.15) ;

    path {
        fill: #ECECEC;
        transition: 0.1s;
    }
    &:hover {
        path {
            fill: #9B9B9B;
        }
    }

    

`;

const SvgComponent = (props) => (
  <Ssvg
    xmlns="http://www.w3.org/2000/svg"
    width={256}
    height={256}
    xmlSpace="preserve"
    {...props}
  >
    <g
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
    >
      <path
        d="M13.4 88.492 1.508 76.6a5.149 5.149 0 0 1 0-7.282l67.81-67.81a5.149 5.149 0 0 1 7.282 0L88.492 13.4a5.149 5.149 0 0 1 0 7.282l-67.81 67.81a5.149 5.149 0 0 1-7.282 0z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
      <path
        d="m69.318 88.492-67.81-67.81a5.149 5.149 0 0 1 0-7.282L13.4 1.508a5.149 5.149 0 0 1 7.282 0l67.809 67.809a5.149 5.149 0 0 1 0 7.282L76.6 88.492a5.149 5.149 0 0 1-7.282 0z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          
          fillRule: "nonzero",
          opacity: 1,
        }}
        transform="matrix(2.81 0 0 2.81 1.407 1.407)"
      />
    </g>
  </Ssvg>
)

export default SvgComponent
