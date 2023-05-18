import BoxCupons from "../BoxCupom/BoxCupom";
import BoxTotal from "../BoxTotal/BoxTotal";
import BoxFormasdePagamento from "../BoxFormasdePagamento/BoxFormasdePagamento";
import Tela from "../Tela";


function TelaPagamento () {
    return (
        <Tela>
            <BoxCupons/>
            <BoxTotal subtotal={100} desconto={60} total={40}/>
            <BoxFormasdePagamento />
        </Tela>     
    )
}

export default TelaPagamento;