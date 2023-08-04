import { CaretLeft, X } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import Tela from '../Tela'
import styles from './index.module.css'
import BoxTotal from '../Adicionais/BoxTotal/BoxTotal';
import FotoLanche from '../../Aseets/HamburguerAus.jpg';
import Pedido from '../models/Pedido';
import Carrinho from "../models/Carrinho";
import { useState , useEffect, MouseEventHandler} from 'react';
import CarrinhoRepository from '../../repositories/CarrinhoRepository';
import api from "../services/api";

function Pagamento() {
    const [pedidos, setPedidos] = useState<Pedido[]>();
    
    let carrinho: Carrinho;

    useEffect(() => {
        recarregarPedidos();
    }, []);

    const deletarItem = (pedido: Pedido) => {
        CarrinhoRepository.delete(pedido.id);
        recarregarPedidos();
    };

    function recarregarPedidos() {
         carrinho = CarrinhoRepository.carregar();
        setPedidos(carrinho.pedidos);
    }

    function finalizarPagamento () {
        const carrinho_id = 1; //TODO: Conseguir o id dos dados salvos no Local Storage do carrinho
        const mesa_id = 1;
                    
        api.post(`http://127.0.0.1:3333/carrinho/${carrinho_id}`, {
            pedidos,
            mesa_id
        })
        .then(function (response) {
            setPedidos(response.data);
            alert('Pedido feito com sucesso')
        })
        .catch(function (error) {
            alert(error);
        })
    }

    return (
            <Tela  barraTopo={
                <div className={styles.topo}>
                    <Link to="/">
                        <a className={styles.iconback}>
                            <CaretLeft color="#fff" size={42} />
                        </a>
                    </Link>
                    <div>
                        <h3 className={styles.texttopo}>FINALIZAR PEDIDO</h3>
                    </div>
                </div>
            }>


                <div className={styles.pedidos}>
                    {pedidos?.map(function (pedido) {
                        return (
                            <div className={styles.cardpedido}>
                                <div>
                                    <img className={styles.FotoLanche} src={FotoLanche} />
                                </div>
                                <div className={styles.nomepreco}>   
                                    <h3 className={styles.titulo}>{pedido.produto.nome}</h3>
                                    <h3>Preço: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.produto.preco)}</h3> 
                                </div>
                                <a className={styles.delete}><X  size={25} onClick={() => deletarItem(pedido)}/></a>
                            </div>  
                        )})}
                </div>  
                <div>
                    <BoxTotal pedidos={pedidos}/>
                </div>
                <button className={styles.botao} onClick={finalizarPagamento}>Confirmar Pedido</button> 
            </Tela>   
    )
}

export default Pagamento;