import styles from './Botaoderadio.module.css'


type Props = {
    label: string;
    grupo: string;
}

function Botaoderadio (props: Props) {
    

    return (
            <label className={styles.botaoderadio}>
                <span className={styles.label}>{props.label}</span>
                <input type="radio" name={props.grupo} />
            </label>           
    )
}

export default Botaoderadio;