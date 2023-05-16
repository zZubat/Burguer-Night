import { CaretLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Tela from '../Tela'
import styles from './index.module.css'

function Pagamento() {
    return (
        <Tela barraTopo={
            <Link to="/">
                <a className={styles.iconback}>
                    <div>
                        <CaretLeft color="#000" size={42} />
                    </div>
                    <div>
                        <h3>Finalizar Pedido</h3>
                    </div>  
                 </a>
            </Link>
        }>
        <div>
            <h3>Teste</h3>
        </div>       
        </Tela>
    )
}

export default Pagamento;