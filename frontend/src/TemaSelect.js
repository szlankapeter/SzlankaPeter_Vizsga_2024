function TemaSelect(props) {
  return (
    <select className="form-select" onChange={props.getTemaValue}>
      <option>Válassz témát</option>
      {props.temak.map((element, key) => {
        return (
          <option key={key} value={element.id}>
            {element.temanev}
          </option>
        );
      })}
    </select>
  );
}
export default TemaSelect;
