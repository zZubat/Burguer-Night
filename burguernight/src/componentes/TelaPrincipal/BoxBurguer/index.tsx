import styles from './index.module.css'

type Props = {
   // imagem: string;
    nome: string;
    ingredientes?: string;
    descricao: string;
    preco: number;
    onClick?(): void;
}

function BoxProduto(props: Props){
    return(
        <div className= {styles.produto} onClick={props.onClick}>
            <h3>{props.nome}</h3>
            <span>{props.ingredientes}</span>
            <span>{props.descricao}</span>
            <span className={styles.preco} >{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.preco)}</span>
        </div>
        
    )
    
}

export default BoxProduto;