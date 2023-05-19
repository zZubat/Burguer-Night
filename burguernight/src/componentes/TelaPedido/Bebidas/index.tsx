import styles from '../Bebidas/index.module.css'
import CaretLeft from "@phosphor-icons/react/dist/icons/CaretLeft";
import { Link } from "react-router-dom";
import Tela from '../../Tela'
import FotoBebida from '../../../Aseets/CocaCola.png';
import Caixa from '../../Adicionais/Caixa';
import GrupoDeRadio from '../../Adicionais/GrupoDeRadio/GrupoDeRadio';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido';


function PedidoBebidas () {
    
    const labelsGelo = [
        "Gelo e limão",
        "Apenas Gelo",
        "Sem Gelo",
    ]
    
    return (
        <Tela barraTopo={
            <Link to="/">
                <a className={styles.iconback}>
                    <CaretLeft color="#fff" size={42} />
                 </a>
            </Link>
        }>
                <div className={styles.card}>
                    <div>
                        <img className={styles.FotoBebida} src={FotoBebida} />
                    </div>
                    <div className={styles.nomepreco}>   
                        <h3>Coca Cola</h3>
                        <h3>Preço: R$5,00</h3> 
                    </div>
                </div>
                <div>
                    <Caixa titulo={"Algo no Copo? (Obrigatório)"}>
                        <GrupoDeRadio labels={labelsGelo} grupo="gelo"/>
                    </Caixa>
                    <Caixa titulo={"Alguma Observação?"}>
                        <div>
                            <h3>Teste da aba Observação</h3>
                        </div>
                    </Caixa>
                </div>
                <BotaoFazerPedido/>
        </Tela>
    )
}

export default PedidoBebidas;