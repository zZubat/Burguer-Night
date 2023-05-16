import { Link } from 'react-router-dom';
import styles from './index.module.css'

function Carrinho (){
    return(
        <Link to={"Pagamento"}>
            <a className={styles.botaoCarrinho}/>
        </Link>
    );
}

export default Carrinho;