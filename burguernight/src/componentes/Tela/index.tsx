import { ReactNode } from "react"
import styles from './index.module.css'

type Props = {
    children: ReactNode;
    barraTopo?: ReactNode;
}

function Tela(props:Props){
    return(
        <div className={styles.tela}>
            <div>
                {props.barraTopo}
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    );
}


export default Tela;