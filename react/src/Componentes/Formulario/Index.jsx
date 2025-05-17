import { useState } from "react"
import Empanadas from "../Empanada/Index"
import "./Formulario.css"

const Formulario = ({pedidosPorGusto, setPedidos, setPedidosPorGusto, pedidos}) => {

    const Sectores = ['Sistemas', 'Finanzas', 'Ventas', 'Recursos Humanos', 'Soporte', 'Depósito']
    const [empanadas, setEmpanadas] = useState([{gusto: "", cantidad: 0}])
    const gustos = ["Jamon y Queso", "Carne Picante"]

    const agregarOtraEmpanada = (e) => {
        e.preventDefault()
        setEmpanadas([...empanadas, {gusto: "", cantidad: 0}])
    }

    const actualizarGustoEmpanada = (empanadaRef, value) =>{
        empanadaRef.gusto = value;
        setEmpanadas([...empanadas])
    }
    const actualizarCantidadEmpanada = (empanadaRef, value) =>{
        empanadaRef.cantidad = parseInt(value)
        setEmpanadas([...empanadas])
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const nuevoPedido = {
            nombre: e.target.nombre.value,
            sector: e.target.sector.value,
            empanadas: empanadas
        }

        const nuevaLista = pedidosPorGusto.map(empPedidoPorGusto => {
            const empanadasDelGusto = empanadas.filter(emp => emp.gusto === empPedidoPorGusto.gusto);
            const totalCantidad = empanadasDelGusto.reduce((acumulador, emp) => acumulador + emp.cantidad, 0);

            return {
                ...empPedidoPorGusto,
                cantidad: empPedidoPorGusto.cantidad + totalCantidad
            }
        })
        
        setPedidosPorGusto(nuevaLista)
        setPedidos([...pedidos, nuevoPedido])
        setEmpanadas([{gusto: "", cantidad: 0}])
        setGustos(["Jamon y Queso", "Carne Picante"])
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" placeholder="Ingrese su nombre"/>
                </div>
                <div>
                    <label>Sector:</label>
                    <select name="sector">
                        {Sectores.map(sec => (
                            <option value={sec}>{sec}</option>
                        ))}
                    </select>
                </div>

                <div>
                    {empanadas.map((emp) => (
                        <>
                            <Empanadas
                            gustos={gustos}
                            gusto={emp.gusto}
                            cantidad={emp.cantidad}
                            onGustoChange={(e) => actualizarGustoEmpanada(emp, e.target.value)}
                            onCantidadChange={(e) => actualizarCantidadEmpanada(emp, e.target.value)}
                            />
                        </>
                    ))}
                </div>

                <button onClick={agregarOtraEmpanada}>Agregar otra empanada</button>

                <button type="submit">Enviar pedido</button>
            </form>
        </>
    )

}

export default Formulario