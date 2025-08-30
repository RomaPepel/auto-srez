import styles from './icon.module.sass'
import icon from '../../assets/polaris.svg'
const Icon = ()=>{

    return(
        <div className={styles.main}>
            <img src={icon}></img>
            
        </div>
    )
}

export default Icon