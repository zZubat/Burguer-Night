import { type } from 'os';
import { Link } from 'react-router-dom';
import styles from './BotaoFazerPedido.module.css'

type Props = {  
    onClose(): void;
}

function BotaoFazerPedido () {
    return (
        <button className={styles.borda} onClick={handleClick}>
            Fazer Pedido
                </button>
            </Link>
    )
}

export default BotaoFazerPedido;