import Botaoderadio from "./Botaoderadio";

type Props = {
    labels: string[];
    grupo: string;
    onChange(label: string): void;
};

function GrupoDeRadio(props: Props) {
    return (
        <div>
            {props.labels.map(function (label) {
                return <Botaoderadio label={label} grupo={props.grupo} onSelected={props.onChange} />
            })}
        </div>
    );
}

export default GrupoDeRadio;