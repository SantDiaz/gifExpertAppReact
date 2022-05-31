import React from 'react'

export const GifGriditem = ({id, title, url}) => {
  
  console.log (id, title, url)
  
  
    return (
    <div className='card animate__animated  '>
        <img src  ={ url } alt = {title}></img>
        <p> { title } </p>
    </div>
  )
}
