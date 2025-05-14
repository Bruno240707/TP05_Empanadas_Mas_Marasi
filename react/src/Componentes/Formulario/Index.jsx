import { useState } from "react"
import Empanadas from "../Empanadas/Index"

const Formulario = ({setPedidosPorEmpanada, setPedidos, pedidos, pedidosPorEmpanada}) => {

    const [nombre, setNombre] = useState("");
    const [sector, setSector] = useState("");
    const [empanadas, setEmpanadas] = useState({gusto: "", cantidad: 1})

    const sectores = ['Sistemas', 'Finanzas', 'Ventas', 'Recursos Humanos', 'Soporte', 'Depósito']
    const gustos = ['Carne suave', 'Carne Picante', 'Pollo', 'Jamon y Queso']

    const agregarOtraEmpanada = (e) => { 
        e.preventDefault()
        setEmpanadas([...empanadas, {gusto: "", cantidad: 1}])
    }

    const actualizarGusto = (empanadaRef, value) => {
        empanadaRef.gusto = value;
        setEmpanadas([...empanadas]);
    };

    const actualizarCantidad = (empanadaRef, value) => {
        empanadaRef.cantidad = parseInt(value);
        setEmpanadas([...empanadas]);
    };

    const enviarPedido = (e) => {

        e.preventDefault()

        const nuevoPedido = {
            nombre,
            sectorTrabajo: sector,
            empanadas
        };
        
        setPedidos([...pedidos, nuevoPedido])

        const nuevosTotales = pedidosPorEmpanada.map(p => {
            const totalExtra = empanadas.reduce((acum, emp) => {
                return emp.gusto === p.nombre ? acum + emp.cantidad : acum;
            }, 0);
            return {
                nombre: p.nombre,
                cantidad: p.cantidad + totalExtra
            };
        });
        setPedidosPorEmpanada(nuevosTotales);


        setNombre("");
        setSector("");
        setEmpanadas([{ gusto: "", cantidad: 1}]);
    }



    return (
        <>  
            <h2>PEDIDO</h2>
            <form onSubmit={enviarPedido}>
                <label>Ingresar Nombre</label>
                <input type="text" name="nombre" placeholder="Ingrese su nombre" onChange={(e) => setSector(e.target.value)}></input>

                <label>Ingrese su sector de trabajo</label>
                <select name="sector" onChange={(e) => setNombre(e.target.value)}>
                {sectores.map((sector, index) => {
                    return (
                        <option key={index} value={sector}>
                            {sector}
                        </option>
                        );
                    })}
                </select>

                {empanadas.map((emp, i) => (
                    <Empanadas
                        key={i}
                        gustos={gustos}
                        gusto={emp.gusto}
                        cantidad={emp.cantidad}
                        onGustoChange={(e) => actualizarGusto(emp, e.target.value)}
                        onCantidadChange={(e) => actualizarCantidad(emp, e.target.value)}
                    />
                ))}

                <div>
                    <button onClick={agregarOtraEmpanada}> Otra Empanada </button>
                </div>

                <div>
                    <button type="submit"> Enviar Pedido </button>
                </div>

            </form>
        </>
    )

}

export default Formulario