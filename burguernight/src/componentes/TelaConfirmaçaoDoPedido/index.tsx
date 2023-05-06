import React, { useState } from 'react';
import Adicional from '../Adicionais/Adicional';
import Tela from '../Tela'
import styles from './index.module.css'
import HamburguerAus from '../../Aseets/HamburguerAus.jpg';
import iconBack from '../../Aseets/iconBack.png'
import backgroundImage from '../../Aseets/backgroundConfirmarPedido.jpg'

function TelaConfirmacaoDoPedido(){    
    return(
        <Tela>
            <body className={styles.body}>
             <a className={styles.iconback} href=""><img src={iconBack}/></a>
                <div className={styles.card}>

                    <div className={styles.FotoLanche}>
                        <img src={HamburguerAus} />x
                    </div>

                    <div className={styles.nomepreco}>   
                        <h3>Especial da Noite 'Australiano'</h3>
                        <h3>Preço: R$20,00</h3> 
                    </div>

                </div>
                <Adicional></Adicional>
            </body>
        </Tela>
    );
}
 
export default TelaConfirmacaoDoPedido;