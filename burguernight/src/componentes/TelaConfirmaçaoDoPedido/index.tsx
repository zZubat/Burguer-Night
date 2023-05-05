import React, { useState } from 'react';
import Adicional from '../Adicionais/Adicional';
import Tela from '../Tela'
import HamburguerAustraliano from '../imgs/HamburguerAustraliano.png'
import styles from './index.module.css'



function TelaConfirmacaoDoPedido(){    
    return(
        <Tela> 
            <body className={styles.body}>
                <div className={styles.card}>

                    <div className={styles.FotoLanche}>
                        <img src={HamburguerAustraliano}/>
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