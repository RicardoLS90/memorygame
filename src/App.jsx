import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import iconsCard from './inconsCard.jsx'

function App() {
  const [iconsList, setIconList] = useState(iconsCard.sort(() => Math.random() - 0.5))
  // const iconsList = iconsCard.sort(() => Math.random() - 0.5)
  const [prevIndex, setPrevIndex] = useState(-1)


  const selectCard = (index) => {
    iconsList[index].status = "selected"
    setIconList([...iconsList])
    if (prevIndex === -1) {
      setPrevIndex(index)
    }
    else {
      validateCard(index)
    }
  }


  const validateCard = (newindexcard) => {
    setTimeout(() => {
      const prev= iconsList[prevIndex]
      const last= iconsList[newindexcard]
      if (prev.icon===last.icon) {
        prev.status= "up"
        last.status= "up"
        alert("Good!")
        finishGame();
      } else{
      prev.status = "down"
      last.status = "down"
    }
      setIconList([...iconsList])
      setPrevIndex(-1);
    }, 500);

  }

  const [counter, setCounter]=useState(0)
  const finishGame =()=> {
    for (let i=0; i<iconsList.length; i++) {
      if (iconsList[i].status === 'up') {
        setCounter(counter+1)
      } 
    }
  }
   
  if (counter===8) {
    alert('Congratulations, thankyou for playing. Reload for play again!')
  
  }

  // const playAgain= ()=> {
  //   setIconList()
  // }
  // console.log(counter)

  return (
    <div className="App">
      <h1>Let's test your memory</h1>
      {/* <button onClick={playAgain} >Play Again</button> */}
      <div className='icon-container'>
        {iconsList.map((icon, i) => (
          <div
            className={`card ${icon.status}`}
            key={icon.id}
            onClick={() => { selectCard(i) }}>
            {
              icon.status !== "down" && (
                <i className={icon.icon}></i>
              )
            }

          </div>
        ))}
      </div>
    </div>
  )
}

export default App
