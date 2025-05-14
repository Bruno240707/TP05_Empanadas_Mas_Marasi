import { useState } from 'react'
import Formulario from './Componentes/Formulario/Index.jsx'
import './App.css'

function App() {
  const [pedidos, setPedidos] = useState([])
  const [pedidosPorEmpanada, setPedidosPorEmpanada] = useState([{
    nombre: 'Carne suave',
    cantidad: 0
  },{
    nombre: 'Carne picante',
    cantidad: 0
  },{
    nombre: 'Pollo',
    cantidad: 0
  }, {
    nombre: 'Jamon y Queso',
    cantidad: 0
  }
  ])

  return (
    <>
      <div>

        <Formulario setPedidos={setPedidos} setPedidosPorGusto={setPedidosPorEmpanada} pedidos={pedidos} pedidosPorEmpanada={pedidosPorEmpanada}/>

      </div>
    </>
  )
}

export default App
