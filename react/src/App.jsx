import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Formulario from './Componentes/Formulario/Index'
import Lista from './Componentes/Lista/Index'

function App() {
  const [pedidos, setPedidos] = useState([])
  const [pedidosPorGusto, setPedidosPorGusto] = useState([{
    gusto: "Jamon y Queso",
    cantidad: 0
  },{
    gusto: "Carne Picante",
    cantidad: 0
  }
  ])

  return (
    <>
      <div>
        <Formulario pedidosPorGusto={pedidosPorGusto} setPedidos={setPedidos} setPedidosPorGusto={setPedidosPorGusto} pedidos={pedidos}/>
      </div>
      <div>
        <Lista pedidos={pedidos} pedidosPorGusto={pedidosPorGusto}/>
      </div>
    </>
  )
}

export default App
