import React, { useState } from 'react';
import Adicional from '../Adicionais/Adicional';
import Tela from '../Tela'


function TelaConfirmacaoDoPedido(){    
    return(
        <Tela> 
            <div>
            <h2>Especial da Noite</h2> 
                <Adicional></Adicional>
            </div>
        </Tela>
    );
}
  
export default TelaConfirmacaoDoPedido;