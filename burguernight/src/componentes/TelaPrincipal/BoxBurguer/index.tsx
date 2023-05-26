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
        <div className={styles.fundo} onClick={props.onClick}>
            <h3 className={styles.titulo}>{props.nome}</h3>
            <p>{props.ingredientes}</p>
            <p>{props.descricao}</p>
            <p className={styles.preco} >Preço: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.preco)}</p>
        </div>
    )
}

export default BoxProduto;