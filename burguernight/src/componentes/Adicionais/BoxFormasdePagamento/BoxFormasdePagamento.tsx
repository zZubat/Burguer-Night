import { useState } from "react";
import styles from "./index.module.css"
import imgElo from "./imagens/LOGO ELO.png"
import imgPix from "./imagens/LOGO PIX.png"
import imgCpf from "./imagens/LOGO DOCUMENTO.png"
import { text } from "node:stream/consumers";

type Props = {
    InputMask: string;
    value: number;
}

function BoxFormasdePagamento () {
    const [alterarpagamento, setPagamento] = useState(false);
    const [alterardocumento, setDocumento] = useState(false);


    function abrirPagamento() {
        setPagamento(true);
    }
    function abrirDocumento() {
        setDocumento(true);
    }
    function fecharDocumento() {
        setDocumento(false);
    }
    function fecharPagamento() {
        setPagamento(false);
    }
    
    function atualizarPagamento() {
        alert("Forma de pagamento atualizado!")
        fecharPagamento();
    }
    function atualizarDocumento() {
        alert("CPF/CNPJ atualizado com sucesso!")
        fecharDocumento();
    }
    
     // function cpf(props: Props) {
       // return (
       // <InputMask
       //     mask='999.999.999-99'
       //     value={props.value}
       // //</InputMask>
       // );
     // }



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
                        <button className={styles.botao} onClick={fecharPagamento}>Fechar</button>
                        ) : (
                        <button className={styles.botao} onClick={abrirPagamento}>Alterar</button>
                    )}
                </header>
            </div>

            {(alterarpagamento) && (
                <div className={styles.boxPagar}>
                    <h1>Formas de pagamento</h1>
                    
                    <div  className={styles.comopagar}>
                        <hgroup>
                        <h3>Cartão de crédito</h3>
                        </hgroup>
                        <button onClick={atualizarPagamento} className={styles.botao}>Selecionar</button>
                    </div>
                    
                    <div className={styles.comopagar}>
                        <hgroup>
                            <h3>Pix</h3>
                        </hgroup>
                        <button onClick={atualizarPagamento} className={styles.botao}>Selecionar</button>
                    </div>
                    
                    <div className={styles.comopagar}>
                        <hgroup>
                            <h3>Dinheiro</h3>
                        </hgroup>
                        <button onClick={atualizarPagamento} className={styles.botao}>Selecionar</button>
                    </div>
                    
                </div>
                
            )}
           
            <div className={styles.BoxFormasdePagamento}>
                <img className={styles.cpf}  src = {imgCpf}/>
                <div className={styles.BoxDocumento}>
                    <header className={styles.documento}>
                        <div className={styles.boxAddcpf}>
                            <h1 >CPF/CNPJ na nota</h1>
                            <input type='text' className={styles.textarea} placeholder="Digite um documento válido!"
                                maxLength={14}/>
                        </div>
                        <button className={styles.botao}>Confirmar</button>
                             {(alterardocumento) ? (
                            <button className={styles.botao} onClick={fecharDocumento}>Fechar</button>
                            ) : (
                            
                            <button className={styles.botao} onClick={abrirDocumento}>Alterar</button>
                        )} 
                    </header>
                </div>
            </div>
            
                {(alterardocumento) && (
                <div className={styles.boxCPF}>
                    <hgroup>
                        <h1>CPF/CNPJ</h1>
                        <input className={styles.textarea} placeholder="Insira um CPF/CNPJ válido"
                             maxLength={14}/>
                    </hgroup>
                    <button onClick={atualizarDocumento} className={styles.botao}>Confirmar</button>
                </div>
            )}

            <button className={styles.botaofinalizar}>Finalizar Pagamento</button>
        </div>
    )

}


export default BoxFormasdePagamento;