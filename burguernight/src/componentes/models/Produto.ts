type Produto = {
    id?: number;
    nome: string;
    ingredientes?: string;
    descricao: string;
    preco: number;
    tipo: 'burguer' | 'bebida' | 'porcao' | 'sobremesa';
}


export default Produto;