type Produto = {
    id?: number;
    nome: string;
    ingredientes?: string;
    adicionais: string;
    preco: number;
    categoria: 'burguer' | 'bebida' | 'porcao' | 'sobremesa';
}


export default Produto;