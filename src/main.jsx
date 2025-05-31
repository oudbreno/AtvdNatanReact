import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ex1 from './Ex1.jsx'
import Ex2 from './Ex2.jsx'
import Contador from './Contador.jsx'
import Ex4 from './Ex4.jsx'
import Produto from './Produto.jsx'
import Pergunta from './Pergunta.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Ex1 nome = "Natan"/>
    <Ex2 profissao="Professor" idade="?" cidade="Mato Grosso?"/>
    <Contador/>
    <Ex4/>
    <Produto nome="Erva Medicinal" valor="1000 reais"/>
    <Produto nome="Pó de Giz" valor="10 reais"/>
    <Produto nome="Bala de Morango" valor="50 reais"/>
    <Produto nome="Perfume" valor="72 reais"/>
    <Produto nome="Pedra Preciosa" valor="2 reais"/>
  </StrictMode>,
)
