// import React from 'react'
// import {useState} from 'react'

// import Name from './Name'

// const App =(props) => {
	
// 	const [notes, setNotes] = useState(props.notes)
// 	const [newNote, setNewNote] = useState('')
// 	const [showAll, setShowAll] = useState(true)
// 	// console.log(notes)

// 	const addNote = (event) => {
// 		event.preventDefault()
// 		const newObject = {
// 			id: notes.length + 1,
// 			content: newNote,
// 			date: new Date().toISOString(),
// 			important: Math.random() < 0.5,
// 		}
// 		setNotes(notes.concat(newObject))
// 		// here the original notes array
// 		// is not mutated. A copy of notes
// 		// is created and altering is done
// 		console.log('button clicked', notes)
// 		setNewNote('')
// 	}

// 	// The event handler is called every time a change 
// 	// occurs in the input element.
// 	const handleNoteChange = (event) => {
// 		console.log(event.target.value)
// 		setNewNote(event.target.value)
// 	}

// 	const notesToShow = showAll
//     ? notes
//     : notes.filter(note => note.important)

// 	return (
// 			<div>
// 				<h1> Notes </h1>
// 				<div>
// 					<button onClick = {() => setShowAll(!showAll)}> 
// 						show {showAll ? 'important': 'all'}
// 					</button>
// 				</div>

				
// 				<ul>
// 					{notesToShow.map((note, i) => {
// 						return <Note key = {i} note = {note} />
// 					})}
// 				</ul>

// 				<form onSubmit = {addNote}>
// 					<input value = {newNote} onChange={handleNoteChange}/>
// 					<button type = 'submit'> Save </button>
// 				</form>
// 			</div>
// 		)
// }

// export default App

// const App = () => {
// 	const [persons, setPersons] = useState([
// 			{name: 'Arto Hellas'}
// 		])

// 	const [newName, setNewName] = useState('')

// 	const handleNoteChange = (event) => {
// 		// console.log(event.target.value)
// 		setNewName(event.target.value)
// 	}
// 	const addName = (event) => {
// 		event.preventDefault()
// 		//console.log(event.target.value)
// 		const newObject = {
// 			name: newName
// 		}
// 		var tempName = false;

// 		for(let i=0;i<persons.length;i++) {
// 			if(persons[i].name === newObject.name) {
// 				tempName = true;
// 			}
// 		}
// 		if(tempName === true) {
// 			alert('{newName} already present')
// 			setNewName('')
// 		}

// 		else {
// 			setPersons(persons.concat(newObject))
// 			setNewName('')
// 		}
// 	}

// 	return (
// 			<div>
// 				<h2> PhoneBook </h2>
// 				<form onSubmit={addName}>
// 					name: <input value = {newName} onChange = {handleNoteChange}/>
// 					<button type = 'submit'> Add </button>
// 				</form>
// 				<h2> Names </h2>
// 				<ul>
// 					{persons.map((name, i) => {
// 						return <Name key = {i} person = {name} />
// 					})}
// 				</ul>
// 			</div>	
// 		)
// }


//export default App
// import React from 'react'
// import {useState} from 'react'

// import Name from './Name'

// const App = () => {
//   const [persons, setPersons] = useState([
//     { name: 'Arto Hellas', phno: '040-123456' },
//     { name: 'Ada Lovelace', phno: '39-44-5323523' },
//     { name: 'Dan Abramov', phno: '12-43-234345' },
//     { name: 'Mary Poppendieck', phno: '39-23-6423122' }
//   ])

// 	const [newName, setNewName] = useState('')
// 	const [newNumber, setNewNumber] = useState('')

// 	const handleNoteChange = (event) => {
// 		// console.log(event.target.value)
// 		setNewName(event.target.value)
// 	}

// 	const handleNumChange = (event) => {
// 		console.log(event.target)
// 		setNewNumber(event.target.value)
// 	}
// 	const addData = (event) => {
// 		event.preventDefault()
// 		//console.log(event.target.value)
// 		const newObject = {
// 			name: newName,
// 			phno: newNumber
// 		}
// 		var tempName = false;

// 		for(let i=0;i<persons.length;i++) {
// 			if(persons[i].name === newObject.name) {
// 				tempName = true;
// 			}
// 		}
// 		if(tempName === true) {
// 			alert(`${newName} already present`)
// 			setNewName('')
// 			setNewNumber('')
// 		}

// 		else {
// 			setPersons(persons.concat(newObject))
// 			setNewName('')
// 			setNewNumber('')
// 		}
// 	}

// 	return (
// 			<div>
// 				<h2> PhoneBook </h2>

// 				<form onSubmit={addData}>
// 					name: <input value = {newName} onChange = {handleNoteChange}/>
// 					<br/>
// 					number: <input value = {newNumber} onChange = {handleNumChange}/>
// 					<br/>
// 					<button type = 'submit'> Add </button>
// 				</form>
// 				<h2> Names </h2>
// 				<ul>
// 					{persons.map((name, i) => {
// 						return <Name key = {i} person = {name} />
// 					})}
// 				</ul>
// 			</div>	
// 		)
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Note from './Note'


/*
What does useEffect do? By using this Hook, you tell React that your 
component needs to do something after render. React will remember 
the function you passed (we’ll refer to it as our “effect”), 
and call it later after performing the DOM updates
*/

//The Effect Hook lets you perform side effects in function components.

//By default, effects run after every completed render

/*
useEffect takes two parameters
parameter1: the function which runs on each successful render
parameter2: The second parameter of useEffect is used to specify how often 
			the effect is run. If the second parameter is an empty array [], 
			then the effect is only run along with the first render of the 
			component.
*/
// const App = () => {
//   const [notes, setNotes] = useState([])
//   const [newNote, setNewNote] = useState('')
//   const [showAll, setShowAll] = useState(true)

//   // default setup
//   // useEffect(() => {
//   //   console.log('effect')
//   //   axios
//   //     .get('http://localhost:3001/notes')
//   //     .then(response => {
//   //       console.log('promise fulfilled')
//   //       setNotes(response.data)
//   //     })
//   // }, [])


