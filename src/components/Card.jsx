import React from 'react'

function Card(props) {
  return (
    <div className='card' onClick={() => {props.clickHandler(props.key)}}>
        <img src={props.imageUrl} alt={props.name + 'image'} />
        <p> {props.name} </p>
    </div>
  )
}

export default Card