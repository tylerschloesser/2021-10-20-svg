import React from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'

// <animate
//   calcMode="paced"
//   attributeName="font-size"
//   values="80px;100px;80px"
//   dur="5s"
//   repeatCount="indefinite"
// />

const App = () => (
  <svg>
    <defs>
      <filter id="filter">
        <feMorphology
          radius="4"
          operator="dilate"
          in="SourceAlpha"
          result="BEVEL_10"
        />
        <feConvolveMatrix
          order="3,3"
          kernelMatrix="1 0 0 0 1 0 0 0 1"
          in="BEVEL_10"
          result="BEVEL_20"
        />
        <feOffset dx="4" dy="4" in="BEVEL_20" result="BEVEL_30" />
        <feComposite
          operator="out"
          in="BEVEL_20"
          in2="BEVEL_10"
          result="BEVEL_30"
        />
      </filter>
    </defs>
    <text
      color="black"
      fontFamily="Space Mono"
      fontSize="80px"
      dominantBaseline="hanging"
      filter="url(#filter)"
    >
      Tyler
    </text>
  </svg>
)

ReactDom.render(<App />, document.getElementById('app'))
