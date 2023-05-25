import { CaretLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Tela from '../../Tela';
import Caixa from '../../Adicionais/Caixa/Caixa';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido/BotaoFazerPedido';
import TextBox from '../../Adicionais/TextBox/TextBox';
import FotoSobreMesa from '../../../Aseets/petitgateau.png'
import styles from '../SobreMesa/index.module.css'

function PedidoSobreMesa() {
    return(
        <Tela barraTopo={
            <Link to="/">
                <a className={styles.iconback}>
                    <CaretLeft color="#fff" size={42} />
                 </a>
            </Link>
        }>
                <div className={styles.card}>
                    <div>
                        <img className={styles.FotoSobreMesa} src={FotoSobreMesa} />
                    </div>
                    <div className={styles.nomepreco}>
                        <h3>Especial</h3>
                        <h3>{props.produto?.nome}</h3>
                        <h3>{props.produto?.preco}</h3>
                    </div>
                </div>
                <Caixa titulo={"Ingredientes:"}>
                    <ul>
                        <li>Bolo de Chocolate C/ Recheio de Chocolate</li>
                        <li>Uma Bola de Sorvete com o sabor Baunilha</li>
                    </ul>
                </Caixa>
                <TextBox/>
                <BotaoFazerPedido/>
        </Tela>
    )
}

export default PedidoSobreMesa;