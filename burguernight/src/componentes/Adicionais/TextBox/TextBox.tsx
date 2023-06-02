import { useState } from 'react';
import styles from '../TextBox/TextBox.module.css'

type Props = {
    onChange(texto: string): void;
}

function TextBox (props: Props) {

    const [valor, setValor] = useState('');
 
    return (
        <div className={styles.tudo}>
            <div className={styles.titulo}>Alguma observação?</div>
            <span className={styles.limite}>{valor.length} / 140</span>
            

            <textarea
                id="observacao"
                name="observacao"
                maxLength={140}
                className={styles.textbox}
                placeholder="Digite aqui..."
                onChange={function (evento) {
                    setValor(evento.target.value);
                    props.onChange(evento.target.value);
                }}></textarea>
        </div>
        
    )
}

export default TextBox;