import { useState } from 'react'
import './App.css'

const Header = () => {
  return <div>
    <h1>Это список моих любимых игроков</h1>
  </div>
}

const Player = (props) => {
  const [score, setScore] = useState(0)
  const { name, age, power, team } = props;

  return <div class='card'>
    <h4>Имя: {name}</h4>
    <p>Возраст: {age}</p>
    <p>Сила: {power}</p>
    <p>Команда: {team}</p>
    <p>Кол-во очков: {score}</p>
    <button onClick={() => {
      setScore((prevScore) => prevScore + 1)
    }}>Забить гол!</button>
    <button onClick={() => {

      setScore((prevScore) => prevScore + 1)
      setScore((prevScore) => prevScore + 1)
      
    }}>Забить 2 гола!</button>
    <button onClick={() => {
      setScore(0);
    }}>Поделом!</button>

    <button>x</button>
  </div>
}

function App() {
const [name, setName] = useState('')  
const [players, setPlayers] = useState([{
      name: 'Ivanov Ivan',
      power: 45,
      age: 15,
      team: 'SomeTeam'
}])
  
  const handleChangeInput = (event) => {
    setName(event.target.value)
  }

  const handleAddNewPlayer = () => {
        setPlayers((a) => {
                return [...a, {name: name}]
            })
        setName('')
  }

  return (
    <>
      <Header />
        <div>
        <input placeholder='Имя футболиста' type='text' onChange={handleChangeInput} value={name} />
        
          <button onClick={handleAddNewPlayer}>
            Сохранить
          </button>  
      </div>
        <div class='card_container'>
        {players.map((item) => {
          if (item.isInactive) {
            return null
          }

          return <Player
            age={item.age}
            name={item.name}
            team={item.team}
            power={item.power}
          />
        })}
        </div>
      </>
)
}


export default App
