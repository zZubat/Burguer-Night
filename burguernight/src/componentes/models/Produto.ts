type Produto = {
    id?: number;
    nome: string;
    ingredientes?: string;
    adicionais: string;
    preco: number;
    categoria: 'Burguer' | 'Bebidas' | 'Porções' | 'Sobremesa';
    fotoUrl: string;
}


export default Produto;