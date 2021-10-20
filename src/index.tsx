import React from 'react'
import ReactDom from 'react-dom'

// <animate
//   calcMode="paced"
//   attributeName="font-size"
//   values="80px;100px;80px"
//   dur="5s"
//   repeatCount="indefinite"
// />

const App = () => (
  <svg>
    <text color="black" fontSize="80px" dominantBaseline="hanging">
      Tyler
    </text>
  </svg>
)

ReactDom.render(<App />, document.getElementById('app'))
