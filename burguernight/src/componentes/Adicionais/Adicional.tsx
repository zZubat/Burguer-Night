import react from "react";
import SpinnerAdicionais from './SpinnerAdicionais'
import styles from './Adicional.module.css'

function Adicional() { 

    return(
        <header>

            <body>
            
                <div className={styles.Adicional}>
                    <h5>Pão Australino  <SpinnerAdicionais/></h5>  
                    <h5>Bacon <SpinnerAdicionais/></h5>
                    <h5>Tomate <SpinnerAdicionais/></h5>
                    <h5>Hamburguer de Costela <SpinnerAdicionais/></h5>
                    <h5>Queijo Grelhado <SpinnerAdicionais/></h5>
                    <h5>Carne Seca <SpinnerAdicionais/></h5>
                </div>

            </body>

        </header>
    )
}
export default Adicional;