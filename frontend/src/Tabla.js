function Tabla(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Angol</th>
          <th scope="col">Magyar</th>
          <th scope="col">visszajelzés</th>
        </tr>
      </thead>
      <tbody>
        {props.selectedTema == "Válassz témát" || props.selectedTema == null ? (
          <tr/>
        ) : (
          props.szurtSzavak.map((element, key) => {
            return (
              <tr key={key}>
                <td>{element.angol}</td>
                <td>
                  <input
                    type="text"
                    value={element.magyar}
                    onChange={props.check}
                  ></input>
                </td>
                <td>X</td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}
export default Tabla;
