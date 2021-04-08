import React from 'react'

const Name = ({candidate}) => {

	return (
			<div className = 'element'>
				<li className = 'text'> {candidate.name} {candidate.phoneNumber}</li>
			</div>
		)
}

export default Name