import styles from './index.module.css'
import { Link } from 'react-router-dom';

type Props = {
   // imagem: string;
    nome: string;
    ingredientes?: string;
    descricao: string;
    preco: number;
    onClick?(): void;
}

/*
function AoClicar(){
    return(
        <Link to={ '/Pedido'}></Link>
    );
}
*/

function BoxProduto(props: Props){
    return(
        <button className= {styles.produto} onClick={props.onClick}>
            <h3>{props.nome}</h3>
            <span>{props.ingredientes}</span>
            <span>{props.descricao}</span>
            <span className={styles.preco} >{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.preco)}</span>
        </button>
        
    )
    
}

export default BoxProduto;