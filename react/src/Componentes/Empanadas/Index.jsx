const Empanadas = ({ gustos, gusto, cantidad, onGustoChange, onCantidadChange }) => {
    return (
        <>
            <label>Gusto</label>
            <select value={gusto} onChange={onGustoChange} required>
                <option value="">Seleccione un gusto</option>
                {gustos.map((g, i) => (
                    <option key={i} value={g}>{g}</option>
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
    );
};

export default Empanadas



