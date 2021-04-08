 import React, {useState} from 'react'
import ReactDom from 'react-dom';

// capital letter react function = react component
// it will return JSX

// function Greeting() {
// 	return <h1>This is Shreyansh and this is my first component </h1>;
// }

// const firstBook = {
// 	Image: "https://images-na.ssl-images-amazon.com/images/I/51cRlGQ4eLL._SY300_.jpg",
// 	Title: "How the One-Armed Sister Sweeps Her House",
// 	Author: "Cherie Jones",
// };


// function Booklist() {
// 	return (
// 		<section>
// 			<Book img = {firstBook.Image} Title = {firstBook.Title} Author = {firstBook.Author}>
// 			</Book>	
// 		</section>
// 		);
// }

// const Book = (props) => {
// 	return (
// 			<section>
// 				<img src = {props.img}/>
// 				<h1> {props.Title} </h1>
// 				<h4> {props.Author} </h4>
// 			</section>
// 		)
// }

// ReactDom.render(<Booklist/>, document.getElementById('root'));

//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }


// const Header = (props) => {

// 	return (
// 			<h1> {props.course} </h1>
// 		)
// }


// const Content = (props) => {
// 	return (
// 		<div>
// 			<p>
// 				{props.parts[0].name} {props.parts[0].exercises}
// 			</p>
// 			<p>
// 				{props.parts[1].name} {props.parts[1].exercises}
// 			</p>
// 			<p>
// 				{props.parts[2].name} {props.parts[2].exercises}
// 			</p>
// 		</div>
// 	)
// }

// const Total = (props) => {
// 	console.log(props);
// 	return (
// 		<div>
// 			<p>
// 				Exercise {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
// 			</p>
// 		</div>
// 	)
// }

// const App = () => {
//   ///const-definitions

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }


// ReactDom.render(<App/>, document.getElementById('root'));

// const arto = {
// 	name : 'shreyansh',
// 	age: 22,
// 	education: 'Btech',
// 	greet: function() {
// 		console.log('hello, my name is ' + this.name);
// 	},
// 	doaddition: function(a, b) {
// 		console.log(a+b);
// 	}
// }

// // setTimeout(arto.greet(), 1000);

// arto.groolder = function() {
// 	this.age += 1;
// }

// arto.groolder();
// console.log(arto.age);

// const refaddition = arto.doaddition; // reference addition
// refaddition(10, 25);

