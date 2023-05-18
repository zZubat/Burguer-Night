import Tela from "../Tela";
import styles from "./index.module.css"


function BoxCupom () {
    return (
        <div className={styles.boxcupons}>
            <hgroup className={styles.titulos}>
                <h1>Cupom</h1>
                <h2>Confira os cupons dispomiveis</h2>
            </hgroup>
            <button className={styles.botao}>Ver</button>
        </div>
    )
}   

export default BoxCupom; 