import styles from './index.module.css'
import Foto from '../../../Aseets/naosei.jpg'

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
            <div className={styles.card}>
                <div> 
                    <img className={styles.foto} src={Foto}/>
                </div>
                <div className={styles.nomepreco}>
                    <h3>{props.nome}</h3>
                    <h4>Preço: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.preco)}</h4>
                </div>
            </div>
            <div>
               
                <h4 className={styles.titulo}>Um Pouco Sobre:</h4>
                    <ul>
                        <li>{props.descricao}</li>
                    </ul>
               
            </div>
        </div>
        )
}

export default BoxProduto;