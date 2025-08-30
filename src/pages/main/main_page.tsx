import Content from "../../components/content/content"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import styles from "./main.module.sass"

const Main_Page = () => {
    
    return (
        <div className={styles.main}>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </div>
    )
}

export default Main_Page
