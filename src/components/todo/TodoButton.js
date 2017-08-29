import React from 'react'

export const TodoButton = (props) => (
	<form >
        <button className="btn-margin" id="+" onClick={props.handleOperator}>+ Addition</button>
        <button className="btn-margin" id="-" onClick={props.handleOperator}>- Substruct</button>
        <button className="btn-margin" id="/" onClick={props.handleOperator}>/ Devide</button>
        <button className="btn-margin" id="*" onClick={props.handleOperator}>* Multiply</button>
      
    </form>)
