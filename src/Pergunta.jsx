import { useState } from "react";

const Pergunta = ({enunciado, alternativas, correta, onResposta}) =>{

    const [respondida, setRespondida] = useState(false);
    const [selecionada, setSelecionada] = useState(null);


      const handleClick = (index) => {
    if (respondida) return; 

    setSelecionada(index); 
    setRespondida(true); 

    const acertou = index === correta; 
    onResposta(acertou); 
  };


    return(
        <div>
            <h1>{enunciado}</h1>
           <ul>
        {alternativas.map((alt, index) => (
          <li key={index}>
            <button onClick={() => handleClick(index)} disabled={respondida}>
              {alt}
            </button>
            {respondida && index === correta && <span> ✅</span>}
            {respondida && index === selecionada && index !== correta && <span> ❌</span>}
          </li>
        ))}
      </ul>
        </div>
    )
}

export default Pergunta