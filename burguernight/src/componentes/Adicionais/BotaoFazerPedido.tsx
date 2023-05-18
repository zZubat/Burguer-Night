import { Link } from 'react-router-dom';
import styles from './BotaoFazerPedido.module.css'


function BotaoFazerPedido () {
    return (
            <Link to={"/"}>
                <button className={styles.borda}>
                    <p>Fazer Pedido</p>
                </button>
            </Link>
    )
}

export default BotaoFazerPedido;