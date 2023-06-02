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