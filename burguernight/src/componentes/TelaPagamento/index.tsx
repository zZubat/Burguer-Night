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

function Pagamento() {
    const [pedidos, setPedidos] = useState<Pedido[]>();
    const [start, setStart] = useState(0);
    const [state, setState] = useState(null);
    
   

    useEffect(() => {
        if(!start){
            var c;
            c= CarrinhoRepository.carregar() as Carrinho
            setPedidos(c.pedidos);
            setStart(1);
        }
      });

      const deletarItem: MouseEventHandler<SVGSVGElement> = (event) => {
        const id = event.currentTarget.id; // Obtém o ID do elemento SVG atual
       CarrinhoRepository.delete(id);
       if(!CarrinhoRepository.delete != null){

       }
       
       
      };


      
      

    return (
            <Tela  barraTopo={
                <div className={styles.topo}>
                    <Link to="/">
                        <a className={styles.iconback}>
                            <CaretLeft color="#fff" size={42} />
                        </a>
                    </Link>
                    <div>
                        <h3 className={styles.texttopo}>FINALIZAR PAGAMENTO</h3>
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
                                <a className={styles.delete}><X  size={25} onClick={deletarItem}/></a>
                            </div>  
                        )})}
                </div>  
                <div>
                    <BoxTotal total={40}/>
                </div>
                <button className={styles.botao}>Confirmar Pedido</button> 
            </Tela>
    )
}

export default Pagamento;