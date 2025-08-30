import styles from "./header.module.sass"
import Change_language from "../change_language/change_language"

const Header = () => {
    let placeholderNameInput = localStorage.getItem('magazinName') ?? '00** ТЦ **********'

    return (
        <div className={styles.main}>
            <div>Автосрез</div>
            <div>
                <input 
                    className={styles.name}
                    placeholder={placeholderNameInput}
                    type= 'text'
                    onChange={(e)=>localStorage.setItem('magazinName', e.target.value)}
                    
                />
            </div>
            <div style={{opacity: '0.3'}}>Узнать план</div>
            <Change_language></Change_language>
        </div>
    )
}

export default Header
