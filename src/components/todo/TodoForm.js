import React from 'react'

export const TodoForm = (props) => (
	<form >
         

         <input type="text" placeholder="Number1" className="input-nbr"
         onChange={props.handleInputChangeNbr1} 
         value={props.number1}/>


          <input type="text" placeholder="Number2" className="input-nbr"
         onChange={props.handleInputChangeNbr2} 
         value={props.number2}/>


    </form>)
