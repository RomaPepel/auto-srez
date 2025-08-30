import Day_srez from '../day_srez/day_srez'
import Night_srez from '../night_srez/night_srez'
import styles from './content.module.sass'

const Content = ()=>{

    return(
        <div className={styles.main}>
            <Day_srez></Day_srez>
            <Night_srez></Night_srez>
        </div>
    )
}

export default Content