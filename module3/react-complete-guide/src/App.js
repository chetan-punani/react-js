import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { id: 'as1', name: 'Max', age: 20 },
      { id: 'as2', name: 'Manu', age: 22 },
      { id: 'as3', name: 'Manulay', age: 24 }
    ],
    showPersons: false,
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const person = this.state.persons.slice();
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({persons: person})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inhirit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let person = null;

    if(this.state.showPersons) {
        person = (
          <div>
            {
              this.state.persons.map((person, index) => {
                return <Person 
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}/>
              })
            }
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Chetan!!')}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
        )
    }

    return (
      <div className="App">
        <h1>hi</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Tpggle Person</button>
          {person}
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




