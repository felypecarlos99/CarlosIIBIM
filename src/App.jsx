import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Post } from './components/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
 
    <div>
    <h1 className='titulo'>BLOG DO FELYPE</h1>
    </div>
    <Post
    nome='Felype Carlos'
    imagem="https://cdn-icons-png.flaticon.com/512/4519/4519678.png"
    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    data="12/02/2008 16:00">
    </Post>
    
    <Post
    nome='Felype Carlos'
    imagem="https://cdn-icons-png.flaticon.com/512/4519/4519678.png"
    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    data="12/02/2008 16:00">
    </Post>

    <Post
    nome='Felype Carlos'
    imagem="https://cdn-icons-png.flaticon.com/512/4519/4519678.png"
    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    data="12/02/2008 16:00">
    </Post>

    <Post
    nome='Felype Carlos'
    imagem="https://cdn-icons-png.flaticon.com/512/4519/4519678.png"
    texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    data="12/02/2008 16:00">
    </Post>
  
    </div>

    </>
  )
}

export default App
