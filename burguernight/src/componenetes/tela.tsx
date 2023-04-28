import { ReactNode } from "react"

type Props = {
    children: ReactNode;
    titulo: string;
}

function tela(props:Props){
    return(
        <div>
            {props.children}
        </div>
    );
}