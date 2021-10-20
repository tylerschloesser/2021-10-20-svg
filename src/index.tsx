import React from 'react'
import ReactDom from 'react-dom'

const App = () => (
  <svg>
    <text color="black" fontSize="80px" dominantBaseline="hanging">
      Tyler
    </text>
  </svg>
)

ReactDom.render(<App />, document.getElementById('app'))
