import { count } from "console";
import Carrinho from "../componentes/models/Carrinho";
import Pedido from "../componentes/models/Pedido";

const LOCAL_STORAGE_KEY = '@carrinho';

const CarrinhoRepository = {
    carregar: function() {
        const pedidosString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (pedidosString === null) {
            return { pedidos: [] } as Carrinho;
        } else {
            return JSON.parse(pedidosString) as Carrinho;
        }
    },

    contador: function() {
        var c= CarrinhoRepository.carregar() as Carrinho
        var i = '0'
        c.pedidos?.map(function(item: Pedido){
            if(item.id > i){
                i =    item.id;
            }
        })
        return (i+1)
    },

    delete: function(pedidoId: string) {
        const novoCarrinho: Carrinho = { pedidos: [] };
        const carrinho: Carrinho = CarrinhoRepository.carregar();
        
        carrinho.pedidos.forEach(function (pedido) {
            if (pedido.id !== pedidoId) {
                novoCarrinho.pedidos.push(pedido);
            }
        })
        CarrinhoRepository.salvar(novoCarrinho);
    },

    salvar: function (carrinho: Carrinho) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(carrinho));
    },

    inserirNovoPedido: function (pedido: Pedido) {
        const carrinho = CarrinhoRepository.carregar();
        carrinho.pedidos.push(pedido);
        CarrinhoRepository.salvar(carrinho);
    },
}

export default CarrinhoRepository;