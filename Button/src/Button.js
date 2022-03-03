import React from 'react'

const Button = (props) => {
  return (
    <button
      onClick={() => {
        console.log('Button')
      }}
    >
      {props.title}
    </button>
  )
}

export default Button
