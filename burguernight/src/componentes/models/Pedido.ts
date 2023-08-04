import Produto from "./Produto";

type Pedido = {
    id: string; 
    produto: Produto;
    categoria: 'hamburguer' | 'sobremesa' | 'bebida' | 'porcoes';
    opcoes: string[]; // tipo de pão, ponto da carne etc.
    adicionais: string[]; // com gelo, sem gelo etc.
    observacao: string;
}

export default Pedido;