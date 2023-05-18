import { CaretLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Tela from '../Tela'
import styles from './index.module.css'

function Pagamento() {
    return (
            <Tela  barraTopo={
                <div className={styles.topo}>
                    <Link to="/">
                        <a className={styles.iconback}>
                            <CaretLeft color="#fff" size={42} />
                        </a>
                    </Link>
                    <div>
                        <h3 className={styles.texttopo}>FINALIZAR PAGAMENTO</h3>
                    </div>
                </div>
            }>

                <div className={styles.cardpedidos}>
                    <h3>Pedidos</h3>
                </div>  
                <div>
                  <BoxCupons/>
                  <BoxTotal subtotal={100} desconto={60} total={40}/>
                  <BoxFormasdePagamento />
                </div>  
            </Tela>
    )
}

export default Pagamento;