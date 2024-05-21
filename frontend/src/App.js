import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Tabla from "./Tabla";
import TemaSelect from "./TemaSelect";

function App() {
  const [temak, setTemak] = useState([]);
  const [szavak, setSzavak] = useState([]);
  const [szurtSzavak, setSzurtSzavak] = useState([]);
  const [selectedTema, setSelTema] = useState(null);

  useEffect(() => {
    getTermeks();
    getSzavak();
    getSzurtSzavak();
  }, [selectedTema]);

  const getTermeks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/tema");
      setTemak(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSzavak = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/szavak");
      setSzavak(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSzurtSzavak = async () => {
    try {
      const temaId = selectedTema;
      const response = await axios.get(
        "http://localhost:8000/api/szavak/tema/" + temaId
      );
      setSzurtSzavak(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function getTemaValue(e) {
    setSelTema(e.target.value);
  }

  function check(e) {}

  return (
    <div className="App">
      <h1>Szavak</h1>

      <TemaSelect getTemaValue={getTemaValue} temak={temak} />

      <Tabla
        selectedTema={selectedTema}
        szavak={szavak}
        szurtSzavak={szurtSzavak}
        check={check}
      />
    </div>
  );
}

export default App;
