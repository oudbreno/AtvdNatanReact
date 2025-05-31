//atvd 3
import {useState} from "react"

const Contador = () =>{
    const[numero, setNumero] = useState(0)
    
    return(
        <div>
            <h1 class="text-3xl font-bold">{numero}</h1>
            <button onClick={() =>{setNumero(numero + 1)}} class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition">+1</button>
            <button onClick={() =>{if(numero<1){console.error("Não é possivel Um Valor Menor Que 0")}else{setNumero(numero - 1)}}} class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition">-1</button>

        </div>
    )
}

export default Contador