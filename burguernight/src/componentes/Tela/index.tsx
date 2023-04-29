import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    //titulo: string;
}

function Tela(props:Props){
    return(
        <div>
            {props.children}
        </div>
    );
}


export default Tela;