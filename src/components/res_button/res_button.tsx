import styles from "./res_button.module.sass"

const Res_button = ({ copyTextToClipboard }: any) => {
    function clickFunc() {
        copyTextToClipboard()
    }
    return (
        <button className={styles.a} onClick={clickFunc}>
            <span>Cкопировать</span>
        </button>
    )
}

export default Res_button
