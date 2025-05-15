import Pedidos from "../pedidos"
import PedidosPorEmpanada from "../PedidosPorEmpanada"

const Listado = ({pedidos, pedidosPorEmpanada}) => {

    return (

        <>
            <div>
                <h1> PEDIDOS </h1>
                {pedidos.map((pedido) => (
                    <Pedidos pedido={pedido} />
                ))}
            </div>

            <div>
                <h1> PEDIDOS POR EMPANADA </h1>
                {pedidosPorEmpanada.map((pedidoPorEmpanada) => (
                    <PedidosPorEmpanada pedidosPorEmpanada={pedidoPorEmpanada}/>
                ))}
            </div>
        </>

    )

}

export default Listado