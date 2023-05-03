import React, { useState } from 'react';
import Adicionais from '../Adicionais/Adicionais';
import Tela from '../Tela'


function TelaConfirmacaoDoPedido(){    
    return(
        <Tela>
            <div>
                <h1>Confirmação Do Pedido.</h1>
                <h2>Especial da Noite</h2>  
                <Adicionais/>          
            </div>
        </Tela>
    );
}

  
export default TelaConfirmacaoDoPedido;