import { ReactNode } from "react"
import styles from './index.module.css'
import imagem from '../../Aseets/backgroundConfirmarPedido.png'

type Props = {
    children: ReactNode;
    //titulo: string;
}

function Tela(props:Props){
    return(
        <div>
            <img className={styles.imagem} src={imagem}/>
            <div className={styles.tela}>
            {props.children}
            </div>
        </div>
    );
}


export default Tela;