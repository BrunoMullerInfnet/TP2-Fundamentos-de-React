import { useState } from "react";
import Mensagem from "./Mensagem";
import "./App.css";

function App() {
  const [mensagem, setMensagem] = useState("");

  const handleMensagem = (ev) => {
    setMensagem(ev.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Digite aqui" onChange={handleMensagem} />
      <Mensagem mensagem={mensagem} />
    </>
  );
}

export default App;
