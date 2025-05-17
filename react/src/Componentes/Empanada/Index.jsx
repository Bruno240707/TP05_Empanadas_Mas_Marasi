import "./Empanada.css"

const Empanadas = ({onGustoChange, onCantidadChange, gusto, cantidad, gustos}) =>{

    return (
        <>
            <label>Gusto</label>
            <select value={gusto} onChange={onGustoChange} required>
                <option value="">Seleccione un gusto</option>
                {gustos.map((g) => (
                    <option value={g}>{g}</option>
                ))}
            </select>

            <label>Cantidad</label>
            <input
                type="number"
                min="1"
                value={cantidad}
                onChange={onCantidadChange}
                required
            />
        </>
    )
}

export default Empanadas