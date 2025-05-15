
const Pedidos = ({pedido}) => {
    
    return (
        <>
        <div>
            <p>Nombre: <span>{pedido.nombre}</span></p>
            <p>Sector: <span>{pedido.sector}</span></p>
            <p>Empanadas: <span>{pedido.empanadas.map((emp) => (
                <>
                    <p>Nombre: {emp.gusto}</p>
                    <p>Cantidad: {emp.cantidad}</p>
                </>
            ))}</span></p>
        </div>
        </>
    )    

}

export default Pedidos