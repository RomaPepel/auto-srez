import styles from "./inputMemory.module.sass"

const InputMemory = ({ setName, setPlaceholder, setValue  }: any) => {
    const setMemory = (value:string )=>{
        localStorage.setItem(`${setName}`, value)
        setValue(value)
    }
    
    return (
        <div className={styles.formContainer}>
            <input 
                    className={styles.form_input}
                    placeholder={`${setPlaceholder}`}
                    type= 'number'
                    onChange={(e)=>setMemory(e.target.value)}
                    value={localStorage.getItem(`${setName}`) ?? 'error'}
                />
        </div>
    )
}

export default InputMemory
