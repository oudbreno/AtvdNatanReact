//Exercissio 6
const Produto = (props) =>{
    return(
        <div>
            <h1 className=" mt-6 text-2xl font-semibold mb-6 text-black">{props.nome} custa {props.valor}</h1>
        </div>
    )
}

export default Produto