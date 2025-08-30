import { useEffect, useState } from "react"
import Res_button from "../res_button/res_button"
import styles from "./day_srez.module.sass"
import Input from "../input/input"
import InputMemory from "../inputMemory/inputMemory"

const Day_srez = () => {
    const style = {
        borderWidth: "0px",
        borderStyle: "dashed",
        borderColor: "#ffffff",
        padding: "2vh",
        borderRadius: "20px",
    }
    const successfullyStyle = {
        borderWidth: "2px",
        borderStyle: "dashed",
        borderColor: "#cfef00",
        padding: "2vh",
        borderRadius: "20px",
    }
    const unsuccessfulStyle = {
        borderWidth: "2px",
        borderStyle: "dashed",
        borderColor: "#f03c00",
        padding: "2vh",
        borderRadius: "20px",
    }
    const [defaultStyle, setStyle] = useState(style)

    const changeStyle = (status: string): void => {
        if (status === "successfully") {
            setStyle(successfullyStyle)
        }
        if (status === "unsuccessful") {
            setStyle(unsuccessfulStyle)
        }
        setTimeout(() => {
            setStyle(defaultStyle)
        }, 300)
    }

    const copyTextToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        changeStyle("successfully")
    }

    const getName = ()=>{
        let plan = localStorage.getItem('magazinName')
        if (!plan) {
            return 'Введите название магазина'
        } else {
            return plan
        }
    }
    const name = getName()
    const [plan, setPlan]:any = useState(localStorage.getItem('planToday'))
    const [to, setTo] = useState(0)
    const [toPercent, setToPercent] = useState(0)
    const [service, setService] = useState(0)
    const [servicePercent, setServicePercent] = useState(0)
    const [halva, setHalva] = useState(0)
    const [fb, setFb] = useState(0)
    const [cheki, setCheki] = useState(0)
    const [tovar, setTovar] = useState(0)
    const [cth, setCth] = useState(0)
    const [srChek, setSrChek] = useState(0)

    let memoryPlan = localStorage.getItem('planToday') ?? 0
    useEffect(()=>setPlan(+memoryPlan),[])

    const [resultEnd, setResultEnd]:any = useState(null)

    const raschetToPercent = () => {
        const summ: number = (to / plan) * 100
        const formatted:any = summ.toFixed(2)
        if (!plan) {
            setToPercent(0)
        } else {
            setToPercent(formatted)
        }
    }
    const raschetServicePercent = () => {
        const summ: number = (service / to) * 100
        const formatted:any = summ.toFixed(2)
        if (!service) {
            setServicePercent(0)
        } else {
            setServicePercent(formatted)
        }
    }
    const raschetCTH = () => {
        let summ: number = tovar / cheki
        if (summ === Infinity) {
            setSrChek(0)
        } else{
        const formatted:any = summ.toFixed(2)
        if (tovar / cheki) {
            setCth(formatted)
        } else {
            setCth(0)
        }
    }
    }
    const raschetSrChek = () => {
        const summ: number = to / cheki
        if (summ === Infinity) {
            setSrChek(0)
        } else{
        const formatted:any = summ.toFixed(2)
        if (to / cheki) {
            setSrChek(formatted)
        } else {
            setSrChek(0)
        }
    }
    }

    const raschet = () => {
        raschetToPercent()
        raschetServicePercent()
        raschetCTH()
        raschetSrChek()
        setResultEnd(`
${name}
План: ${plan}
ТО: ${to} / ${toPercent}%
Услуги: ${service} / ${servicePercent}%
Халва: ${halva}
FB: ${fb}
Ср. чек: ${srChek}
КТЧ: ${cth}`)
    }
    useEffect(() => {
        raschet()
    })
    return (
        <div className={styles.main}>
            <div className={styles.imput_container}>
                <div className={styles.name_container}>Дневной </div>
                <div className={styles.body_container}>
                    <div className={styles.input_name_container}>
                        <InputMemory  setName={'planToday'} setPlaceholder={'план'} setValue={setPlan} />
                        <div className={styles.input_name}>{"план"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input  name='то' setValue={setTo} />
                        <div className={styles.input_name}>{"то"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input
                            name='услуги'
                            setValue={setService}
                        />
                        <div className={styles.input_name}>{"услуги"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input  name='чеки' setValue={setCheki} />
                        <div className={styles.input_name}>{"чеки"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input
                            name='товары'
                            setValue={setTovar}
                        />
                        <div className={styles.input_name}>{"товары"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input  name='халва' setValue={setHalva} />
                        <div className={styles.input_name}>{"халва"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input  name='finbox' setValue={setFb} />
                        <div className={styles.input_name}>{"finbox"}</div>
                    </div>
                </div>
                <div className={styles.button_container}>
                    <Res_button
                        copyTextToClipboard={() =>
                            copyTextToClipboard(resultEnd)
                        }
                    ></Res_button>
                </div>
            </div>
            <div className={styles.result_container}>
                <div style={defaultStyle}>{resultEnd}</div>
            </div>
        </div>
    )
}

export default Day_srez
