import Carrinho from './BotãoCarrinho';
import Tela from '../Tela'
import Navegacao from './Navegação/index';
import BoxProduto from './BoxBurguer/index';
import { useEffect, useState } from 'react';
import ProdutoService from '../services/ProdutoServices';
import Produto from '../models/Produto';
import Caixa from '../Adicionais/Caixa';
import Modal from '../Modal';
import PedidoHamburguer from '../TelaPedido/Hamburguer';
import PedidoBebida from '../TelaPedido/Bebidas'


function TelaPrincipal() {

    const [carregando, setCarregando] = useState(true);
    const [produto, setProduto] = useState<Produto[]>([]);
    const [modalAberto, setModalAberto] = useState(false);
    const [modalAbertoBebidas, setModalAbertoBebidas] = useState(false);
    const [modalAbertoPorcoes, setModalAbertoPorcoes] = useState(false);
    const [modalAbertoSobremesas, setModalAbertoSobremesas] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto>();

    useEffect(function () {
        //TODO: Consegue o array do servidor.
        setCarregando(true);
        ProdutoService.getTodos()
        .then(function (produto) {
            setProduto(produto);
        })
        .finally(function () {
            setCarregando(false);
        });
    }, []);

    type ListaProps = {
        tipo: string;
        onSelect?(produto: Produto): void;
    }

    function Lista(props: ListaProps){
        return(
            <>
            {
                produto.filter(function (prato) {
                    return prato.tipo === props.tipo;
                }).map(function (produto) {
                    
                    function onClick() {
                        if (props.onSelect) {
                            props.onSelect(produto);
                        }
                    }

                    return(
                        <BoxProduto 
                        key={produto.id}
                        nome={produto.nome}
                        ingredientes={produto.ingredientes}
                        descricao={produto.descricao}
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
                    <Caixa titulo={"Burguers"}>
                    {(carregando === true) && (
                        <p>Carregando...</p>
                    )}
                    {<Lista tipo={'burguer'} onSelect={handleProdutoSelecionado} />}
                    </Caixa>
                </section>

                <section id="Bebidas">
                    <Caixa titulo={"Bebidas"}>
                    {(carregando === true) && (
                        <p>Carregando...</p>
                    )}
                    {<Lista tipo={'bebida'} onSelect={handleProdutoSelecionadoBebidas}/>}
                    </Caixa>
                </section>

                <section id="Porções">
                    <Caixa titulo={"Porções"}>
                    {(carregando === true) && (
                        <p>Carregando...</p>
                    )}
                    {<Lista tipo={'porcao'} onSelect={handleProdutoSelecionadoPorcoes}/>}
                    </Caixa>
                </section>

                <section id="Sobremesas">
                    <Caixa titulo={"Sobremesas"}>
                    {(carregando === true) && (
                        <p>Carregando...</p>
                    )}
                    {<Lista tipo={'sobremesa'} onSelect={handleProdutoSelecionado}/>}
                    </Caixa>
                </section>
            </Tela>
            <Modal aberto={modalAberto} titulo={produtoSelecionado?.nome ?? ''} onClose={handleModalClose}>
                <PedidoHamburguer produto={produtoSelecionado}/>
            </Modal>
            <Modal aberto={modalAbertoBebidas} titulo={produtoSelecionado?.nome ?? ''} onClose={handleModalClose}>
                <PedidoBebida produto={produtoSelecionado}/>
            </Modal>
            <Modal aberto={modalAbertoPorcoes} titulo={produtoSelecionado?.nome ?? ''} onClose={handleModalClose}>
                <PedidoBebida produto={produtoSelecionado}/>
            </Modal>
        </>
    );
}

export default TelaPrincipal;
