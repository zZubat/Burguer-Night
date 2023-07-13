import styles from "./index.module.css"

type Props = {
    total:number;
}


function BoxTotal (props: Props) {
    return (
        <div className={styles.boxtotal}>
         <table className={styles.titulos}>               
            <tr className={styles.total}>
                <th>Total</th>
                <td className={styles.td}>R$ {props.total} </td>
            </tr>
         </table>
        </div>
    )
}

export default BoxTotal;