import Burguer from "../models/Burguer";

const BurguerService = {
    getTodos: function () {
        return new Promise<Burguer[]>(function (resolve, reject) {
            setTimeout(function () {
                resolve(mock);
            }, 3000);
        });
    },
}

export default BurguerService;

const mock: Burguer[] = [
    {
        id: 1,
        nome: 'X-Salada',
        ingredientes: 'pão, hamburguer, tomate, alface',
        descricao: '',
        preco: 20,
    },
    {
        id: 2,
        nome: 'ESPECIAL “Australiano”',
        ingredientes: 'Ingredientes',
        descricao: 'Pão Australiano, Bacon, Melaço de Cana, Queijo Coalho Grelhado, Tomate, Carne Seca, Rúcula e Hamburguer de Costela',
        preco: 20,
    },
];