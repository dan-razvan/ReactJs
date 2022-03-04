import React from 'react'

const Button = (props) => {
  const { label } = props
  return (
    <button
      onClick={() => {
        console.log('Button')
      }}
    >
      {label}
    </button>
  )
}

export default Button
