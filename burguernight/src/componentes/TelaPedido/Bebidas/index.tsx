import styles from '../Bebidas/index.module.css'
import FotoBebida from '../../../Aseets/BebidaCocaCola.png';
import Caixa from '../../Adicionais/Caixa/Caixa';
import GrupoDeRadio from '../../Adicionais/GrupoDeRadio/GrupoDeRadio';
import Produto from '../../models/Produto';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido/BotaoFazerPedido';
import TextBox from '../../Adicionais/TextBox/TextBox';
import { useState } from 'react';
import Pedido from '../../models/Pedido';
import CarrinhoRepository from '../../../repositories/CarrinhoRepository';


type Props = {
    produto?: Produto;
    onPedidoFeito?(): void;
}

function PedidoBebidas(props: Props) {

    const [gelo, setGelo] = useState('');
    const [observacao, setObservacao] = useState('');

    const labelsGelo = [
        "Gelo e limão",
        "Apenas Gelo",
        "Sem Gelo",
    ]

    function handleFazerPedido() {
        if (props.produto) {
            const pedido: Pedido = {
                id:CarrinhoRepository.contador(),
                produto: props.produto,
                tipo: 'bebida',
                adicionais: [
                    gelo,
                ],
                opcoes: [],
                observacao,
            }
            CarrinhoRepository.inserirNovoPedido(pedido);
            if (props.onPedidoFeito) {
                props.onPedidoFeito();
            }
        }
    }

    return (
        <div>
            <div className={styles.card}>
                <div>
                    <img className={styles.FotoBebida} src={FotoBebida} />
                </div>
                <div className={styles.nomepreco}>
                  <h3>{props.produto?.nome}</h3>
                  <h3>Preço: {props.produto?.preco}</h3>
                </div>
            </div>
            <Caixa titulo={"Adicional"}>
                <GrupoDeRadio labels={labelsGelo} grupo="gelo" onChange={setGelo} />
            </Caixa>
            <TextBox onChange={setObservacao}/>
            <BotaoFazerPedido onClick={handleFazerPedido}/>
        </div>
    )
}

export default PedidoBebidas;