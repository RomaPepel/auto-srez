import styles from "./inputVozvrat.module.sass"

const InputVozvrat = ({  name, setValue }: any) => {
    const render = (event:any) => {
        setValue(+event)
    }
    // const calculationTo = (event:any)=>{
    //     setTo(to - +event)
    // }
    // const doubleFnc = (event:any)=>{
    //     render(event)
    //     calculationTo(event)
    // }

    
    return (
        <div className={styles.formContainer}>
            <input
                className={styles.form_input}
                placeholder={name}
                onChange={(event) => render(event.target.value)}
                type= 'number'
            />
        </div>
    )
}

export default InputVozvrat
