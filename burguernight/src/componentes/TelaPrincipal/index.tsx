import Carrinho from './BotãoCarrinho';
import Tela from '../Tela'
import Navegacao from './Navegação/index';
import BoxProduto from './BoxBurguer/index';
import { useEffect, useState } from 'react';
import ProdutoService from '../services/ProdutoServices';
import Produto from '../models/Produto';
import Modal from '../Modal';
import PedidoHamburguer from '../TelaPedido/Hamburguer';
import PedidoBebida from '../TelaPedido/Bebidas'
import PedidoPorcoes from '../TelaPedido/Porcoes';
import PedidoSobreMesa from '../TelaPedido/SobreMesa';
import styles from '../TelaPrincipal/index.module.css'



function TelaPrincipal() {

    const [carregando, setCarregando] = useState(true);
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [modalAberto, setModalAberto] = useState(false);
    const [modalAbertoBebidas, setModalAbertoBebidas] = useState(false);
    const [modalAbertoPorcoes, setModalAbertoPorcoes] = useState(false);
    const [modalAbertoSobremesas, setModalAbertoSobremesas] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto>();

    useEffect(function () {
        //TODO: Consegue o array do servidor.
        setCarregando(true);
        ProdutoService.getTodos()
        .then(function (produtos) {
            setProdutos(produtos);
        })
        .finally(function () {
            setCarregando(false);
        });
    }, []);

    type ListaProps = {
        categoria: string;
        onSelect?(produto: Produto): void;
    }

    function Lista(props: ListaProps){

        return(
            <>
            {
                produtos.filter(function (prato) {
                    return prato.categoria === props.categoria;
                }).map(function (produto) {
                    
                    function onClick() {
                        if (props.onSelect) {
                            props.onSelect(produto);
                        }
                    }

                    return(
                        <BoxProduto 
                        key={produto.id}
                        fotoUrl={produto.fotoUrl}
                        nome={produto.nome}
                        ingredientes={produto.ingredientes}
                        descricao={produto.adicionais}
                        preco={produto.preco}
                        onClick={onClick}/>
                    );
                })
            }
            </>
        );
    }

    function handleProdutoSelecionado(produto: Produto) {
        setProdutoSelecionado(produto);
        setModalAberto(true); }

    function handleProdutoSelecionadoBebidas (produto: Produto) {
        setProdutoSelecionado(produto);
        setModalAbertoBebidas(true);}

        function handleProdutoSelecionadoPorcoes (produto: Produto) {
            setProdutoSelecionado(produto);
            setModalAbertoPorcoes(true);}

            function handleProdutoSelecionadoSobremesas (produto: Produto) {
                setProdutoSelecionado(produto);
                setModalAbertoSobremesas(true);}

    function handleModalClose() {
        setModalAberto(false);
        setModalAbertoBebidas(false);
        setModalAbertoPorcoes(false);
        setModalAbertoSobremesas(false);
    }

    return (
        <>
            <Tela>
                <Carrinho/>
                <Navegacao/>
                <section id="Burguer">
                    <div className={styles.caixa}>
                        <h3>Burguers</h3>
                        <div className={styles.conteudo}>
                            {(carregando === true) && (
                            <p>Carregando...</p>
                            )}
                            {<Lista categoria={'Burguer'} onSelect={handleProdutoSelecionado} />}
                        </div>
                    </div>
                </section>

                <section id="Bebidas">
                    <div className={styles.caixa}>
                        <h3>Bebidas</h3>
                        <div className={styles.conteudo}>
                            {(carregando === true) && (
                            <p>Carregando...</p>
                            )}
                            {<Lista categoria={'Bebidas'} onSelect={handleProdutoSelecionadoBebidas}/>}
                        </div>
                    </div>
                </section>

                <section id="Porções">
                    <div className={styles.caixa}>
                        <h3>Porções</h3>
                        <div className={styles.conteudo}>
                            {(carregando === true) && (
                            <p>Carregando...</p>
                            )}
                            {<Lista categoria={'Porções'} onSelect={handleProdutoSelecionadoPorcoes}/>}
                        </div>
                    </div>            
                </section>

                <section id="Sobremesas">
                <div className={styles.caixa}>
                <h3>Sobremesas</h3>
                        <div className={styles.conteudo}>
                            {(carregando === true) && (
                            <p>Carregando...</p>
                            )}
                            
                           {<Lista categoria={'Sobremesa'} onSelect={handleProdutoSelecionadoSobremesas}/> }
                        </div>
                    </div> 
                </section>

            </Tela>
            <Modal aberto={modalAberto} titulo={produtoSelecionado?.nome ?? ''} onClose={handleModalClose}>
                <PedidoHamburguer produto={produtoSelecionado} onPedidoFeito={handleModalClose}/>
            </Modal>
            <Modal aberto={modalAbertoBebidas} titulo={produtoSelecionado?.nome ?? ''} onClose={handleModalClose}>
                <PedidoBebida produto={produtoSelecionado} onPedidoFeito={handleModalClose}/>
            </Modal>
            <Modal aberto={modalAbertoPorcoes} titulo={produtoSelecionado?.nome ?? ''} onClose={handleModalClose}>
                <PedidoPorcoes produto={produtoSelecionado} onPedidoFeito={handleModalClose}/>
            </Modal>
            <Modal aberto={modalAbertoSobremesas} titulo={produtoSelecionado?.nome ?? ''} onClose={handleModalClose}>
                <PedidoSobreMesa produto={produtoSelecionado} onPedidoFeito={handleModalClose}/>
            </Modal>
        </>
    );
}

export default TelaPrincipal;
