import { useState } from "react";
import styles from "./index.module.css"


function BoxCupom () {
    const [aberto, setAberto] = useState(false);

    function abrir() {
        setAberto(true);
    }

    function fechar() {
        setAberto(false);
    }

    return (
        <div className={styles.boxcupons}>
            <header>
                <hgroup className={styles.titulos}>
                    <h1>Cupom</h1>
                    <h2>Confira os cupons dispomiveis</h2>
                </hgroup>
                {(aberto) ? (
                    <button className={styles.botao} onClick={fechar}>Fechar</button>
                    ) : (
                    <button className={styles.botao} onClick={abrir}>Ver</button>
                )}
            </header>
            
            {(aberto) && (
                <div>
                    <div className={styles.boxPix}>
                        <hgroup>
                            <h3>Cupom "PIX"</h3>
                            <h5 className={styles.h5}>Desconto de até 5% para pagamentos em Pix</h5>
                        </hgroup>
                        <button className={styles.botao}>Selecionar</button>
                    </div>
                    <div className={styles.boxPix}>
                        <hgroup>
                            <h3>Cupom "10"</h3>
                            <h5 className={styles.h5}>Desconto de 10% em pagamentos acima de R$50 </h5>
                        </hgroup>
                        <button className={styles.botao}>Selecionar</button>
                    </div>
                </div>
            )}
        </div>
    )
}   

export default BoxCupom; 