//   //type 2
//   // const hook = () => {
//   // 	console.log('effect')
//   // 	axios
//   // 	.get('http://localhost:3001/notes')
//   // 	.then(response => {
//   // 		console.log('promise fulfilled')
//   // 		setNotes(response.data)
//   // 	})
//   // }

//   // useEffect(hook, [])

//   //type 3
//   useEffect(() => {
//   	console.log('effect')

//   	const eventHandler = (response) => {
//   		console.log('response fulfilled')
//   		setNotes(response.data)
//   	}

//   	const promise = axios.get('http://localhost:3001/notes')
//   	promise.then(eventHandler)
//   }, [])

//   console.log('render', notes.length, 'notes')

//   return (
//   		<div></div>
//   	)
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Name from './Name'
// const App = () => {
// 	const [persons, setPersons] = useState([])

// 	useEffect(() => {
// 		axios
// 		.get('http://localhost:3001/persons')
// 		.then(response => {
// 			console.log('promise fulfilled')
// 			setPersons(response.data)
// 		})
// 	}, [])

// 	const [newName, setNewName] = useState('')
// 	const [newNumber, setNewNumber] = useState('')

// 	const handleNoteChange = (event) => {
// 		// console.log(event.target.value)
// 		setNewName(event.target.value)
// 	}

// 	const handleNumChange = (event) => {
// 		// console.log(event.target)
// 		setNewNumber(event.target.value)
// 	}
// 	const addData = (event) => {
// 		event.preventDefault()
// 		//console.log(event.target.value)
// 		const newObject = {
// 			name: newName,
// 			phno: newNumber
// 		}
// 		var tempName = false;

// 		for(let i=0;i<persons.length;i++) {
// 			if(persons[i].name === newObject.name) {
// 				tempName = true;
// 			}
// 		}
// 		if(tempName === true) {
// 			alert(`${newName} already present`)
// 			setNewName('')
// 			setNewNumber('')
// 		}

// 		else {
// 			setPersons(persons.concat(newObject))
// 			setNewName('')
// 			setNewNumber('')
// 		}
// 	}

// 	return (
// 			<div>
// 				<h2> PhoneBook </h2>

// 				<form onSubmit={addData}>
// 					name: <input value = {newName} onChange = {handleNoteChange}/>
// 					<br/>
// 					number: <input value = {newNumber} onChange = {handleNumChange}/>
// 					<br/>
// 					<button type = 'submit'> Add </button>
// 				</form>
// 				<h2> Names </h2>
// 				<ul>
// 					{persons.map((name, i) => {
// 						return <Name key = {i} person = {name} />
// 					})}
// 				</ul>
// 			</div>
// 		)
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// import Country from './Country'
// const App = () => {
// 	const [country, setCountry] = useState([])
	
// 	useEffect(() => {
// 		axios
// 		.get('https://restcountries.eu/rest/v2/all')
// 		.then(response => {
// 			console.log(response.data)
// 			setCountry(response.data.map(country => country))
// 		})
// 	}, [])



// 	const [newCountry, setNewCountry] = useState('')

// 	const searchCountry = (event) => {
// 		const query = event.target.value
// 		setNewCountry(query)
// 	}

// 	const allCountries = country.map((country, i) => <li key = {i}> {country.name} </li>)

// 	const filterCountries = country.filter(country => country.name.toLowerCase().includes(newCountry.trim().toLowerCase()))
// 	return (
// 				<div>
				
// 					<h1> final Countries </h1> <input type="text" value = {newCountry} onChange = {searchCountry}/>
// 					{filterCountries.length > 10 ? (
// 						<div> To many matches </div>
// 						) : filterCountries.length > 1 && filterCountries.length < 10 ? (
// 				            <div>
// 				            {filterCountries.map((country, i) => (
// 				              <div key={i}>{country.name}</div>
// 				            ))}
// 				          </div>	
// 						):filterCountries.length == 1 ? (
// 							<Country countryFound = {filterCountries} />
// 						) : (
// 							<div> Can't find country </div>
// 						)}
// 				</div>	
// 			)
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// import Country from './Country'
// const App = () => {
// 	const [country, setCountry] = useState([])
// 	const [newCountry, setNewCountry] = useState('')
	

// 	useEffect(() => {
// 		axios
// 		.get('https://restcountries.eu/rest/v2/all')
// 		.then(response => {
// 			console.log(response.data)
// 			setCountry(response.data.map(country => country))
// 		})
// 	}, [])


// 	const searchCountry = (event) => {
// 		const query = event.target.value
// 		setNewCountry(query)
// 	}

// 	const allCountries = country.map((country, i) => <li key = {i}> {country.name} </li>)

// 	const filterCountries = country.filter(country => country.name.toLowerCase().includes(newCountry.trim().toLowerCase()))
	
// 	const onShowCountryDetails = (country) => {
// 		setNewCountry(country.name)
// 	}

// 	return (
// 				<div>
				
// 					<h1> Find Countries </h1> <input type="text" value = {newCountry} onChange = {searchCountry}/>
// 					{filterCountries.length > 10 ? (
// 						<div> To many matches </div>
// 						) : filterCountries.length > 1 && filterCountries.length < 10 ? (
// 				            <div>
// 				            {filterCountries.map((country, i) => (
// 				            	<div key={i}>
// 						            	{country.name} <button onClick = {() => onShowCountryDetails(country)}> SHOW </button> 
						            	
// 				              	</div>

				              	
// 				            ))}
// 				          </div>	
// 						):filterCountries.length == 1 ? (
// 							<Country countryFound = {filterCountries} />
// 						) : (
// 							<div> Can't find country </div>
// 						)}
// 				</div>	
// 			)
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Name from './Name'
// const App = () => {
// 	const [persons, setPersons] = useState([])

// 	useEffect(() => {
// 		axios
// 		.get('http://localhost:3001/persons')
// 		.then(response => {
// 			console.log('promise fulfilled')
// 			setPersons(response.data)
// 		})
// 	}, [])

// 	const [newName, setNewName] = useState('')
// 	const [newNumber, setNewNumber] = useState('')
// 	const [search, setSearch] = useState('')
// 	const handleNoteChange = (event) => {
// 		// console.log(event.target.value)
// 		setNewName(event.target.value)
// 	}

