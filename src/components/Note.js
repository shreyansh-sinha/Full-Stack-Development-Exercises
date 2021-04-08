import React from 'react'

const Note = ({note, toggleImportance}) => {

	// console.log(props.note.content)
	return (
			<div>
				<li> {note.content} <button onClick = {toggleImportance}> Toggle </button> </li>
			</div>
		)
}

export default Note