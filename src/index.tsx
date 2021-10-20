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
      <feFlood floodColor="grey" result="Flood" />
      <feComposite in="Flood" in2="Blur" operator="in" result="DropShadow" />
      <feOffset in="DropShadow" dx="10" dy="10" result="DropShadow">
        <animate
          attributeName="dx"
          values="10;-10;10"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="dy"
          values="10;20;10"
          dur="2s"
          repeatCount="indefinite"
        />
      </feOffset>
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

const Demo4 = ({ idPrefix }: DemoProps) => (
  <svg width="600" height="400">
    <filter id={`${idPrefix}-filter`}>
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="
						1   0   0   0   0
            0   0   0   0   0
            0   0   0   0   0
            0   0   0   1   0 "
        result="Red"
      />
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="
						0   0   0   0   0
            0   1   0   0   0
            0   0   0   0   0
            0   0   0   1   0 "
        result="Green"
      />
      <feColorMatrix
        in="SourceGraphic"
        type="matrix"
        values="
						0   0   0   0   0
            0   0   0   0   0
            0   0   1   0   0
            0   0   0   1   0 "
        result="Blue"
      />
      <feComposite in="Red" in2="Green" operator="lighter" result="RedGreen" />
      <feComposite
        in="RedGreen"
        in2="Blue"
        operator="lighter"
        result="RedGreenBlue"
      />
      <feColorMatrix
        in="RedGreenBlue"
        type="matrix"
        values="
						1   0   0   0   0
            0   1   0   0   0
            0   0   1   0   0
            0   0   0   1   0 "
      />
    </filter>
    <image
      href="https://images.unsplash.com/photo-1633944241961-e511ab23455f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDc2NjQ3OA&ixlib=rb-1.2.1&q=80&w=600"
      width="600"
      height="400"
      filter={`url(#${idPrefix}-filter)`}
    >
      Tyler
    </image>
  </svg>
)

const Demo5 = ({ idPrefix }: DemoProps) => (
  <svg>
    <filter id={`${idPrefix}-filter`}>
      <feMorphology operator="dilate" radius="2 2" result="Morphed" />
      <feComposite
        in="SourceGraphic"
        in2="Morphed"
        operator="xor"
        result="Outline"
      />
      <feFlood floodColor="blue" result="Flood">
        <animate
          attributeName="flood-color"
          values="blue;cyan;blue"
          dur="2s"
          repeatCount="indefinite"
        />
      </feFlood>
      <feMerge>
        <feMergeNode in="Flood" />
        <feMergeNode in="Outline" />
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
      <animate
        attributeName="fill"
        values="white;black;white"
        dur="2s"
        repeatCount="indefinite"
      />
      Tyler
    </text>
  </svg>
)

const smoothTableValues = (n: number) =>
  _.times(n)
    .map((i) => i / (n - 1))
    .join(',')

const Demo6 = ({ idPrefix }: DemoProps) => (
  <svg width="600" height="800">
    <filter id={`${idPrefix}-filter`}>
      <feComponentTransfer>
        <feFuncG type="discrete" tableValues={smoothTableValues(4)} />
        <feFuncA type="identity" />
      </feComponentTransfer>
    </filter>
    <image
      href="https://images.unsplash.com/photo-1632084545916-9f7113450eac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDc3MTEzNQ&ixlib=rb-1.2.1&q=80&w=600"
      width="600"
      height="400"
      filter={`url(#${idPrefix}-filter)`}
    />
    <image
      href="https://images.unsplash.com/photo-1633944241961-e511ab23455f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDc2NjQ3OA&ixlib=rb-1.2.1&q=80&w=600"
      width="600"
      height="400"
      y="400"
      filter={`url(#${idPrefix}-filter)`}
    />
  </svg>
)

const greyscaleMatrix = (r: number, g: number, b: number) => `
  ${r} ${g} ${b} 0 0
  ${r} ${g} ${b} 0 0
  ${r} ${g} ${b} 0 0
  0    0    0    1 0
`

const Demo7 = ({ idPrefix }: DemoProps) => (
  <svg width="600" height="400">
    <filter id={`${idPrefix}-filter`}>
      <feColorMatrix type="matrix" values={greyscaleMatrix(1, 0, 0)} />
      <feComponentTransfer>
        <feFuncA type="identity" />
      </feComponentTransfer>
    </filter>
    <image
      href="https://images.unsplash.com/photo-1632084545916-9f7113450eac?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDc3MTEzNQ&ixlib=rb-1.2.1&q=80&w=600"
      width="600"
      height="400"
      filter={`url(#${idPrefix}-filter)`}
    />
  </svg>
)

const DEMOS = [
  { Component: Demo1, label: 'Blur' },
  { Component: Demo2, label: 'Flood' },
  { Component: Demo3, label: 'Drop Shadow' },
  { Component: Demo4, label: 'Color Matrix' },
  { Component: Demo5, label: 'Morph' },
  { Component: Demo6, label: 'Posterization' },
  { Component: Demo7, label: 'Greyscale' },
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