/*
When calling the method through a reference, 
the method loses knowledge of what was the original this. 
Contrary to other languages, in JavaScript the value
of this is defined based on how the method is called. 
When calling the method through a reference the value 
of this becomes the so-called global object and the end
result is often not what the software developer had originally intended
*/

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	greet() {
// 		console.log('hello, my name is ' + this.name);
// 	}
// }

// const adam = new Person('Adam bohra', 23);
// adam.greet();

// console.log('10' + 20);

// function makeAdder(a) {

//   return function(b) {
//      console.log(a + b);
//   };
// }

// var add5 = makeAdder(5);
// var add20 = makeAdder(20);
// add5(6); // ?
// add20(7); // ?

// const Hello = (props) => {
// 	const bornYear = () => {
// 		const yearNow = new Date().getFullYear()
// 		return yearNow - props.age
// 		}

//   	return (
//     	<div>
      	
//       		<p>
//         		Hello {props.name}, you are {props.age} years old
//       		</p>
      		
//       		<p>
//       		 	So you were probably born in {bornYear()} 
//       		</p>
    	
//     	</div>
//   	)
//}


// const App = (props) => {
// 	const counter = props.counter;
// 	return (
// 			<div> {counter} </div>
// 		)
// }


// let counter = 1;

// const refresh = () => {
// 	ReactDom.render(<App counter = {counter}/>, document.getElementById('root'));
// }

/// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

// const App = () => {
// 	const [ counter, setCounter ] = useState(0)

// 	console.log(counter);
// 	setTimeout(
// 	  () => setCounter(counter + 1),
// 	  1000
// 	)

// 	return (
// 			<div> {counter} </div>
// 		)
// }

// const App = () => {
// 	const [counter, setCounter] = useState(0)

// 	const increase = () => {
// 		return setCounter(counter+1)
// 	}

// 	const reset = () => {
// 		return setCounter(0);
// 	}
// 	return (
// 			<div>
// 				<div> {counter} </div>
// 				<button onClick = {increase}> 
// 					Increment
// 				</button>

// 				<button onClick = {reset}> Reset </button>
// 			</div>
// 		)
// }

// const Button = (props) => {

// 	return (
// 			<button onClick = {props.handleclick}> {props.text} </button>
// 		)
// }

// const App = () => {

// 	const [counter, setCounter] = useState(0);

// 	const increase = () => {
// 		return setCounter(counter+1)
// 	}
// 	const decrease = () => {
// 		return setCounter(counter-1)
// 	}
// 	const reset = () => {
// 		return setCounter(0)
// 	}

// 	return (
// 			<div>
// 				<div> {counter} </div>
// 				<Button handleclick = {increase} 
// 					text = 'Increase'>
// 				</Button>	

// 				<Button handleclick = {decrease} 
// 					text = 'Decrease'>
// 				</Button>

// 				<Button handleclick = {reset}
// 					text = 'Reset'>
// 				</Button>
// 			</div>
// 		)
// }

// const App = () => {
// 	const [left, setleft] = useState(0)
// 	const [right, setright] = useState(0)

// 	return (
// 			<div>
// 				<div>{left}</div>
// 				<button onClick = {() => setleft(left+1)}> Left </button>
// 				<div> {right}</div>
// 				<button onClick = {() => setright(right+1)}> Right </button>
// 			</div>
// 		)
// }

// const App = () => {

// 	const [click, setClick] = useState({
// 		left: 0,
// 		right: 0 
// 	})

// 	const handleleftclick = () => {
// 		const newclick = {
// 			left: click.left+1,
// 			right: click.right
// 		}
// 		setClick(newclick)
// 	}

// 	const handlerightclick = () => {
// 		const newclick = {
// 			left: click.left,
// 			right: click.right+1
// 		}
// 		setClick(newclick)
// 	}

// 	return (
// 			<div>
// 				{click.left}
// 				<button onClick = {handleleftclick}> Left </button>
// 				{click.right}
// 				<button onClick = {handlerightclick}> Right </button>
// 			</div>
// 		)
// }

// const History = (props) => {
// 	if(props.allclick.length == 0) {
// 		return (
// 				<div>
// 					<p> No Button Pressed </p>
// 				</div>
// 			)
// 	}

// 	return (
// 			<div>
// 				<p> Pressing History is {props.allclick.join(' ')} </p>
// 			</div>
// 		)
// }

// const App = () => {
// 	const [left, setleft] = useState(0)
// 	const [right, setright] = useState(0)
// 	const [allclick, setAll] = useState([])

// 	const increaseLeft = () => {
// 		setAll(allclick.concat('L'))
// 		setleft(left+1)
// 	}

// 	const increaseRight = () => {
// 		setAll(allclick.concat('R'))
// 		setright(right+1)
// 	}
// 	return (
// 			<div>
// 				{left}
//     			<button onClick = {increaseLeft}> Left </button>
//     			{right}
//     			<button onClick = {increaseRight}> Right </button>

//     			<History allclick = {allclick}/>
// 			</div>
// 		)

// }

// const App = () => {

// 	const hello = (who) => {

// 		const handler = () => {
// 			console.log('hello', who)

// 		}

// 		return handler
// 	}
// 	return (
// 			<div>
// 				<button onClick = {hello('react')}> React </button>
// 			</div>
// 		)
// }

// const App = () => {
// 	const [value, setValue] = useState(10)

// 	const setToValue = (newValue) => {
// 		const handler = () => {
// 			setValue(newValue)
// 		}
// 		return handler
// 	}

// 	return (
// 			<div>
// 				{value}
// 				<button onClick = {setToValue(1000)}> Reset </button>
// 				<button onClick = {setToValue(value+1)}> Increase </button>
// 			</div>
// 		)
// }


// Never define components inside components

// const Display = props => <div>{props.value}</div>

// const Button = (props) => (
//   <button onClick={props.handleClick}>
//     {props.text}
//   </button>
// )

// const App = () => {
//   const [value, setValue] = useState(10)

//   const setToValue = newValue => {
//     setValue(newValue)
//   }

// 	return (
// 	<div>
// 	  <Display value={value} />
// 	  <Button handleClick={() => setToValue(1000)} text="thousand" />
// 	  <Button handleClick={() => setToValue(0)} text="reset" />
// 	  <Button handleClick={() => setToValue(value + 1)} text="increment" />
// 	</div>
// 	)
// }

// const Print = (props) => {

// 	return (
// 			<div>
// 				<p> {props.text} {props.val} </p>
// 			</div>
// 		)
// }

// const Statistics = (props) => {

// 	const sum = props.val1 + props.val2 + props.val3

// 	if(sum == 0) {
// 		return (
// 				<div>
// 					<p> No feedback given </p>
// 				</div>
// 			)
// 	}

// 	return (
// 			<div>
// 				<Print text = {props.text1} val = {props.val1}/>
// 				<Print text = {props.text2} val = {props.val2}/> 
// 				<Print text = {props.text3} val = {props.val3}/>
// 				<Print text = 'all' val = {props.val1 + props.val2 + props.val3}/>
// 				<Print text = 'average' val = {(props.val1 + props.val2 + props.val3)/3}/>
// 				<Print text = 'positive' val = {props.val1*100/(props.val1 + props.val2 + props.val3)}/>
// 			</div>
// 		)
// }


// const App = () => {

// 	const [good, setgood] = useState(0)
// 	const [neutral, setneutral] = useState(0)
// 	const [bad, setbad] = useState(0)

// 	const goodCounter = () => {
		
// 		const handler = () => {
// 			setgood(good+1)
// 		}
// 		return handler
// 	}

// 	const neutralCounter = () => {
		
// 		const handler = () => {
// 			setneutral(neutral+1)
// 		}
// 		return handler
// 	}

// 	const badCounter = () => {
		
// 		const handler = () => {
// 			setbad(bad+1)
// 		}
// 		return handler
// 	}

// 	return (
// 			<div>
// 				<h1> Give Feedback </h1>

// 				<button onClick = {goodCounter(0)}> good </button>
// 				<button onClick = {neutralCounter(0)}> neutral </button>
// 				<button onClick = {badCounter(0)}> bad </button>

// 				<h2> Statistics </h2> 

// 				<Statistics text1 = 'good' text2 = 'bad' text3 = 'neutral' val1 = {good} val2 = {bad} val3 = {neutral}/>
// 			</div>
// 		)
// }




// const App = () => {
// 	const [selected, setSelected] = useState(0)
// 	const [vote, setVote] = useState(new Array(6).fill(0))
// 	const tempCopy = [...vote]
	
// 	const generateRandomAnecdote = () => {
// 		setSelected(Math.floor(Math.random() * (anecdotes.length)))
// 	}

// 	const getVotes = () => {
// 		tempCopy[selected]+=1
// 		setVote(tempCopy)
// 	}

// 	const getMaxVotes = (v) => {

// 		let maxVotes = 0;
// 		let maxIndex = 0;

// 		for(let i=0;i<v.length;i++) {
// 			if(v[i] > maxVotes) {
// 				maxVotes = v[i]
// 				maxIndex = i
// 			}
// 		}

// 		return [maxVotes, maxIndex]
// 	}

// 	const [maxVotes, maxIndex] = getMaxVotes(vote)
// 	return (
// 			<div>
// 				<p> {anecdotes[selected]} </p>
// 				<p> has {tempCopy[selected]} votes </p>
// 				<button onClick = {generateRandomAnecdote}> Next </button>
// 				<button onClick = {getVotes}> Vote </button>
// 				<h1> Anecdote with most votes </h1>
// 				<p> {anecdotes[maxIndex]} </p>
// 				<p> has {maxVotes} votes </p>
// 			</div>
// 		)
// }



// const anecdotes = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const Course = (props) => {

// 	// var sum = 0
// 	// for(let i=0;i<props.course.parts.length;i++) {
// 	// 	sum += props.course.parts[i].exercises
// 	// }
	
// 	var total = props.course.parts.reduce(function(sum, item) {
// 		return sum += item.exercises
// 	}, 0)
// 	return (
// 			<div>
// 				<h1> {props.course.name} </h1>
// 				<ul>
// 					{props.course.parts.map((item,i) => {
// 						return <li key = {i}> {item.name} {item.exercises} </li>
// 					})}
// 				</ul>
// 				<h3> total of {total} exercises </h3>
// 			</div>
// 		)
// }

// const Total = (props) => {

// 	console.log(props.curcourse)
// 	var total = props.curcourse.reduce(function(sum, item) {
// 		return sum += item.exercises
// 	}, 0)
// 	return (
// 			<h2> total of {total} exercises </h2>
// 		)
// }

// const Course = (props) => {
// 	const course = props.course

// 	return (
// 			<div>
// 				{course.map((item, i) => {
// 					return (
// 						<div>
// 							<h1 key = {i}> {item.name} </h1>
// 							<ul> 
// 								{item.parts.map((it, i) => {
// 									return <li key = {i}> {it.name} {it.exercises} </li>
// 							})}
// 							</ul>
// 							<Total curcourse = {item.parts}/>
// 						</div>
// 						)
// 				})} 
// 			</div>
// 		)
// }

// import App from './components/App';

// const courses = [
//   {
//     name: 'Half Stack application development',
//     id: 1,
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//         id: 1
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//         id: 2
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//         id: 3
//       },
//       {
//         name: 'Redux',
//         exercises: 11,
//         id: 4
//       }
//     ]
//   }, 
//   {
//     name: 'Node.js',
//     id: 2,
//     parts: [
//       {
//         name: 'Routing',
//         exercises: 3,
//         id: 1
//       },
//       {
//         name: 'Middlewares',
//         exercises: 7,
//         id: 2
//       }
//     ]
//   }
// ]


// ReactDom.render(<App courses={courses}/>, document.getElementById('root'));

import App from './components/App';

// const promise = axios.get('http://localhost:3001/notes')

// promise.then(response => {
// 	console.log(response)
// })

// axios.get('http://localhost:3001/notes').then(response => {
// 	const notes = response.data
// 	ReactDom.render(<App notes = {notes}/>, document.getElementById('root'));
// })

ReactDom.render(<App />, document.getElementById('root'))