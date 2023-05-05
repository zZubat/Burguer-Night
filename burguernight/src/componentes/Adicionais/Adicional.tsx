import react from "react";
import SpinnerAdicionais from './SpinnerAdicionais'
import styles from './Adicional.module.css'

function Adicional() { 

    return(
        <div className={styles.Adicional}>
        <h3>Tipos de Pães</h3>
         <h6>Pão Australino   <SpinnerAdicionais/></h6>  
         <h6>Pão de Brioche   <SpinnerAdicionais/></h6>
         <h6>Pão de 3 Queijos <SpinnerAdicionais/></h6>
         <h6>Pão Tradicional  <SpinnerAdicionais/></h6>
                    
       <h3>Ponto da Carne</h3>
         <h6>Ao Ponto</h6>
         <h6>Bem Passado</h6>

        <h3>Porções</h3>
         <h6>Batata</h6>
         <h6>Batata C/ Cheddar</h6>
         <h6>Batata C/ Cheddar e Bacon</h6>
        </div>
    )
}
export default Adicional;