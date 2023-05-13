import Botaoderadio from "./Botaoderadio";

type Props = {
    labels: string[];
    grupo: string;
};

function GrupoDeRadio(props: Props) {
    return (
        <div>
            {props.labels.map(function (label) {
                return <Botaoderadio label={label} grupo={props.grupo} />
            })}
        </div>
    );
}

export default GrupoDeRadio;