import { ReactNode } from "react"
import styles from './index.module.css'


type Props = {
    children: ReactNode;
    //titulo: string;
}

function Tela(props:Props){
    return(
        <div className={styles.Tela}>
            {props.children}
        </div>
    );
}


export default Tela;