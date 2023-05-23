import { ReactNode, useEffect, useState } from 'react';
import styles from './styles.module.css';
import vl from '../../Aseets/icons8-à-esquerda-dentro-de-um-círculo-24.png'

type Props = {
    titulo: string;
    aberto: boolean;
    children: ReactNode;
    onClose(): void;
}

function Modal(props: Props) {
    const [className, setClassName] = useState((props.aberto) ? `${styles.modal} ${styles.aberto}` : `${styles.modal} ${styles.fechado}`);

    useEffect(function () {
        setClassName((props.aberto) ? `${styles.modal} ${styles.aberto}` : `${styles.modal} ${styles.fechado}`);
    }, [props.aberto]);

    function botaoFecharClicado() {
        props.onClose();
    }

    return (
        <div className={className}>
            <header>
                <button onClick={botaoFecharClicado} className={styles.btFechar}><img src={vl} alt="" /></button>
                <span>{props.titulo}</span>
            </header>
            
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;