// 	const handleNumChange = (event) => {
// 		// console.log(event.target)
// 		setNewNumber(event.target.value)
// 	}
// 	const addData = (event) => {
// 		event.preventDefault()
// 		//console.log(event.target.value)
// 		const newObject = {
// 			name: newName,
// 			phno: newNumber
// 		}
// 		var tempName = false;

// 		for(let i=0;i<persons.length;i++) {
// 			if(persons[i].name === newObject.name) {
// 				tempName = true;
// 			}
// 		}
// 		if(tempName === true) {
// 			alert(`${newName} already present`)
// 			setNewName('')
// 			setNewNumber('')
// 		}

// 		else {
// 			setPersons(persons.concat(newObject))
// 			setNewName('')
// 			setNewNumber('')
// 		}
// 	}

// 	const filterPersons = persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase())) 
	
// 	// console.log(filterPersons)
	
// 	const searchPerson = (event) => {
// 		console.log(event.target.value)
// 		setSearch(event.target.value)
// 	}

// 	return (
// 			<div>
// 				<h2> PhoneBook </h2>

// 				<p> filter shown with <input type="text" value = {search} onChange = {searchPerson}/> </p> 
				
// 				{filterPersons.length > 0 ? (
// 						<ul>
// 							{filterPersons.map((person, i) => 
// 									<li key = {i}> {person.name} </li> 
// 								)}
// 						</ul>	
// 					) : <div> </div>}
// 				<form onSubmit={addData}>
// 					name: <input value = {newName} onChange = {handleNoteChange}/>
// 					<br/>
// 					number: <input value = {newNumber} onChange = {handleNumChange}/>
// 					<br/>
// 					<button type = 'submit'> Add </button>
// 				</form>
// 				<h2> Names </h2>
// 				<ul>
// 					{persons.map((name, i) => {
// 						return <Name key = {i} person = {name} />
// 					})}
// 				</ul>
// 			</div>
// 		)
// }

// export default App



//import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Name from './Name'
// const App = () => {
// 	const [persons, setPersons] = useState([])

// 	useEffect(() => {
// 		axios
// 		.get('http://localhost:3001/persons')
// 		.then(response => {
// 			console.log('promise fulfilled')
// 			setPersons(response.data)
// 		})
// 	}, [])

// 	const [newName, setNewName] = useState('')
// 	const [newNumber, setNewNumber] = useState('')
// 	const [search, setSearch] = useState('')
// 	const handleNoteChange = (event) => {
// 		// console.log(event.target.value)
// 		setNewName(event.target.value)
// 	}

// 	const handleNumChange = (event) => {
// 		// console.log(event.target)
// 		setNewNumber(event.target.value)
// 	}
// 	const addData = (event) => {
// 		event.preventDefault()
// 		//console.log(event.target.value)
// 		const newObject = {
// 			name: newName,
// 			phno: newNumber
// 		}
// 		var tempName = false;

// 		for(let i=0;i<persons.length;i++) {
// 			if(persons[i].name === newObject.name) {
// 				tempName = true;
// 			}
// 		}
// 		if(tempName === true) {
// 			alert(`${newName} already present`)
// 			setNewName('')
// 			setNewNumber('')
// 		}

// 		else {
// 			// setPersons(persons.concat(newObject))
// 			// setNewName('')
// 			// setNewNumber('')

// 			axios
// 			.post("http://localhost:3001/persons", newObject)
// 			.then(response => {
// 				console.log(response)
// 				setPersons(persons.concat(newObject))
// 				setNewName('')
// 				setNewNumber('')
// 			})
// 		}
// 	}

// 	const filterPersons = persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase())) 
	
// 	// console.log(filterPersons)
	
// 	const searchPerson = (event) => {
// 		console.log(event.target.value)
// 		setSearch(event.target.value)
// 	}

// 	return (
// 			<div>
// 				<h2> PhoneBook </h2>

// 				<p> filter shown with <input type="text" value = {search} onChange = {searchPerson}/> </p> 
				
// 				{filterPersons.length > 0 ? (
// 						<ul>
// 							{filterPersons.map((person, i) => 
// 									<li key = {i}> {person.name} </li> 
// 								)}
// 						</ul>	
// 					) : <div> </div>}
// 				<form onSubmit={addData}>
// 					name: <input value = {newName} onChange = {handleNoteChange}/>
// 					<br/>
// 					number: <input value = {newNumber} onChange = {handleNumChange}/>
// 					<br/>
// 					<button type = 'submit'> Add </button>
// 				</form>
// 				<h2> Names </h2>
// 				<ul>
// 					{persons.map((name, i) => {
// 						return <Name key = {i} person = {name} />
// 					})}
// 				</ul>
// 			</div>
// 		)
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Name from './Name'
// const App = () => {
// 	const [persons, setPersons] = useState([])

// 	useEffect(() => {
// 		axios
// 		.get('http://localhost:3001/persons')
// 		.then(response => {
// 			console.log('promise fulfilled')
// 			setPersons(response.data)
// 		})
// 	}, [])

// 	const [newName, setNewName] = useState('')
// 	const [newNumber, setNewNumber] = useState('')
// 	const [search, setSearch] = useState('')
// 	const handleNoteChange = (event) => {
// 		// console.log(event.target.value)
// 		setNewName(event.target.value)
// 	}

// 	const handleNumChange = (event) => {
// 		// console.log(event.target)
// 		setNewNumber(event.target.value)
// 	}
// 	const addData = (event) => {
// 		event.preventDefault()
// 		//console.log(event.target.value)
// 		const newObject = {
// 			name: newName,
// 			number: newNumber
// 		}
// 		var tempName = false;

// 		for(let i=0;i<persons.length;i++) {
// 			if(persons[i].name === newObject.name) {
// 				tempName = true;
// 			}
// 		}
// 		if(tempName === true) {
// 			alert(`${newName} already present`)
// 			setNewName('')
// 			setNewNumber('')
// 		}

// 		else {
// 			// setPersons(persons.concat(newObject))
// 			// setNewName('')
// 			// setNewNumber('')

