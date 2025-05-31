import Pergunta from './Pergunta.jsx'
import { useState } from "react";

const App = () =>{
  
  const perguntas = [
    {
      enunciado: "Qual a capital do Brasil?",
      alternativas: ["São Paulo", "Brasília", "Rio de Janeiro", "Belo Horizonte"],
      correta: 1,
    },
    {
      enunciado: "Quanto é 2 + 2?",
      alternativas: ["3", "4", "5", "22"],
      correta: 1,
    },
    {
      enunciado: "Quem escreveu 'Dom Casmurro'?",
      alternativas: ["Machado de Assis", "José de Alencar", "Drummond", "Clarice Lispector"],
      correta: 0,
    }
  ];

  const [atual, setAtual] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const handleResposta = (acertou) => {
    if (acertou) setPontuacao(p => p + 1);

    setTimeout(() => {
      if (atual + 1 < perguntas.length) {
        setAtual(atual + 1);
      } else {
        setFinalizado(true);
      }
    }, 1000); // espera 1s antes de ir pra próxima pergunta
  };
  
  return(
    <div><h1 class="text-3xl font-bold underline text-red-800">
                  Essas são minhas atividades!
  </h1>


      {!finalizado ? (
        <Pergunta
          enunciado={perguntas[atual].enunciado}
          alternativas={perguntas[atual].alternativas}
          correta={perguntas[atual].correta}
          onResposta={handleResposta}
        />
      ) : (
        <h2>✅ Você acertou {pontuacao} de {perguntas.length} perguntas!</h2>
      )}

  </div>
  )
}

export default App