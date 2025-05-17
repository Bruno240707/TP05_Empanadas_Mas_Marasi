import "./Lista.css"

const Lista = ({ pedidos, pedidosPorGusto }) => {
    return (
        <>
            <div>
                <h1>PEDIDOS</h1>
                {pedidos.map((pedido) => (
                    <div>
                        <p>Nombre: <span>{pedido.nombre}</span></p>
                        <p>Sector: <span>{pedido.sector}</span></p>
                        <div>
                            <p>Empanadas:</p>
                            {pedido.empanadas.map((emp) => (
                                <div>
                                    <p>Gusto: {emp.gusto}</p>
                                    <p>Cantidad: {emp.cantidad}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <h1>PEDIDOS POR EMPANADA</h1>
                {pedidosPorGusto.map((pedidoPorGusto) => (
                    <div>
                        <p>Gusto: <span>{pedidoPorGusto.gusto}</span></p>
                        <p>Cantidad: <span>{pedidoPorGusto.cantidad}</span></p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Lista;