// 			axios
// 			.post("http://localhost:3001/persons", newObject)
// 			.then(response => {
// 				console.log(response)
// 				setPersons(persons.concat(newObject))
// 				setNewName('')
// 				setNewNumber('')
// 			})
// 		}
// 	}

// 	const filterPersons = persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase())) 
	
// 	// console.log(filterPersons)
	
// 	const searchPerson = (event) => {
// 		console.log(event.target.value)
// 		setSearch(event.target.value)
// 	}

// 	const handleDelete = (candidate) => {

// 		var decision = window.confirm(`Delete ${candidate.name} ?`)

// 		if(decision === true) {

			
// 			var id = candidate.id
// 			console.log(id)

// 			axios
// 			.delete(`http://localhost:3001/persons/${id}`)
// 			.then(response => response.data)
// 			.then(() => setPersons(persons.filter((p) => p.id !== id)))	
				

// 		}
// 		else 
// 			setPersons(persons)

// 	}

// 	return (
// 			<div>
// 				<h2> PhoneBook </h2>

// 				<p> filter shown with <input type="text" value = {search} onChange = {searchPerson}/> </p> 
				
// 				{filterPersons.length > 0 ? (
// 						<ul>
// 							{filterPersons.map((person, i) => 
// 									<li key = {i}> {person.name} </li> 
// 								)}
// 						</ul>	
// 					) : <div> </div>}
// 				<form onSubmit={addData}>
// 					name: <input value = {newName} onChange = {handleNoteChange}/>
// 					<br/>
// 					number: <input value = {newNumber} onChange = {handleNumChange}/>
// 					<br/>
// 					<button type = 'submit'> Add </button>
// 				</form>
// 				<h2> Numbers </h2>
// 				<ul>
// 					{persons.map((person, i) => {
// 						return <div key = {i}>
// 							<Name  candidate = {person} /> <button onClick = {() => handleDelete(person)}> DELETE </button>
							
// 						</div>
// 					})}
// 				</ul>
// 			</div>
// 		)
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Name from './Name'

// const App = () => {
// 	const [persons, setPersons] = useState([])

// 	useEffect(() => {
// 		axios
// 		.get('http://localhost:3001/persons')
// 		.then(response => {
// 			console.log('promise fulfilled')
// 			setPersons(response.data)
// 		})
// 	}, [])

// 	const [newName, setNewName] = useState('')
// 	const [newNumber, setNewNumber] = useState('')
// 	const [search, setSearch] = useState('')
// 	const handleNoteChange = (event) => {
// 		// console.log(event.target.value)
// 		setNewName(event.target.value)
// 	}

// 	const handleNumChange = (event) => {
// 		// console.log(event.target)
// 		setNewNumber(event.target.value)
// 	}
// 	const addData = (event) => {
// 		event.preventDefault()
// 		//console.log(event.target.value)
// 		const newObject = {
// 			name: newName,
// 			number: newNumber,
			
// 		}

// 		var tempName = false;
// 		for(let i=0;i<persons.length;i++) {
// 			if(persons[i].name === newName) {
// 				tempName = true;
// 			}
// 		}

// 		if(tempName === true) {

// 			var decision = window.confirm(`${newName} already present, replace number with new one ?`)
// 			const findPerson = persons.find(p => p.name === newName)
// 			const id = findPerson.id

// 			if(decision === true) {
				
// 				const dummy = {...findPerson, number: newNumber}

// 				axios
// 				.put(`http://localhost:3001/persons/${id}`, dummy)
// 				.then(response => {
// 					setPersons(persons.map(person => person.id !== id ? person : response.data))
// 					setNewName('')
// 					setNewNumber('')
// 				})
				
				
// 			}

// 			else {
// 				setNewName('')
// 				setNewNumber('')
// 			}

// 		}

// 		else {

// 			axios
// 			.post("http://localhost:3001/persons", newObject)
// 			.then(response => {
// 				console.log(response)
// 				setPersons(persons.concat(newObject))
// 				setNewName('')
// 				setNewNumber('')
// 			})
// 		}
// 	}

// 	const filterPersons = persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase())) 
	
// 	// console.log(filterPersons)
	
// 	const searchPerson = (event) => {
// 		console.log(event.target.value)
// 		setSearch(event.target.value)
// 	}

// 	const handleDelete = (candidate) => {

// 		var decision = window.confirm(`Delete ${candidate.name} ?`)

// 		if(decision === true) {

			
// 			var id = candidate.id
// 			console.log(id)

// 			axios
// 			.delete(`http://localhost:3001/persons/${id}`)
// 			.then(response => response.data)
// 			.then(() => setPersons(persons.filter((p) => p.id !== id)))	
				

// 		}
// 		else 
// 			setPersons(persons)

// 	}

// 	return (
// 			<div>
// 				<h2> PhoneBook </h2>

// 				<p> filter shown with <input type="text" value = {search} onChange = {searchPerson}/> </p> 

				
// 				{filterPersons.length > 0 ? (
// 						<ul>
// 							{filterPersons.map((person, i) => 
// 									<li key = {i}> {person.name} </li> 
// 								)}
// 						</ul>	
// 					) : <div> </div>}
// 				<form onSubmit={addData}>
// 					name: <input value = {newName} onChange = {handleNoteChange}/>
// 					<br/>
// 					number: <input value = {newNumber} onChange = {handleNumChange}/>
// 					<br/>
// 					<button type = 'submit'> Add </button>
// 				</form>
// 				<h2> Numbers </h2>
// 				<ul>
// 					{persons.map((person, i) => {
// 						return <div key = {i}>
// 							<Name  candidate = {person} /> <button onClick = {() => handleDelete(person)}> DELETE </button>
							
// 						</div>
// 					})}
// 				</ul>
// 			</div>
// 		)
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Name from './Name'
// import './app.css'

// const Notification = ({message}) => {

// 	if(message === null)
// 		return null
// 	return (
// 			<div className = "message"> {message} </div>
// 		)
// }
// const App = () => {
// 	const [persons, setPersons] = useState([])

// 	useEffect(() => {
// 		axios
// 		.get('http://localhost:3001/persons')
// 		.then(response => {
// 			console.log('promise fulfilled')
// 			setPersons(response.data)
// 		})
// 	}, [])

