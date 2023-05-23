import { useState } from "react";

type BotaoProps = {
    onClick(): void;
    texto:string;
}

type NumeroProps = {
    valor:number;
}

function SpinnerAdicional() {
    const [valor, setValor] = useState(1) 

    function adicionar() {
      if (valor < 5) {
        setValor(valor + 1)
      }
    }
  
    function excluir() {
      if (valor > 1) {  
        setValor(valor - 1)
      }
    }

    return(
        <>
        <Botao onClick={excluir} texto="-"/>
        <Numero valor={valor}/>
        <Botao onClick={adicionar} texto="+"/>  
        </>
    )
}


function Botao(props: BotaoProps) {

    return(
        <button onClick={props.onClick}>{props.texto}</button>
    );
}

function Numero(props: NumeroProps) {

    return(
        <strong>{props.valor}</strong>
    );
}

export default SpinnerAdicional;