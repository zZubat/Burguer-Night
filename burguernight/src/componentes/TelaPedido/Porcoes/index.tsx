import FotoPorcoes from '../../../Aseets/IscasDeFrango.png'
import styles from '../Porcoes/index.module.css'
import Caixa from '../../Adicionais/Caixa/Caixa';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido/BotaoFazerPedido';
import TextBox from '../../Adicionais/TextBox/TextBox';
import Produto from '../../models/Produto';
import { useState } from 'react';
import Pedido from '../../models/Pedido';
import CarrinhoRepository from '../../../repositories/CarrinhoRepository';

type Props = {
    produto?: Produto;
    onPedidoFeito?(): void;
}

function PedidoPorcoes (props: Props) {

    const [observacao, setObservacao] = useState('');

    function handleFazerPedido() {
        if (props.produto) {
            const pedido: Pedido = {
                id:CarrinhoRepository.contador(),
                produto: props.produto,
                categoria: 'porcoes',
                adicionais: [],
                opcoes: [],
                observacao,
            }
            CarrinhoRepository.inserirNovoPedido(pedido);
            console.log("Pedido Feito")
            if (props.onPedidoFeito) {
                props.onPedidoFeito();
            }
            console.log(props.produto)
        }
    }
    
    return(
        <div>
            <div className={styles.card}>
                <div>
                    <img className={styles.FotoPorcoes} src={props.produto?.fotoUrl} />
                </div>
                <div className={styles.nomepreco}>
                    <h3>Especial</h3>   
                    <h3>{props.produto?.nome}</h3>
                    <h3>Preço: R$ {props.produto?.preco},00</h3> 
                </div>
                </div>
                    <Caixa titulo={"Ingredientes"}>
                        <ul>
                            <li>{props.produto?.ingredientes}</li>
                        </ul>
                    </Caixa>
                    <TextBox onChange={setObservacao}/>
                <BotaoFazerPedido onClick={handleFazerPedido}/>
        </div>
    )
}

export default PedidoPorcoes;