// 	const [newName, setNewName] = useState('')
// 	const [newNumber, setNewNumber] = useState('')
// 	const [search, setSearch] = useState('')
// 	const [errorMessage, setErrorMessage] = useState(null)
// 	const handleNoteChange = (event) => {
// 		// console.log(event.target.value)
// 		setNewName(event.target.value)
// 	}

// 	const handleNumChange = (event) => {
// 		// console.log(event.target)
// 		setNewNumber(event.target.value)
// 	}
// 	const addData = (event) => {
// 		event.preventDefault()
// 		//console.log(event.target.value)
// 		const newObject = {
// 			name: newName,
// 			number: newNumber,
			
// 		}

// 		var tempName = false;
// 		for(let i=0;i<persons.length;i++) {
// 			if(persons[i].name === newName) {
// 				tempName = true;
// 			}
// 		}

// 		if(tempName === true) {

// 			var decision = window.confirm(`${newName} already present, replace number with new one ?`)
// 			const findPerson = persons.find(p => p.name === newName)
// 			const id = findPerson.id

// 			if(decision === true) {
				
// 				const dummy = {...findPerson, number: newNumber}

// 				axios
// 				.put(`http://localhost:3001/persons/${id}`, dummy)
// 				.then(response => {
// 					setPersons(persons.map(person => person.id !== id ? person : response.data))
// 					setNewName('')
// 					setNewNumber('')
// 				})
				
				
// 			}

// 			else {
// 				setNewName('')
// 				setNewNumber('')
// 			}

// 		}

// 		else {

// 			axios
// 			.post("http://localhost:3001/persons", newObject)
// 			.then(response => {
// 				console.log(response)
// 				setPersons(persons.concat(newObject))
// 				setNewName('')
// 				setNewNumber('')
// 				setErrorMessage(
// 						`Person ${newObject.name} added`
// 					)
// 				setTimeout(() => {
// 					setErrorMessage(null)
// 				}, 5000)

// 			})
// 		}
// 	}

// 	const filterPersons = persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase())) 
	
// 	// console.log(filterPersons)
	
// 	const searchPerson = (event) => {
// 		console.log(event.target.value)
// 		setSearch(event.target.value)
// 	}

// 	const handleDelete = (candidate) => {

// 		var decision = window.confirm(`Delete ${candidate.name} ?`)

// 		if(decision === true) {

			
// 			var id = candidate.id
// 			console.log(id)

// 			axios
// 			.delete(`http://localhost:3001/persons/${id}`)
// 			.then(response => response.data)
// 			.then(() => setPersons(persons.filter((p) => p.id !== id)))	
				

// 		}
// 		else 
// 			setPersons(persons)

// 	}

// 	return (
// 			<div>
// 				<h2> PhoneBook </h2>

// 				<Notification message = {errorMessage}/>
// 				<p> filter shown with <input type="text" value = {search} onChange = {searchPerson}/> </p> 

// 				<form onSubmit={addData}>
// 					name: <input value = {newName} onChange = {handleNoteChange}/>
// 					<br/>
// 					number: <input value = {newNumber} onChange = {handleNumChange}/>
// 					<br/>
// 					<button type = 'submit'> Add </button>
// 				</form>
// 			</div>
// 		)
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Name from './Name'

// const Notification = ({message}) => {
// 	if({message} === null) {
// 		return null
// 	}

// 	return (
// 		<div>
// 			<div> {message} </div>
// 		</div>
// 		)
// }

// const baseURL = '/api/persons'
// const getAll = () => {
// 	const request = axios.get(baseURL)
// 	return request.then(response => response.data)

// }
// const App = () => {
// 	const [persons, setPersons] = useState([])

// 	useEffect(() => {
// 		axios
// 		.get(baseURL)
// 		.then(response => {
// 			console.log('promise fulfilled')
// 			setPersons(response.data)
// 		})
// 	}, [])

// 	const [newName, setNewName] = useState('')
// 	const [newNumber, setNewNumber] = useState('')
// 	const [search, setSearch] = useState('')
// 	const [errorMessage, setErrorMessage] = useState(null)

// 	const handleNoteChange = (event) => {
		
// 		setNewName(event.target.value)
// 	}

// 	const handleNumChange = (event) => {
	
// 		setNewNumber(event.target.value)
// 	}
// 	const addData = (event) => {
// 		event.preventDefault()
		
// 		const newObject = {
// 			name: newName,
// 			number: newNumber,
			
// 		}

// 		var tempName = false;
// 		for(let i=0;i<persons.length;i++) {
// 			if(persons[i].name === newName) {
// 				tempName = true;
// 			}
// 		}

// 		if(tempName === true) {

// 			var decision = window.confirm(`${newName} already present, replace number with new one ?`)
// 			const findPerson = persons.find(p => p.name === newName)
// 			const id = findPerson.id

// 			if(decision === true) {
				
// 				const dummy = {...findPerson, number: newNumber}

// 				axios
// 				.put(`baseURL/${id}`, dummy)
// 				.then(response => {
// 					setPersons(persons.map(person => person.id !== id ? person : response.data))
// 					setNewName('')
// 					setNewNumber('')
// 				})
				
				
// 			}

// 			else {
// 				setNewName('')
// 				setNewNumber('')
// 			}

// 		}

// 		else {

// 			axios
// 			.post(baseURL, newObject)
// 			.then(response => {
// 				console.log(response)
// 				setPersons(persons.concat(newObject))
// 				setNewName('')
// 				setNewNumber('')
// 				setErrorMessage(`Number Added`)
// 				setTimeout(() => {
// 					setErrorMessage(null)
// 				}, 5000)
// 			})
// 		}
// 	}

// 	const filterPersons = persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase())) 
	
	
	
// 	const searchPerson = (event) => {
		
// 		setSearch(event.target.value)
// 	}

// 	const handleDelete = (candidate) => {

// 		var decision = window.confirm(`Delete ${candidate.name} ?`)

// 		if(decision === true) {

			
// 			var id = candidate.id
// 			var name = candidate.name

