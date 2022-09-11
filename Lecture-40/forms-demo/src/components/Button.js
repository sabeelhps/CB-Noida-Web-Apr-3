import React from 'react';

const Button = (props) => {
  return (
      <button style={{backgroundColor:props.color}}>{  props.btnText }</button>
  )
}

export default Button;