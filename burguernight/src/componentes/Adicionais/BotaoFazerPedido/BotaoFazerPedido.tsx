import styles from './BotaoFazerPedido.module.css'

type Props = {  
    onClick(): void;
}

function BotaoFazerPedido (props: Props) {
    return (
        <button className={styles.borda} onClick={props.onClick}>
            Fazer Pedido
        </button>
    )
}

export default BotaoFazerPedido;