// 			axios
// 			.delete(baseURL + '/' + id.toString())
// 			.then(response => response.data)
// 			.then(() => {
// 				setPersons(persons.filter((p) => p.id !== id))
// 				setErrorMessage(
// 					`${name} was deleted`
// 				)
// 				setTimeout(() => {
// 					setErrorMessage(null)
// 				}, 5000)
// 			})	
				

// 		}
// 		else 
// 			setPersons(persons)

// 	}

// 	return (
// 			<div>
// 				<h2> PhoneBook </h2>
// 				<Notification message = {errorMessage}/>
// 				<p> filter shown with <input type="text" value = {search} onChange = {searchPerson}/> </p> 

				
// 				{filterPersons.length > 0 ? (
// 						<ul>
// 							{filterPersons.map((person, i) => 
// 									<li key = {i}> {person.name} </li> 
// 								)}
// 						</ul>	
// 					) : <div> </div>}
// 				<form onSubmit={addData}>
// 					name: <input value = {newName} onChange = {handleNoteChange}/>
// 					<br/>
// 					number: <input value = {newNumber} onChange = {handleNumChange}/>
// 					<br/>
// 					<button type = 'submit'> Add </button>
// 				</form>
// 				<h2> Numbers </h2>
// 				<ul>
// 					{persons.map((person, i) => {
// 						return <div key = {i}>
// 							<Name  candidate = {person} /> <button onClick = {() => handleDelete(person)}> DELETE </button>
							
// 						</div>
// 					})}
// 				</ul>
// 			</div>
// 		)
// }

// export default App

// import React from 'react'
// import {useState, useEffect} from 'react'
// import Note from './Note'
// import axios from 'axios'
// import Name from './Name'

// const baseURL = '/api/notes'

// const getAll = () => {
// 	const request = axios.get(baseURL)
// 	return request.then(response => response.data)
// }
// const App =() => {
	
// 	const [notes, setNotes] = useState([])
// 	const [newNote, setNewNote] = useState('')
// 	const [showAll, setShowAll] = useState(true)
// 	// console.log(notes)

// 	useEffect(() => {
// 		axios.get(baseURL).then(response => {
// 		setNotes(response.data)
// 		})
// 	}, [])
// 	const addNote = (event) => {
// 		event.preventDefault()
// 		const newObject = {
// 			id: notes.length + 1,
// 			content: newNote,
// 			date: new Date().toISOString(),
// 			important: Math.random() < 0.5,
// 		}
		
// 		// here the original notes array
// 		// is not mutated. A copy of notes
// 		// is created and altering is done
// 		axios
// 		.post(baseURL, newObject)
// 		.then(response => {
// 			console.log(response)
// 			setNotes(notes.concat(newObject))
// 			setNewNote('')
// 		})
		
// 	}

// 	// The event handler is called every time a change 
// 	// occurs in the input element.
// 	const handleNoteChange = (event) => {
		
// 		setNewNote(event.target.value)
// 	}

// 	const notesToShow = showAll
//     ? notes
//     : notes.filter(note => note.important)

//     const toggleImportanceOf = (id) => {
//     	console.log("importance of " + id + " is toggled")

//     	const url = `baseURL/${id}`
//     	const note = notes.find(n => n.id === id)
//     	console.log(note)
//     	const changedNote = { ...note, important: !note.important }

// 	  axios
// 	  .put(url, changedNote)
// 	  .then(response => {
// 	    setNotes(notes.map(note => note.id !== id ? note : response.data))
// 	  })
//     }


// 	return (
// 			<div>
// 				<h1> Notes </h1>
// 				<div>
// 					<button onClick = {() => setShowAll(!showAll)}> 
// 						show {showAll ? 'important': 'all'}
// 					</button>
// 				</div>

// 				<ul>
// 					{notesToShow.map((note, i) => {
// 						return <Note key = {i} note = {note} toggleImportance = {() => toggleImportanceOf(note.id)}/>
// 					})}
// 				</ul>
				


// 				<form onSubmit = {addNote}>
// 					<input value = {newNote} onChange={handleNoteChange}/>
// 					<button type = 'submit'> Save </button>
// 				</form>
// 			</div>
// 		)
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Name from './Name'

// const Notification = ({message}) => {
// 	if({message} === null) {
// 		return null
// 	}

// 	return (
// 		<div>
// 			<div> {message} </div>
// 		</div>
// 		)
// }

// const baseURL = '/api/persons'
// const getAll = () => {
// 	const request = axios.get(baseURL)
// 	return request.then(response => response.data)

// }
// const App = () => {
// 	const [persons, setPersons] = useState([])

// 	useEffect(() => {
// 		axios
// 		.get(baseURL)
// 		.then(response => {
// 			console.log('promise fulfilled')
// 			setPersons(response.data)
// 		})
// 	}, [])

// 	const [newName, setNewName] = useState('')
// 	const [newNumber, setNewNumber] = useState('')
// 	const [search, setSearch] = useState('')
// 	const [errorMessage, setErrorMessage] = useState(null)

// 	const handleNoteChange = (event) => {
		
// 		setNewName(event.target.value)
// 	}

// 	const handleNumChange = (event) => {
	
// 		setNewNumber(event.target.value)
// 	}
// 	const addData = (event) => {
// 		event.preventDefault()
		
// 		const newObject = {
// 			name: newName,
// 			phoneNumber: newNumber,
			
// 		}

// 		var tempName = false;
// 		for(let i=0;i<persons.length;i++) {
// 			if(persons[i].name === newName) {
// 				tempName = true;
// 			}
// 		}

// 		if(tempName === true) {

// 			var decision = window.confirm(`${newName} already present, replace number with new one ?`)
// 			const findPerson = persons.find(p => p.name === newName)
// 			const id = findPerson.id

// 			if(decision === true) {
				
// 				const dummy = {...findPerson, phoneNumber: newNumber}

// 				axios
// 				.put(baseURL + '/' + id.toString(), dummy)
// 				.then(response => {
// 					setPersons(persons.map(person => person.id !== id ? person : response.data))
// 					setNewName('')
// 					setNewNumber('')
// 				})
				
				
// 			}

// 			else {
// 				setNewName('')
// 				setNewNumber('')
// 			}

