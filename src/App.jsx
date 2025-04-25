import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
 
    <div>
    <h1 className='titulo'>BLOG DO FELYPE</h1>
    </div>

    <div className='card'>
      <div className='primeiros'>
      <img className='imgcard' src='https://cdn-icons-png.flaticon.com/512/4519/4519678.png'></img>
      <h3>Felype Carlos</h3>
      </div>
      <p className='texto'>   
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
         when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p>12/02/2008 16:00</p>
    

      
    </div>

      </div>
    </>
  )
}

export default App
