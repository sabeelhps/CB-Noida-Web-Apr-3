import React from 'react'

const Hello = (props) => {
  return (
      <div>
          {/* <h3>Hello from { props.name }</h3> */}
          {props.children}
    </div>
  )
}

export default Hello;