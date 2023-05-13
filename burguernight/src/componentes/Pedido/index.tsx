import Adicional from '../Adicionais/Adicional';
import Tela from '../Tela'
import styles from './index.module.css'
import HamburguerAus from '../../Aseets/HamburguerAus.jpg';
import iconBack from '../../Aseets/Sinalback.png'
import Caixa from '../Adicionais/Caixa';
import GrupoDeRadio from '../Adicionais/GrupoDeRadio/GrupoDeRadio';
import { Link } from 'react-router-dom';
import {CaretLeft} from '@phosphor-icons/react';

function Pedido(){   
    
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

    return(
        <Tela barraTopo={
            <Link to="/">
                <a className={styles.iconback}>
                    <CaretLeft color="#fff" size={40} />
                </a>
            </Link>
           
        }>
            <div className={styles.card}>
                <div>
                    <img className={styles.FotoLanche} src={HamburguerAus} />
                </div>
                <div className={styles.nomepreco}>   
                    <h3>Especial da Noite 'Australiano'</h3>
                    <h3>Preço: R$20,00</h3> 
                </div>
            </div>

            <section>
                <Caixa titulo={"Tipo de Pão"}>
                    <GrupoDeRadio labels={labelsTipoPao} grupo="tipo-pao"/>
                </Caixa>
                <Caixa titulo={"Ponto da Carne"}>
                    <GrupoDeRadio labels={labelsPontoDaCarne} grupo="ponto-da-carne"/>
                </Caixa>
                <Caixa titulo={"Porções"}>
                    <p>Batata C/ Cheddar e Bacon</p>
                    <p>Batata C/ Cheddar</p>
                    <p>Batata</p>
                </Caixa>
            </section>
            
            <Adicional/>
        </Tela>
    );
}
 
export default Pedido;