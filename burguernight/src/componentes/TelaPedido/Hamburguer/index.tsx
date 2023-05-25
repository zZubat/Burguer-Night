import styles from './index.module.css'
import FotoLanche from '../../../Aseets/HamburguerAus.jpg';
import Caixa from '../../Adicionais/Caixa/Caixa';
import GrupoDeRadio from '../../Adicionais/GrupoDeRadio/GrupoDeRadio';
import BotaoFazerPedido from '../../Adicionais/BotaoFazerPedido/BotaoFazerPedido';
import Produto from '../../models/Produto';
import TextBox from '../../Adicionais/TextBox/TextBox';
        
type Props = {
    produto?: Produto;
}


function PedidoHamburguer(props: Props) {

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

    return (
        <div>
            <div>
                <div>
                    <img className={styles.FotoLanche} src={FotoLanche} />
                </div>
                <h3>{props.produto?.nome}</h3>
                <h3>R${props.produto?.preco}</h3>     
                <div>
                    <Caixa titulo={"Tipo de Pão"}>
                        <GrupoDeRadio labels={labelsTipoPao} grupo="tipo-pao"/>
                    </Caixa>
                    <Caixa titulo={"Ponto da Carne"}>
                        <GrupoDeRadio labels={labelsPontoDaCarne} grupo="ponto-da-carne"/>
                    </Caixa>
                    <Caixa titulo={"Ingredientes"}> 
                    <ul>
                        <li>Pão</li>
                        <li>Bacon</li>
                        <li>Queijo Coalho Grelhado</li>
                        <li>Tomate</li>
                        <li>Carne Seca</li>
                        <li>Rúcula</li>
                        <li>Hamburguer de Costela</li>
                    </ul>
                    </Caixa>
                </div>
                <BotaoFazerPedido/>
            </div>
        </div>
    );
}

export default PedidoHamburguer;
