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

const Demo2 = ({ idPrefix }: DemoProps) => (
  <svg>
    <filter id={`${idPrefix}-filter`}>
      <feFlood floodColor="rgba(255,0,0,.5)" floodOpacity=".5" result="Flood">
        <animate
          attributeName="flood-color"
          values="rgba(255,0,0,.5);rgba(0,0,255,.5);rgba(0,255,0,.5);rgba(255,0,0,.5)"
          dur="5s"
          repeatCount="indefinite"
        />
      </feFlood>
      <feMerge>
        <feMergeNode in="SourceGraphic" />
        <feMergeNode in="Flood" />
      </feMerge>
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

const Demo3 = ({ idPrefix }: DemoProps) => (
  <svg>
    <filter id={`${idPrefix}-filter`}>
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="Blur">
        <animate
          attributeName="stdDeviation"
          values="4;8;4"
          dur="2s"
          repeatCount="indefinite"
        />
      </feGaussianBlur>
      <feFlood floodColor="black" result="Flood" />
      <feComposite in="Flood" in2="Blur" operator="in" result="DropShadow" />
      <feOffset in="DropShadow" dx="10" dy="10" result="DropShadow" />
      <feMerge>
        <feMergeNode in="DropShadow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <text
      dx="10px"
      dy="10px"
      fill="red"
      fontFamily="Space Mono"
      fontSize="80px"
      dominantBaseline="hanging"
      filter={`url(#${idPrefix}-filter)`}
    >
      Tyler
    </text>
  </svg>
)

const DEMOS = [
  { Component: Demo1, label: 'Blur' },
  { Component: Demo2, label: 'Flood' },
  { Component: Demo3, label: 'Drop Shadow' },
]

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
