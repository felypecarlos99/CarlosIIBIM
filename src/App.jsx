import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'
const postagens=[
  { name:"Felype Carlos",
    img:"https://cdn-icons-png.flaticon.com/512/4519/4519678.png", 
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    data: "12/02/2008 16:00"
  },
  { name:"Alan Lenda",
    img:"https://cdn-icons-png.flaticon.com/512/4519/4519678.png", 
    text: "O autocuidado não é apenas sobre relaxamento, mas sobre cuidar da sua saúde mental, emocional e física. Reserve um tempo para você, faça algo que te faça feliz e recarregue suas energias. Lembre-se: você merece esse momento!",
    data: "15/03/2003 18:00"
  },
  { name:"Neymar Jr",
    img:"https://cdn-icons-png.flaticon.com/512/4519/4519678.png", 
    text: "A jornada pode ser desafiadora, mas cada passo é um avanço. Confie em si mesmo e no seu esforço. Grandes conquistas começam com pequenos atos de coragem. Você é capaz! ",
    data: "29/10/2004 07:00"
  },
  { name:"Silvio Santos",
    img:"https://cdn-icons-png.flaticon.com/512/4519/4519678.png", 
    text: "Agradeça pelas pequenas coisas do dia a dia, pois são elas que tornam a vida especial. Cultivar a gratidão traz paz ao coração e ilumina o caminho. Seja grato, seja feliz! ",
    data: "03/09/1986 22:00"
  },  
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
 
    <div>
    <h1 className='titulo'>BLOG DO FELYPE</h1>
    </div>
    <Card name={postagens[0].name}
    img={postagens[0].img}
    text={postagens[0].text}
    data={postagens[0].data}
    />
    
    <Card name={postagens[1].name}
    img={postagens[1].img}
    text={postagens[1].text}
    data={postagens[1].data}
    />
    
    <Card name={postagens[2].name}
    img={postagens[2].img}
    text={postagens[2].text}
    data={postagens[2].data}
    />

   <Card name={postagens[3].name}
    img={postagens[3].img}
    text={postagens[3].text}
    data={postagens[3].data}
    />
    </div>

    </>
  )
}

export default App
