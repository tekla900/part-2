import Person from './Person'

const Content = ({ personsFilter }) => {
    return (
      <ul>
          {personsFilter.map(person =>
            <Person key={person.name} person={person} />)}
        </ul>
    )
  }

export default Content