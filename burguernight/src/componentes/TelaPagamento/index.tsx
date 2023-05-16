import { CaretLeft, Link } from '@phosphor-icons/react';
import Tela from '../Tela'
import styles from './index.module.css'

function Pagamento() {
    return (
        <Tela barraTopo={
            <Link to="/">
                <a className={styles.iconback}>
                    <CaretLeft color="#fff" size={42} />
                 </a>
            </Link>
        }>
        <div>
            
        </div>       
        </Tela>
    )
}

export default Pagamento;