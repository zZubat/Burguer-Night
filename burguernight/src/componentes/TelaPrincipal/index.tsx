import Carrinho from './BotãoCarrinho';
import Tela from '../Tela'
import Navegacao from './Navegação/index';
import BoxProduto from './BoxBurguer/index';
import { useEffect, useState } from 'react';
import ProdutoService from '../services/ProdutoServices';
import Produto from '../models/Produto';
import Caixa from '../Adicionais/Caixa/Caixa';


function TelaPrincipal() {

    const [carregando, setCarregando] = useState(true);
    const [produto, setProduto] = useState<Produto[]>([]);


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

    function Lista(tipo: string){
        return(
            produto.filter(function (prato) {
                return prato.tipo === tipo;
            }).map(function (produto) {
                return(
                    <BoxProduto 
                    key={produto.id}
                    nome={produto.nome}
                    ingredientes={produto.ingredientes}
                    descricao={produto.descricao}
                    preco={produto.preco}/>
                );
            })
        );
    }

    return (
        <Tela>
            <Carrinho/>
            <Navegacao/>
            <section id="Burguer">
                <Caixa titulo={"Burguers"}>
                {(carregando === true) && (
                    <p>Carregando...</p>
                )}
                {Lista('burguer')}
                </Caixa>
            </section>

            <section id="Bebidas">
                <Caixa titulo={"Bebidas"}>
                {(carregando === true) && (
                    <p>Carregando...</p>
                )}
                {Lista('bebida')}
                </Caixa>
            </section>

            <section id="Porções">
                <Caixa titulo={"Porções"}>
                {(carregando === true) && (
                    <p>Carregando...</p>
                )}
                {Lista('porcao')}
                </Caixa>
            </section>

            <section id="Sobremesas">
                <Caixa titulo={"Sobremesas"}>
                {(carregando === true) && (
                    <p>Carregando...</p>
                )}
                {Lista('sobremesa')}
                </Caixa>
            </section>
        </Tela>
    );
}

export default TelaPrincipal;
