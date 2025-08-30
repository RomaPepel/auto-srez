import styles from "./input.module.sass"

const Input = ({  name, setValue }: any) => {
    const render = (event:any) => {
        setValue(+event)
    }

    
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

export default Input
