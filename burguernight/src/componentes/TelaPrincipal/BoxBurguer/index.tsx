type Props = {
   // imagem: string;
    nome: string;
    ingredientes?: string;
    descricao: string;
    preco: number;
}

function BoxProduto(props: Props){
    return(
        <div>
            <h3>{props.nome}</h3>
            <span>{props.ingredientes}</span>
            <span>{props.descricao}</span>
            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.preco)}</span>
        </div>
        
    )
    
}

export default BoxProduto;