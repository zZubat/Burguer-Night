import styles from '../Bebidas/index.module.css'
import FotoBebida from '../../../Aseets/BebidaCocaCola.png';
import Caixa from '../../Adicionais/Caixa/Caixa';
import GrupoDeRadio from '../../Adicionais/GrupoDeRadio/GrupoDeRadio';
import Produto from '../../models/Produto';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido/BotaoFazerPedido';
import TextBox from '../../Adicionais/TextBox/TextBox';


type Props = {
    produto?: Produto;
}

function PedidoBebidas(props: Props) {

    const labelsGelo = [
        "Gelo e limão",
        "Apenas Gelo",
        "Sem Gelo",
    ]

    return (
        <div>
            <div className={styles.card}>
                <div>
                    <img className={styles.FotoBebida} src={FotoBebida} />
                </div>
                <div>
                  <h3>{props.produto?.nome}</h3>
                  <h3>R$ {props.produto?.preco}</h3>
                </div>
            </div>
            <Caixa titulo={"Adicional"}>
                <GrupoDeRadio labels={labelsGelo} grupo="gelo" />
            </Caixa>
            <TextBox/>
            <BotaoFazerPedido/>
        </div>
    )
}

export default PedidoBebidas;