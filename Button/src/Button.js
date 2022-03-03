import React from 'react'

const Button = (props) => {
  return (
    <button
      onClick={() => {
        console.log('Button')
      }}
    >
      {props.label}
    </button>
  )
}

export default Button
