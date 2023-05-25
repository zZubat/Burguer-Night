import { type } from 'os';
import { Link } from 'react-router-dom';
import styles from './BotaoFazerPedido.module.css'

type Props = {  
    onClose(): void;
}

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