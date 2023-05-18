import styles from "./index.module.css"

type Props = {
    subtotal:number;
    desconto: number;
    total:number;
}


function BoxTotal (props: Props) {
    return (
        <div className={styles.boxtotal}>
         <table className={styles.titulos}>
            <tr>
                <th className={styles.th} >Subtotal</th>
                    <td className={styles.td}>R$ {props.subtotal} </td>
            </tr>
                <tr>
                    <th className={styles.th} >Desconto por cupom</th>
                    <td className={styles.td} >
                        {(props.desconto === 0) ? (
                            "Sem uso"
                        ) : (
                            `${props.desconto}%`
                        )}
                    </td>
                </tr>
                    <tr className={styles.total}>
                        <th>Total</th>
                        <td className={styles.td}>R$ {props.total} </td>
                    </tr>
         
         </table>
        
        </div>
    )
}

export default BoxTotal;