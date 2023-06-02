import FotoPorcoes from '../../../Aseets/IscasDeFrango.png'
import styles from '../Porcoes/index.module.css'
import Caixa from '../../Adicionais/Caixa/Caixa';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido/BotaoFazerPedido';
import TextBox from '../../Adicionais/TextBox/TextBox';
import Produto from '../../models/Produto';
import { useState } from 'react';
import Pedido from '../../models/Pedido';

type Props = {
    produto?: Produto;
}

function PedidoPorcoes (props: Props) {

    const [observacao, setObservacao] = useState('');

    function handleFazerPedido() {
        if (props.produto) {
            const pedido: Pedido = {
                produto: props.produto,
                tipo: 'porcoes',
                adicionais: [],
                opcoes: [],
                observacao,
            }
            //TODO: Salvar o pedido no contexto carrinho.
        }
    }
    
    return(
        <div>
            <div className={styles.card}>
                <div>
                    <img className={styles.FotoPorcoes} src={FotoPorcoes} />
                </div>
                <div className={styles.nomepreco}>
                    <h3>Especial</h3>   
                    <h3>{props.produto?.nome}</h3>
                    <h3>{props.produto?.preco}</h3> 
                </div>
                </div>
                    <Caixa titulo={"Ingredientes"}>
                        <ul>
                            <li>{props.produto?.descricao}</li>
                        </ul>
                    </Caixa>
                    <TextBox onChange={setObservacao}/>
                <BotaoFazerPedido onClick={handleFazerPedido}/>
        </div>
    )
}

export default PedidoPorcoes;