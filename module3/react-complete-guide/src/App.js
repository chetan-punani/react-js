import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 20 },
      { name: 'Manu', age: 22 },
      { name: 'Manulay', age: 24 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Manu', age: 22 },
        { name: 'Manu', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'chetan', age: 20 },
        { name: event.target.value, age: 22 },
        { name: 'Manu', age: 27 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inhirit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>hi</h1>
        <button
        style={style} 
        onClick={this.switchNameHandler.bind(this, 'Chetan!')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name}
         age={this.state.persons[1].age}
         click={this.switchNameHandler.bind(this, 'Chetan!!')}
         changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }


}

export default App;

// const app = props => {
//   const [perosonsState, setPersonState] = useState({
//     persons: [
//       { name: 'Max', age: 20 },
//       { name: 'Manu', age: 22 },
//       { name: 'Manulay', age: 24 }
//     ]
//   });

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: 'chetan', age: 20 },
//         { name: 'Manu', age: 22 },
//         { name: 'Manu', age: 27 }
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>hi</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={perosonsState.persons[0].name} age={perosonsState.persons[0].age} />
//       <Person name={perosonsState.persons[1].name} age={perosonsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={perosonsState.persons[2].name} age={perosonsState.persons[2].age} />
//     </div>
//   );

// }

// export default app;




