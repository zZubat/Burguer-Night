import styles from './index.module.css'
import FotoLanche from '../../../Aseets/HamburguerAus.jpg';
import Caixa from '../../Adicionais/Caixa/Caixa';
import GrupoDeRadio from '../../Adicionais/GrupoDeRadio/GrupoDeRadio';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido/BotaoFazerPedido';
import Produto from '../../models/Produto';
import TextBox from '../../Adicionais/TextBox/TextBox';
import { useState } from 'react';
import Pedido from '../../models/Pedido';
import CarrinhoRepository from '../../../repositories/CarrinhoRepository';
        
type Props = {
    produto?: Produto;
    onPedidoFeito?(): void;
}


function PedidoHamburguer(props: Props) {

    const [tipoPao, setTipoPao] = useState('');
    const [pontoCarne, setPontoCarne] = useState('');
    const [observacao, setObservacao] = useState('');

    const labelsTipoPao = [
        "Pão Australiano",
        "Pão de Brioche",
        "Pão de 3 Queijos",
        "Pão Tradicional",
    ];

    const labelsPontoDaCarne = [
        "Ao Ponto",
        "Bem Passado",
        "Mal Passado",

    ];

    function handleFazerPedido() {
        if (props.produto) {
            const pedido: Pedido = {
                id:CarrinhoRepository.contador(),
                produto: props.produto,
                tipo: 'hamburguer',
                adicionais: [],
                opcoes: [
                    tipoPao,
                    pontoCarne,
                ],
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

    return (
        <div>
            <div className={styles.card}>
                <div>
                    <img className={styles.FotoLanche} src={FotoLanche} />
                </div>
                <div className={styles.nomepreco}>
                    <h3>{props.produto?.nome}</h3>
                    <h3>Preço: {props.produto?.preco}</h3> 
                </div>
            </div>
            <div>
                <Caixa titulo={"Tipo de Pão"}>
                    <GrupoDeRadio labels={labelsTipoPao} grupo="tipo-pao" onChange={setTipoPao}/>
                </Caixa>
                <Caixa titulo={"Ponto da Carne"}>
                    <GrupoDeRadio labels={labelsPontoDaCarne} grupo="ponto-da-carne" onChange={setPontoCarne}/>
                </Caixa>
                <Caixa titulo={"Ingredientes"}> 
                <ul>
                    <li>{props.produto?.adicionais}</li>
                </ul>
                </Caixa>
            </div>
            <TextBox onChange={setObservacao}/>
            <BotaoFazerPedido onClick={handleFazerPedido}/>
        </div>
    );
}

export default PedidoHamburguer;
