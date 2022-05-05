import { useState } from 'react'
import Person from './components/Person'

const Heading = ({ heading }) => {
  return (
    <h2>{heading}</h2>
  )
}

const Form = ({ addName, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Content = ({ person }) => {
  return (
    <ul>
        {person.map(person =>
          <Person key={person.name} person={person} />)}
      </ul>
  )
}

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName, 
      number: newNumber
    }
    const currentPerson = persons.filter((person) => person.name === newName);
    if (currentPerson.length === 1) {
      alert(`${newName} is already added to phonebook`)
    } else {
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')  
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <Heading heading='Phonebook'/>
      <Form addName={addName} newName={newName} newNumber={newNumber}
            handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <Heading heading='Numbers'/>
      <Content person={persons} />
    </div>
  )
}

export default App
