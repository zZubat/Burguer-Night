import { useState } from "react";
import styles from "./index.module.css"
import imgElo from "./imagens/LOGO ELO.png"
import imgPix from "./imagens/LOGO PIX.png"
import imgCpf from "./imagens/LOGO DOCUMENTO.png"


function BoxFormasdePagamento () {
    const [aberto, setAberto] = useState(false);

    function abrir() {
        setAberto(true);
    }
    function fechar() {
        setAberto(false);
    }


    return (
        <div className={styles.borda}>
            <div className={styles.BoxFormasdePagamento}>
                <div className={styles.logo}>
                    <img src = {imgElo}/>
                    <img src = {imgPix}/>
                </div>
                <div className= {styles.f}>
                    <h1>Formas de pagamento</h1>
                    <h3>Dinheiro - Cartão - Pix</h3>
                </div>
                <button className={styles.botao}>Alterar</button>
            </div>
                <div className={styles.BoxFormasdePagamento}>
                    <img className={styles.cpf}  src = {imgCpf}/>
                    <div className={styles.BoxDocumento}>
                    <header className={styles.row}>
                        <div className={styles.botaocpf}>
                            <h1 >CPF/CNPJ na nota</h1>
                            <h3 >Digite um documento válido</h3>
                        </div>
                            {(aberto) ? (
                    <button className={styles.botao} onClick={fechar}>Fechar</button>
                    ) : (
                    <button className={styles.botao} onClick={abrir}>Alterar</button>
                )}
                    
                    </header>
                    </div>
                </div>
                
                
                {(aberto) && (
                <div className={styles.boxCPF}>
                    <hgroup>
                        <h1>CPF/CNPJ</h1>
                        <h3>Insira um CPF/CNPJ válido</h3>
                    </hgroup>
                    <button className={styles.botao}>Confirmar</button>
                </div>
            )}
            
            <button className={styles.botaofinalizar}>Finalizar Pagamento</button>
        </div>
    )

}


export default BoxFormasdePagamento;