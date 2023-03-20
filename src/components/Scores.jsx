import React from 'react'

function Scores(props) {
  return (
    <div>
        <p>Score:{props.score}</p>
        <p>Best score:{props.bestScore}</p>
    </div>
  )
}

export default Scores