import React, { useState } from 'react'

const Tour = ({id, name , info , price , image , Fun}) => {
  const [state , setState] = useState(true)
  const text = state?`
  ${info.substring(0,200)}
  `:info
  return (
    <div className='single-tour'>
        <article>
            <img src={image} alt={name}/> 
        </article>
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>{price}$</h4>
          </div>
          <p>{text} <button onClick={()=> setState(!state)}>{state?"Read More":"Show Less"}</button></p>
          <button onClick={()=>Fun(id)} className='delete-btn'>Not Interested</button>
        </footer>
    </div>
  )
}

export default Tour