type Props = {
   // imagem: string;
    nome: string;
    ingredientes: string;
    descricao: string;
    preco: number;
}

function Burguer(props: Props){
    return(
        <div>
            <h1>{props.nome}</h1>
            <h2>{props.ingredientes}</h2>
            <h4>{props.descricao}</h4>
            <h1>{props.preco}</h1>
        </div>
        
    )
    
}

export default Burguer;