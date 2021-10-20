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

interface DemoProps {
  idPrefix: string
}

const Demo1 = ({ idPrefix }: DemoProps) => (
  <svg>
    <filter id={`${idPrefix}-filter`}>
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
      filter={`url(#${idPrefix}-filter)`}
    >
      Tyler
    </text>
  </svg>
)

const DEMOS = [{ Component: Demo1, label: 'Blur with animation' }]

const App = () => (
  <ol>
    {DEMOS.map(({ Component, label }, i) => (
      <li key={i}>
        <label>{`${i + 1}. ${label}`}</label>
        <Component idPrefix={`demo-${i + 1}`} />
      </li>
    ))}
  </ol>
)

ReactDom.render(<App />, document.getElementById('app'))
