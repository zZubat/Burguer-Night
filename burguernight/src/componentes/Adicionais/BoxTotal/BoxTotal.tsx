import Pedido from "../../models/Pedido";
import styles from "./index.module.css"

type Props = {
    pedidos?: Pedido[];
}


function BoxTotal (props: Props) {
    let total = 0;
    props.pedidos?.forEach(function (pedido) {
        total = total + pedido.produto.preco;
    });

    return (
        <div className={styles.boxtotal}>
         <table className={styles.titulos}>               
            <tr className={styles.total}>
                <th>Total</th>
                <td className={styles.td}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</td>
            </tr>
         </table>
        </div>
    )
}

export default BoxTotal;