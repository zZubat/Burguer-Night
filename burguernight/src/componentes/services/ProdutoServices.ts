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
        ingredientes: 'Ingredientes',
        descricao: 'Pão Australiano, Bacon, Melaço de Cana, Queijo Coalho Grelhado, Tomate, Carne Seca, Rúcula e Hamburguer de Costela',
        preco: 20,
        tipo:'burguer'
    },
];