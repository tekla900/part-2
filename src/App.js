import { useState } from 'react'
import Form from './components/Form'
import Header from './Header' 
import Content from './components/Content'
import Search from './components/Search'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const[searchName, setNewSearch] = useState('')
  const[personsFilter, setPersonsFilter] = useState(persons)
 
  
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
    setPersonsFilter(personsFilter.concat(nameObject))
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

  const filterPersons = (event) => {
    //ამ წამს პერსონსფილტრი არის თვითონ პერსონ ერეის ტოლი
    //ვქმნით ახალ ცვლადს, რომელსაც ვანიჭებთ ინპუთ ველში ჩაწერილი 
    //სტრინგის მნიშვნელობას ოღონდ დაბალ რეგისტრში ჩაწერილს

    const searchName = event.target.value.toLowerCase()

    //ახალძებნას ვუტოლებთ ამ საძიებოსახელს
    setNewSearch(searchName)

    //შემოგვაქვს ახალი ცვლადი და ვამბობ ესეთ რამეს:
    //ახლა მოცემულ პერსონების ერეის გავფილტრავ, და დავტოვებ მხოლოდ იმათ,
    //რომლების სახელიც გადაყვანილი დაბალ რეგისტრში შეიცავენ საძიებოსახელს
    const newPersons = persons.filter (
      (person) => 
        person.name.toLowerCase().search(searchName) !== -1
    )

    //ამის შემდეგ პერსონების ფილტრს ახალ პერსონებზე ვაყენებ
    setPersonsFilter(newPersons)
  }

  return (
    <div>
      <Header Header='Phonebook'/>
      <Search searchName={searchName} filterPersons={filterPersons} />
      <Form addName={addName} newName={newName} newNumber={newNumber}
            handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <Header Header='Numbers'/>
      <Content personsFilter={personsFilter} />
    </div>
  )
}

export default App
