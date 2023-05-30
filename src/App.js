import React, { useState } from 'react'

const Svetovor = () => {
  const [isRed, setIsRed] = useState(true)

  const handleClick = () => {
    setIsRed(!isRed)
  }

  const squareStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: isRed ? 'red' : 'blue',
    cursor: 'pointer'
  }

  return (
      <div>
        <div
            style={squareStyle}
            onClick={handleClick}
        />
        <div
            style={{ ...squareStyle, backgroundColor: isRed ? 'blue' : 'red' }}
            onClick={handleClick}
        />
      </div>
  )
}

export default Svetovor;