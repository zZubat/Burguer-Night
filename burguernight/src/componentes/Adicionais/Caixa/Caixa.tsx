import { ReactNode } from 'react';
import styles from './Caixa.module.css'

type Props = {
    titulo?: string;
    children: ReactNode;
};

function Caixa (props: Props) {
    
    return (
            <div className={styles.borda}>
                <h3 className={styles.titulo}>{props.titulo}</h3>
                <div className={styles.conteudo}>
                    {props.children}
                </div>
            </div>
    );
}

export default Caixa;