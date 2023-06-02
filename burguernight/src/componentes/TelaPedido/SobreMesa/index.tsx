import Caixa from '../../Adicionais/Caixa/Caixa';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido/BotaoFazerPedido';
import TextBox from '../../Adicionais/TextBox/TextBox';
import FotoSobreMesa from '../../../Aseets/petitgateau.png'
import styles from '../SobreMesa/index.module.css'
import Produto from '../../models/Produto';

type Props = {
    produto?: Produto;
}

function PedidoSobreMesa(props:Props) {
    return(
        <>
                <div className={styles.card}>
                    <div>
                        <img className={styles.FotoSobreMesa} src={FotoSobreMesa} />
                    </div>
                    <div className={styles.nomepreco}>
                    <h3>{props.produto?.nome}</h3>
                    <h3>R$ {props.produto?.preco},00</h3> 
                </div>
                </div>
                <Caixa titulo={"Ingredientes:"}>
                    <ul>
                        <li>{props.produto?.descricao}</li>
                    </ul>
                </Caixa>
                <TextBox/>
                <BotaoFazerPedido/>
        </>
    )
}

export default PedidoSobreMesa;