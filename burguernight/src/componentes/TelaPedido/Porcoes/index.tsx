import { CaretLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Tela from '../../Tela';
import FotoPorcoes from '../../../Aseets/IscasDeFrango.png'
import styles from '../Porcoes/index.module.css'
import Caixa from '../../Adicionais/Caixa/Caixa';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido/BotaoFazerPedido';
import TextBox from '../../Adicionais/TextBox/TextBox';

function PedidoPorcoes () {
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
                        <img className={styles.FotoPorcoes} src={FotoPorcoes} />
                    </div>
                    <div className={styles.nomepreco}>
                        <h3>Especial</h3>   
                        <h3>'Iscas de Frango com Batata'</h3>
                        <h3>Preço: R$18,90</h3> 
                    </div>
                </div>
                <Caixa titulo={"Ingredientes"}>
                    <ul>
                        <li>Frango Empanado</li>
                        <li>Batata Frita</li>
                        <li>Nuggets de Frango</li>
                        <li>Molho de Tomate</li>
                    </ul>
                </Caixa>
                <TextBox/>
                <BotaoFazerPedido/>
        </Tela>
    )
}

export default PedidoPorcoes;