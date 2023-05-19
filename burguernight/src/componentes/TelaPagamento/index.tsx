import { CaretLeft } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Tela from '../Tela'
import styles from './index.module.css'
import BoxCupons from '../Adicionais/BoxCupom/BoxCupom';
import BoxTotal from '../Adicionais/BoxTotal/BoxTotal';
import BoxFormasdePagamento from '../Adicionais/BoxFormasdePagamento/BoxFormasdePagamento';
import FotoLanche1 from '../../Aseets/HamburguerAus.jpg';
import FotoLanche2 from '../../Aseets/FrangoFrito.png';

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
                    <div className={styles.cardpedido1}>
                        <div>
                            <img className={styles.FotoLanche1} src={FotoLanche1} />
                        </div>
                        <div className={styles.nomepreco1}>   
                            <h3 className={styles.titulo}>Especial 'Australiano'</h3>
                            <h3>Preço: R$20,00</h3> 
                        </div>
                    </div>       
                    <div className={styles.cardpedido2}>
                        <div>
                            <img src={FotoLanche2} className={styles.FotoLanche2}/>
                        </div>
                        <div className={styles.nomepreco2}>
                            <h3 className={styles.titulo}>Especial 'Frango Frito'</h3>
                            <h3>Preço: R$18,90</h3>
                        </div>
                    </div>
                </div>  
                <div>
                    <BoxCupons/>
                    <BoxTotal subtotal={100} desconto={60} total={40}/>
                    <BoxFormasdePagamento/>  
                </div>
            </Tela>
    )
}

export default Pagamento;