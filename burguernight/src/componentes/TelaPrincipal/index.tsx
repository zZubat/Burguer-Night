import Tela from '../Tela'
import Navegacao from './Navegação/index';
import BoxProduto from './BoxBurguer/index';
import { useEffect, useState } from 'react';
import ProdutoService from '../services/ProdutoServices';
import Produto from '../models/Produto';


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
            <Navegacao/>
            <section id="Burguer">
                <h1>Burguers</h1>
                {(carregando === true) && (
                    <p>Carregando...</p>
                )}
                {Lista('burguer')}
            </section>

            <section id="Bebidas">
                <h1>Bebidas</h1>
                {(carregando === true) && (
                    <p>Carregando...</p>
                )}
                {Lista('bebida')}
            </section>

            <section id="Porções">
                <h1>Porções</h1>
                {(carregando === true) && (
                    <p>Carregando...</p>
                )}
                {Lista('porcao')}
            </section>

            <section id="Sobremesas">
                <h1>Sobremesas</h1>
                {(carregando === true) && (
                    <p>Carregando...</p>
                )}
                {Lista('sobremesa')}
            </section>
        </Tela>
    );
}

export default TelaPrincipal;