// 		}

// 		else {

// 			axios
// 			.post(baseURL, newObject)
// 			.then(response => {
// 				console.log(response)
// 				setPersons(persons.concat(newObject))
// 				setNewName('')
// 				setNewNumber('')
// 				setErrorMessage(`Number Added`)
// 				setTimeout(() => {
// 					setErrorMessage(null)
// 				}, 5000)
// 			})
// 		}
// 	}

// 	const filterPersons = persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase())) 
	
	
	
// 	const searchPerson = (event) => {
		
// 		setSearch(event.target.value)
// 	}

// 	const handleDelete = (candidate) => {

// 		var decision = window.confirm(`Delete ${candidate.name} ?`)

// 		if(decision === true) {

			
// 			var id = candidate.id
// 			var name = candidate.name

// 			axios
// 			.delete(baseURL + '/' + id.toString())
// 			.then(response => response.data)
// 			.then(() => {
// 				setPersons(persons.filter((p) => p.id !== id))
// 				setErrorMessage(
// 					`${name} was deleted`
// 				)
// 				setTimeout(() => {
// 					setErrorMessage(null)
// 				}, 5000)
// 			})	
				

// 		}
// 		else 
// 			setPersons(persons)

// 	}

// 	return (
// 			<div>
// 				<h2> PhoneBook </h2>
// 				<Notification message = {errorMessage}/>
// 				<p> filter shown with <input type="text" value = {search} onChange = {searchPerson}/> </p> 

				
// 				{filterPersons.length > 0 ? (
// 						<ul>
// 							{filterPersons.map((person, i) => 
// 									<li key = {i}> {person.name} </li> 
// 								)}
// 						</ul>	
// 					) : <div> </div>}
// 				<form onSubmit={addData}>
// 					name: <input value = {newName} onChange = {handleNoteChange}/>
// 					<br/>
// 					number: <input value = {newNumber} onChange = {handleNumChange}/>
// 					<br/>
// 					<button type = 'submit'> Add </button>
// 				</form>
// 				<h2> Numbers </h2>
// 				<ul>
// 					{persons.map((person, i) => {
// 						return <div key = {i}>
// 							<Name  candidate = {person} /> <button onClick = {() => handleDelete(person)}> DELETE </button>
							
// 						</div>
// 					})}
// 				</ul>
// 			</div>
// 		)
// }

// export default App

// import React from 'react'
// import {useState, useEffect} from 'react'
// import Note from './Note'
// import axios from 'axios'
// import Name from './Name'

// const baseURL = '/api/notes'

// const getAll = () => {
// 	const request = axios.get(baseURL)
// 	return request.then(response => response.data)
// }
// const App =() => {
	
// 	const [notes, setNotes] = useState([])
// 	const [newNote, setNewNote] = useState('')
// 	const [showAll, setShowAll] = useState(true)
// 	// console.log(notes)

// 	useEffect(() => {
// 		axios.get(baseURL).then(response => {
// 		setNotes(response.data)
// 		})
// 	}, [])
// 	const addNote = (event) => {
// 		event.preventDefault()
// 		const newObject = {
// 			id: notes.length + 1,
// 			content: newNote,
// 			date: new Date().toISOString(),
// 			important: Math.random() < 0.5,
// 		}
		
// 		// here the original notes array
// 		// is not mutated. A copy of notes
// 		// is created and altering is done
// 		axios
// 		.post(baseURL, newObject)
// 		.then(response => {
// 			console.log(response)
// 			setNotes(notes.concat(newObject))
// 			setNewNote('')
// 		})
		
// 	}

// 	// The event handler is called every time a change 
// 	// occurs in the input element.
// 	const handleNoteChange = (event) => {
		
// 		setNewNote(event.target.value)
// 	}

// 	const notesToShow = showAll
//     ? notes
//     : notes.filter(note => note.important)

//     const toggleImportanceOf = (id) => {
//     	console.log("importance of " + id + " is toggled")

//     	const url = baseURL + '/' + id.toString()
//     	const note = notes.find(n => n.id === id)
//     	console.log(note)
//     	const changedNote = { ...note, important: !note.important }

// 	  axios
// 	  .put(url, changedNote)
// 	  .then(response => {
// 	    setNotes(notes.map(note => note.id !== id ? note : response.data))
// 	  })
//     }


// 	return (
// 			<div>
// 				<h1> Notes </h1>
// 				<div>
// 					<button onClick = {() => setShowAll(!showAll)}> 
// 						show {showAll ? 'important': 'all'}
// 					</button>
// 				</div>

// 				<ul>
// 					{notesToShow.map((note, i) => {
// 						return <Note key = {i} note = {note} toggleImportance = {() => toggleImportanceOf(note.id)}/>
// 					})}
// 				</ul>
				


// 				<form onSubmit = {addNote}>
// 					<input value = {newNote} onChange={handleNoteChange}/>
// 					<button type = 'submit'> Save </button>
// 				</form>
// 			</div>
// 		)
// }

// export default App

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Name from './Name'
// import './app.css'
// const Notification = ({message}) => {
// 	if({message} === null) {
// 		return (
// 			<div className = 'message'></div>
// 			)
// 	}

// 	return (
		
// 			<div className = "message"> {message} </div>
		
// 		)
// }

// const baseURL = '/api/persons'
// const getAll = () => {
// 	const request = axios.get(baseURL)
// 	return request.then(response => response.data)

// }
// const App = () => {
// 	const [persons, setPersons] = useState([])

// 	useEffect(() => {
// 		axios
// 		.get(baseURL)
// 		.then(response => {
// 			console.log('promise fulfilled')
// 			setPersons(response.data)
// 		})
// 	}, [])

// 	const [newName, setNewName] = useState('')
// 	const [newNumber, setNewNumber] = useState('')
// 	const [search, setSearch] = useState('')
// 	const [errorMessage, setErrorMessage] = useState(null)

// 	const handleNoteChange = (event) => {
		
// 		setNewName(event.target.value)
// 	}

// 	const handleNumChange = (event) => {
	
// 		setNewNumber(event.target.value)
// 	}
// 	const addData = (event) => {
// 		event.preventDefault()
		
