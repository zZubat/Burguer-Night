import styles from "./index.module.css"
import imgElo from "./imagens/LOGO ELO.png"
import imgPix from "./imagens/LOGO PIX.png"
import imgCpf from "./imagens/LOGO DOCUMENTO.png"


function BoxFormasdePagamento () {
    return (
        <div>
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
                        <h1 >CPF/CNPJ na nota</h1>
                        <h3 >Digite um documento válido</h3>
                    </div>
                    <button className={styles.botao}>Alterar</button>
                    </div>
                    <button className={styles.botaofinalizar}>Finalizar Pagamento</button>
        </div>
    )

}


export default BoxFormasdePagamento;