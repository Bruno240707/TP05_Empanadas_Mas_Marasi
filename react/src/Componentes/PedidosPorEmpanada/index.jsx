
const PedidosPorEmpanada = ({pedidosPorEmpanada}) => {
    
    return (
        <>
        <div>
            <p>Gusto: <span>{pedidosPorEmpanada.nombre}</span></p>
            <p>Cantidad: <span>{pedidosPorEmpanada.cantidad}</span></p>
        </div>
        </>
    )    

}

export default PedidosPorEmpanada