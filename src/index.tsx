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
//

const Demo1 = () => (
  <svg>
    <filter id="filter">
      <feGaussianBlur stdDeviation="1">
        <animate
          attributeName="stdDeviation"
          values="1;2;3;4;5"
          dur="5s"
          repeatCount="indefinite"
        />
      </feGaussianBlur>
    </filter>
    <text
      dx="10px"
      dy="10px"
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

const App = () => (
  <>
    <Demo1 />
  </>
)

ReactDom.render(<App />, document.getElementById('app'))
