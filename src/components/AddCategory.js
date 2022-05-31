import React, { useState } from 'react'
//import {GifExpertApp} from './GifExpertApp'
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories} ) => {
  
  const [inputValue, setinputValue] = useState([ ]);
  
  const handleInputChange = (e) => {
      setinputValue (e.target.value)
  }

 AddCategory.propTypes = {

  setCategories : PropTypes.func.isRequired

 }

const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trimEnd().length > 2){
      setCategories ( category => [ inputValue, ...category])
      setinputValue ('');
    }

}

    return (
    <form onSubmit = { handleSubmit }>
       
        <input 
          type="text"
          value={inputValue}
          onChange={ handleInputChange }
        />
    </form>
  )
}
