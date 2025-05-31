import { useState } from "react"

const Ex4 = () =>{

     const [texto, setTexto] = useState("Exibir");
     const[inputTexto, setInputTexto] = useState("");

     function clicou(){
        setTexto(inputTexto)
     }

       return(
        <div>
            <h1 className=" mt-6 text-2xl font-semibold mb-6 text-gray-800">{texto}</h1>


            <input
            value={inputTexto} 
            onChange={(e)=>{setInputTexto(e.target.value)}}
            type="text" 
            placeholder="Digite algo..."
            className="w-50 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            />

            <button onClick={clicou}  className="w-20 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition">Clicar</button>
        </div>
       )
}

export default Ex4 