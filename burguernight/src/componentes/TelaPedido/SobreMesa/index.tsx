import Caixa from '../../Adicionais/Caixa/Caixa';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido/BotaoFazerPedido';
import TextBox from '../../Adicionais/TextBox/TextBox';
import FotoSobreMesa from '../../../Aseets/petitgateau.png'
import styles from '../SobreMesa/index.module.css'
import Produto from '../../models/Produto';
import Pedido from '../../models/Pedido';
import { useState } from 'react';
import CarrinhoRepository from '../../../repositories/CarrinhoRepository';

type Props = {
    produto?: Produto;
    onPedidoFeito?(): void;
}

function PedidoSobreMesa(props: Props) {

    const [observacao, setObservacao] = useState('');

    function handleFazerPedido() {
        if (props.produto) {
            const pedido: Pedido = {
                id:CarrinhoRepository.contador(),
                produto: props.produto,
                tipo: 'sobremesa',
                adicionais: [],
                opcoes: [],
                observacao,
            }
            CarrinhoRepository.inserirNovoPedido(pedido);
            if (props.onPedidoFeito) {
                props.onPedidoFeito();
            }
        }
    }

    return(
        <div>
            <div className={styles.card}>
                <div>
                    <img className={styles.FotoSobreMesa} src={FotoSobreMesa} />
                </div>
                <div className={styles.nomepreco}>
                    <h3>Especial</h3>
                    <h3>{props.produto?.nome}</h3>
                    <h3>Preço: {props.produto?.preco}</h3> 
                </div>
            </div>
            <Caixa titulo={"Ingredientes:"}>
                <ul>
                    <li>{props.produto?.adicionais}</li>
                </ul>
            </Caixa>
            <TextBox onChange={setObservacao}/>
            <BotaoFazerPedido onClick={handleFazerPedido}/>
        </div>
    )
}

export default PedidoSobreMesa;