// 		const newObject = {
// 			name: newName,
// 			phoneNumber: newNumber,
			
// 		}

// 		var tempName = false;
// 		for(let i=0;i<persons.length;i++) {
// 			if(persons[i].name === newName) {
// 				tempName = true;
// 			}
// 		}

// 		if(tempName === true) {

// 			var decision = window.confirm(`${newName} already present, replace number with new one ?`)
// 			const findPerson = persons.find(p => p.name === newName)
// 			const id = findPerson.id

// 			if(decision === true) {
				
// 				const dummy = {...findPerson, phoneNumber: newNumber}

// 				axios
// 				.put(baseURL + '/' + id.toString(), dummy)
// 				.then(response => {
// 					setPersons(persons.map(person => person.id !== id ? person : response.data))
// 					setNewName('')
// 					setNewNumber('')
// 				})
// 				.catch(error => {
// 					setErrorMessage(error)
// 					setNewName('')
// 					setNewNumber('')
// 				})
				
				
// 			}

// 			else {
// 				setNewName('')
// 				setNewNumber('')
// 			}

// 		}

// 		else {

// 			axios
// 			.post(baseURL, newObject)
// 			.then(response => {
// 				console.log(response)
// 				setPersons(persons.concat(newObject))
// 				setNewName('')
// 				setNewNumber('')
// 				setErrorMessage(`Number Added`)
// 				setTimeout(() => {
// 					setErrorMessage(null)
// 				}, 5000)
// 			})
// 			.catch(error => {
// 				// console.log(error.response.data)
// 				const errorMsg = error.response.data.error
// 				setNewName('')
// 				setNewNumber('')
// 				setErrorMessage(errorMsg)
// 				setTimeout(() => {
// 					setErrorMessage(null)
// 				}, 5000)

// 			})
// 		}
// 	}

// 	const filterPersons = persons.filter(person => person.name.toLowerCase().includes(search.trim().toLowerCase())) 
	
	
	
// 	const searchPerson = (event) => {
		
// 		setSearch(event.target.value)
// 	}

// 	const handleDelete = (candidate) => {

// 		var decision = window.confirm(`Delete ${candidate.name} ?`)

// 		if(decision === true) {

			
// 			var id = candidate.id
// 			var name = candidate.name

// 			axios
// 			.delete(baseURL + '/' + id.toString())
// 			.then(response => response.data)
// 			.then(() => {
// 				setPersons(persons.filter((p) => p.id !== id))
// 				setErrorMessage(
// 					`${name} was deleted`
// 				)
// 				setTimeout(() => {
// 					setErrorMessage(null)
// 				}, 5000)
// 			})	
				

// 		}
// 		else 
// 			setPersons(persons)

// 	}

// 	return (
// 			<div className = 'background'>
// 				<h2 className = 'heading'> PhoneBook </h2>
// 				<Notification  message = {errorMessage}/>
// 				<p className = 'font1'> Filter shown with <input type="text" value = {search} onChange = {searchPerson}/> </p> 

				
// 				{filterPersons.length > 0 ? (
// 						<ul>
// 							{filterPersons.map((person, i) => 
// 									<li className = 'text' key = {i}> {person.name} </li> 
// 								)}
// 						</ul>	
// 					) : <div> </div>}
// 				<form className = 'form-input' onSubmit={addData}>
// 					<label className = 'label'> Name </label><input value = {newName} onChange = {handleNoteChange}/>
// 					<br/>
// 					<label className = 'label'> PhoneNumber </label><input value = {newNumber} onChange = {handleNumChange}/>
// 					<br/>
// 					<button type = 'submit' className = 'btn'> Add </button>
// 				</form>
// 				<h2 className = 'heading1'> Numbers </h2>
// 				<ul>
// 					{persons.map((person, i) => {
// 						return <div key = {i}>
// 							<Name candidate = {person}/> <button className = 'btn' onClick = {() => handleDelete(person)}> DELETE </button> 
							
// 						</div>
// 					})}
// 				</ul>
// 			</div>
// 		)
// }

// export default App

import React from 'react'
import {useState, useEffect} from 'react'
import Note from './Note'
import axios from 'axios'
import Name from './Name'

const baseURL = '/api/notes'

const getAll = () => {
	const request = axios.get(baseURL)
	return request.then(response => response.data)
}
const App =() => {
	
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('')
	const [showAll, setShowAll] = useState(true)
	// console.log(notes)

	useEffect(() => {
		axios.get(baseURL).then(response => {
		setNotes(response.data)
		})
	}, [])
	const addNote = (event) => {
		event.preventDefault()
		const newObject = {
			id: notes.length + 1,
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() < 0.5,
		}
		
		// here the original notes array
		// is not mutated. A copy of notes
		// is created and altering is done
		axios
		.post(baseURL, newObject)
		.then(response => {
			console.log(response)
			setNotes(notes.concat(newObject))
			setNewNote('')
		})
		
	}

	// The event handler is called every time a change 
	// occurs in the input element.
	const handleNoteChange = (event) => {
		
		setNewNote(event.target.value)
	}

	const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

    const toggleImportanceOf = (id) => {
    	console.log("importance of " + id + " is toggled")

    	const url = baseURL + '/' + id.toString()
    	console.log(url)
    	const note = notes.find(n => n.id === id)
    	// console.log(note)
    	const changedNote = { ...note, important: !note.important }

	  axios
	  .put(url, changedNote)
	  .then(response => {
	  	console.log(response)
	    setNotes(notes.map(note => note.id !== id ? note : response.data))
	  })
    }


	return (
			<div>
				<h1> Notes </h1>
				<div>
					<button onClick = {() => setShowAll(!showAll)}> 
						show {showAll ? 'important': 'all'}
					</button>
				</div>

				<ul>
					{notesToShow.map((note, i) => {
						return <Note key = {i} note = {note} toggleImportance = {() => toggleImportanceOf(note.id)}/>
					})}
				</ul>
				


				<form onSubmit = {addNote}>
					<input value = {newNote} onChange={handleNoteChange}/>
					<button type = 'submit'> Save </button>
				</form>
			</div>
		)
}

export default App