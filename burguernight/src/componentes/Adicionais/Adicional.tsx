import react from "react";
import SpinnerAdicionais from './SpinnerAdicionais'
import styles from './Adicional.module.css'

function Adicional() { 

    return(
        <div className={styles.Adicional}>
        <section className={styles.border1}>  
         <h3 className={styles.titulo}>Tipos de Pães</h3>
          <div className={styles.esquerda}>
           <p>Pão Australino</p>  
           <p>Pão de Brioche</p>
           <p>Pão de 3 Queijos</p>
           <p>Pão Tradicional</p>
          </div> 
        </section>   
        
        <section className={styles.border2}>       
         <h3 className={styles.titulo}>Ponto da Carne</h3>
          <div className={styles.esquerda}>
           <p>Ao Ponto</p>
           <p>Bem Passado</p>
           <p>Mal Passado</p>
          </div>
        </section>

        <section className={styles.border3}>
         <h3 className={styles.titulo}>Porções</h3>
          <div className={styles.esquerda}>
           <p>Batata</p>
           <p>Batata C/ Cheddar</p>
           <p>Batata C/ Cheddar e Bacon</p>
          </div>
        </section>
        </div>
    )
}
export default Adicional;