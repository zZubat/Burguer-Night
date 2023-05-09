import Produto from "../models/Produto";

const BurguerService = {
    getTodos: function () {
        return new Promise<Produto[]>(function (resolve, reject) {
            setTimeout(function () {
                resolve(mock);
            }, 3000);
        });
    },
}

export default BurguerService;

const mock: Produto[] = [
    {
        id: 1,
        nome: 'X-Salada',
        ingredientes: 'pão, hamburguer, tomate, alface',
        descricao: '',
        preco: 20,
        tipo:'burguer'
    },
    {
        id: 2,
        nome: 'ESPECIAL “Australiano”',
        ingredientes: '',
        descricao: 'Pão Australiano, Bacon, Melaço de Cana, Queijo Coalho Grelhado, Tomate, Carne Seca, Rúcula e Hamburguer de Costela',
        preco: 20,
        tipo:'burguer'
    },
    {
        id: 3,
        nome: 'Coca-Cola',
        ingredientes: '',
        descricao: 'Coca-Cola 600ml',
        preco: 6.50,
        tipo:'bebida'
    },
    {
        id: 4,
        nome: 'Fanta',
        ingredientes: '',
        descricao: 'Fanta 600ml',
        preco: 5,
        tipo:'bebida'
    },
    {
        id: 5,
        nome: 'Porção de Batata Frita',
        ingredientes: '',
        descricao: 'Porção de Batata Frita Grande',
        preco: 29.50,
        tipo:'porcao'
    },
    {
        id: 6,
        nome: 'Porção de Batata Frita C/ Cheddar e Bacon',
        ingredientes: '',
        descricao: 'Porção de Batata Frita C/ Cheddar e Bacon Grande',
        preco: 38,
        tipo:'porcao'
    },
    {
        id: 7,
        nome: 'Petit Gateau',
        ingredientes: '',
        descricao: 'Bolo de Chocolate C/ Recheio de Chocolate e Duas bolas de Sorvete de Baunilha',
        preco: 30,
        tipo:'sobremesa'
    },
    {
        id: 8,
        nome: 'Crème Brûlée',
        ingredientes: '',
        descricao: 'O crème brûlée é uma das sobremesas mais famosas da França. Ele é delicioso porque é leve, tem um toque de baunilha e fica com uma tentadora casquinha crocante por cima.',
        preco: 45,
        tipo:'sobremesa'
    },
];