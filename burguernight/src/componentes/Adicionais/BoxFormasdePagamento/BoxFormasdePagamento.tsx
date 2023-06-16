import { useState } from "react";
import styles from "./index.module.css"
import imgElo from "./imagens/LOGO ELO.png"
import imgPix from "./imagens/LOGO PIX.png"
import imgCpf from "./imagens/LOGO DOCUMENTO.png"


function BoxFormasdePagamento () {
    const [alterarpagamento, setPagamento] = useState(false);
    const [alterardocumento, setDocumento] = useState(false);


    function abrir() {
        setPagamento(true);
    }
    function fechar() {
        setPagamento(false);
    }
    function open() {
        setDocumento(true);
    }
    function close() {
        setDocumento(false);
    }


    return (
        <div className={styles.borda}>
            <div className={styles.BoxFormasdePagamento}>
                <div className={styles.logo}>
                        <img src = {imgElo}/>
                        <img src = {imgPix}/>
                </div>
                <header className= {styles.pagamento}>
                    <div className= {styles.escolhapagamento}>
                        <h1>Formas de pagamento</h1>
                        <h3>Dinheiro - Cartão - Pix</h3>
                    </div>
                    {(alterarpagamento) ? (
                        <button className={styles.botao} onClick={fechar}>Fechar</button>
                        ) : (
                        <button className={styles.botao} onClick={abrir}>Alterar</button>
                    )}
                </header>
            </div>

            {(alterarpagamento) && (
                <div className={styles.boxPagar}>
                    <h1>Formas de pagamento</h1>
                    
                    <div  className={styles.comopagar}>
                        <h3>Cartão de crédito</h3>                  
                        <button className={styles.botao}>Selecionar</button>
                    </div>
                    
                    <div className={styles.comopagar}>
                        <hgroup>
                        <h3>Pix</h3>
                        </hgroup>
                    <button className={styles.botao}>Selecionar</button>
                    </div>
                    
                    <div className={styles.comopagar}>
                        <hgroup>
                            <h3>Dinheiro</h3>
                        </hgroup>
                    <button className={styles.botao}>Selecionar</button>
                    </div>
                    
                </div>
                
            )}
           
            <div className={styles.BoxFormasdePagamento}>
                <img className={styles.cpf}  src = {imgCpf}/>
                <div className={styles.BoxDocumento}>
                    <header className={styles.documento}>
                        <div className={styles.boxAddcpf}>
                            <h1 >CPF/CNPJ na nota</h1>
                            <textarea className={styles.textarea}>Digite um documento válido</textarea>
                        </div>
                                    {(alterardocumento) ? (
                            <button className={styles.botao} onClick={close}>Fechar</button>
                            ) : (
                            <button className={styles.botao} onClick={open}>Alterar</button>
                        )}
                    </header>
                </div>
            </div>
                
                {(alterardocumento) && (
                <div className={styles.boxCPF}>
                    <hgroup>
                        <h1>CPF/CNPJ</h1>
                        <textarea className={styles.textarea}>Insira um CPF/CNPJ válido</textarea>
                    </hgroup>
                    <button className={styles.botao}>Confirmar</button>
                </div>
            )}
            
            <button className={styles.botaofinalizar}>Finalizar Pagamento</button>
        </div>
    )

}


export default BoxFormasdePagamento;