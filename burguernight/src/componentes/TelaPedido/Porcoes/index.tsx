import FotoPorcoes from '../../../Aseets/IscasDeFrango.png'
import styles from '../Porcoes/index.module.css'
import Caixa from '../../Adicionais/Caixa/Caixa';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido/BotaoFazerPedido';
import TextBox from '../../Adicionais/TextBox/TextBox';
import Produto from '../../models/Produto';

type Props = {
    produto?: Produto;
}

function PedidoPorcoes(props:Props) {
    return (
        <>
            <div className={styles.card}>
                <div>
                    <img className={styles.FotoPorcoes} src={FotoPorcoes} />
                </div>
                <div className={styles.nomepreco}>
                    <h3>{props.produto?.nome}</h3>
                    <h3>R$ {props.produto?.preco}</h3> 
                </div>
            </div>
            <Caixa titulo={"Ingredientes"}>
                <ul>
                    <li>{props.produto?.descricao}</li>
                </ul>
            </Caixa>
            <TextBox />
            <BotaoFazerPedido />
        </>
    )
}

export default PedidoPorcoes;