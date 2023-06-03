import styles from './index.module.css'

function Navegacao(){
    return(
        <span className={styles.borda}>
            <nav className={styles.navegacao}>
                <a href="#Burguer" >Burguer</a>
                <a href="#Bebidas" >Bebidas</a>
                <a href="#Porções" >Porções</a>
                <a href="#Sobremesas" >Sobremesas</a>
            </nav>
        </span>
    );
}

export default Navegacao; 