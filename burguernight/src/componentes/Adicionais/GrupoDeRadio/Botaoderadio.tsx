import styles from './Botaoderadio.module.css'


type Props = {
    label: string;
    grupo: string;
    onSelected(label: string): void;
}

function Botaoderadio (props: Props) {
    
    function onClick() {
        props.onSelected(props.label);
    }

    return (
            <label className={styles.botaoderadio}>
                <span className={styles.label}>{props.label}</span>
                <input type="radio" name={props.grupo} onClick={onClick} />
            </label>           
    )
}

export default Botaoderadio;