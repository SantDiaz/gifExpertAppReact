//rafc crea esto de abajo !!

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
//  const categories = ; 

const [categories, setCategories] = useState(['Boca Juniors']);

const handleAdd = () => {
        // Manera 1 de agregar un elemento al array:
       //  setCategories ( [ ...categories, 'Changuito']); 

     //    Manera 2 de agregar un elemento al array:
    //     setCategories ( category => [ ...category, 'Changuito'])
}
  return (
    
      
      <>
            <h2>GifExpertApp </h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>

            
    
      <ol>
        {
          categories.map ( category =>
            <GifGrid
            key={ category }
            category= {category }
            />
            )
        }
      </ol>
       </>
  )
}
