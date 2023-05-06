import react from "react";
import SpinnerAdicionais from './SpinnerAdicionais'
import styles from './Adicional.module.css'

function Adicional() { 

    return(
        <div className={styles.Adicional}>
        <section className={styles.border}>  
         <h3 className={styles.titulo}>Tipos de Pães</h3>
          <div className={styles.esquerda}>
           <h6>Pão Australino</h6>  
           <h6>Pão de Brioche</h6>
           <h6>Pão de 3 Queijos</h6>
           <h6>Pão Tradicional</h6>
          </div> 
        </section>   
        
        <section className={styles.border}>       
         <h3 className={styles.titulo}>Ponto da Carne</h3>
          <div className={styles.esquerda}>
           <h6>Ao Ponto</h6>
           <h6>Bem Passado</h6>
           <h6>Mal Passado</h6>
          </div>
        </section>

        <section className={styles.border}>
         <h3 className={styles.titulo}>Porções</h3>
          <div className={styles.esquerda}>
           <h6>Batata</h6>
           <h6>Batata C/ Cheddar</h6>
           <h6>Batata C/ Cheddar e Bacon</h6>
          </div>
        </section>
        </div>
    )
}
export default Adicional;