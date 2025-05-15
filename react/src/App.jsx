import { useState } from 'react'
import Formulario from './Componentes/Formulario/Index.jsx'
import Listado from './Componentes/Listado/Index.jsx'
import './App.css'

function App() {
  const [pedidos, setPedidos] = useState([])
  const [pedidosPorEmpanada, setPedidosPorEmpanada] = useState([{
    nombre: 'Carne Suave',
    cantidad: 0
  },{
    nombre: 'Carne Picante',
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

        <Formulario setPedidos={setPedidos} setPedidosPorEmpanada={setPedidosPorEmpanada} pedidos={pedidos} pedidosPorEmpanada={pedidosPorEmpanada}/>

        <Listado pedidos={pedidos} pedidosPorEmpanada={pedidosPorEmpanada}/>

      </div>
    </>
  )
}

export default App
