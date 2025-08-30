import { useEffect, useState } from "react"
import Input from "../input/input"
import Res_button from "../res_button/res_button"
import styles from "./night_srez.module.sass"
import InputMemory from "../inputMemory/inputMemory"
import InputVozvrat from "../inputVozvrat/inputVozvrat"

const Night_srez = () => {
    interface styleBorder {
        borderWidth: string,
        borderStyle: string,
        borderColor: string,
        padding: string,
        borderRadius: string,
    }

    const style:styleBorder = {
        borderWidth: "0px",
        borderStyle: "dashed",
        borderColor: "#ffffff",
        padding: "2vh",
        borderRadius: "20px",
    }
    const successfullyStyle:styleBorder = {
        borderWidth: "2px",
        borderStyle: "dashed",
        borderColor: "#cfef00",
        padding: "2vh",
        borderRadius: "20px",
    }
    const unsuccessfulStyle:styleBorder = {
        borderWidth: "2px",
        borderStyle: "dashed",
        borderColor: "#f03c00",
        padding: "2vh",
        borderRadius: "20px",
    }
    const [defaultStyle, setStyle] = useState(style)

    // enum statusCode { ///нужно с этим разобратся 
    //     successfully,
    //     unsuccessful
    // }

    const changeStyle = (status: string): void => {
        if (status === "statusCode") {
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
    const [toP, setToP] = useState(0)
    const [service, setService] = useState(0)
    const [serviceP, setServiceP] = useState(0)
    const [tvSum, setTvSum] = useState(0)
    const [tvPercent, setTvPercent] = useState(0)
    const [robotsSum, setRobotsSum] = useState(0)
    const [robotsPercent, setRobotsPercent] = useState(0)
    const [sticksSum, setSticksSum] = useState(0)
    const [sticksPercent, setsticksPercent] = useState(0)
    const [coffeeSum, setCoffeeSum] = useState(0)
    const [coffeePercent, setCoffeePercent] = useState(0)
    const [halvaCount, setHalvaCount] = useState(0)
    const [halvaSum, setHalvaSum] = useState(0)
    const [halvaCountMonth, sethalvaCountMonth] = useState(0)
    const [FBtoday, setFBtoday] = useState(0)
    const [FBmonth, setFBmonth] = useState(0)
    const [sber, setSber] = useState(0)
    const [averageReceipt, setAverageReceipt] = useState(0)
    const [cth, setCth] = useState(0)
    const [newClient, setNewClient] = useState(0)
    const [oldClient, setOldClient] = useState(0)
    const [cheki, setCheki] = useState(0)
    const [tovar, setTovar] = useState(0)
    const [razvrat, setRazvrat] = useState(0)

    const [resultEnd, setResultEnd]:any = useState(null)

    let memoryPlan = localStorage.getItem('planToday') ?? 0
    useEffect(()=>setPlan(+memoryPlan),[])

    let memoryFbMonth = localStorage.getItem('fbmonth') ?? 0
    useEffect(()=>setFBmonth(+memoryFbMonth),[])

    const raschetTOPercent = (): void => {
        if ((to / plan) * 100) {
            const summ: number = (to / plan) * 100
            const formatted:any = summ.toFixed(2)
            setToP(formatted)
        } else {
            setToP(0)
        }
    }
    const raschetCheki = () => {
        let summ: number = newClient + oldClient
        const formatted:any = summ.toFixed(2)
        setCheki(formatted)
    }
    const raschetAverageReceipt = () => {
        const summ: number = to / cheki
        if (summ === Infinity) {
            setAverageReceipt(0)
        } else{
        const formatted:any = summ.toFixed(2)
        if (to / cheki) {
            setAverageReceipt(formatted)
        } else {
            setAverageReceipt(0)
        }
    }
    }
    const raschetCth = () => {
        let summ: number = tovar / cheki
        if (summ === Infinity) {
            setCth(0)
        } else{
        const formatted:any = summ.toFixed(2)
        if (tovar / cheki) {
            setCth(formatted)
        } else {
            setCth(0)
        }
    }
    }
    const raschetService = () => {
        let summ: number = (service / to) * 100
        const formatted:any = summ.toFixed(2)
        if ((service / to) * 100) {
            setServiceP(formatted)
        } else {
            setServiceP(0)
        }
    }

    const raschet_tv = () => {
        let summ: number = (tvSum / to) * 100
        const formatted:any = summ.toFixed(2)
        if ((tvSum / to) * 100) {
            setTvPercent(formatted)
        } else {
            setTvPercent(0)
        }
    }

    const raschet_robots = () => {
        let summ: number = (robotsSum / to) * 100
        const formatted:any = summ.toFixed(2)
        if ((robotsSum / to) * 100) {
            setRobotsPercent(formatted)
        } else {
            setRobotsPercent(0)
        }
    }

    const raschet_stiki = () => {
        let summ: number = (sticksSum / to) * 100
        const formatted:any = summ.toFixed(2)
        if ((sticksSum / to) * 100) {
            setsticksPercent(formatted)
        } else {
            setsticksPercent(0)
        }
    }

    const raschet_cofee = () => {
        let summ: number = (coffeeSum / to) * 100
        const formatted:any = summ.toFixed(2)
        if ((coffeeSum / to) * 100) {
            setCoffeePercent(formatted)
        } else {
            setCoffeePercent(0)
        }
    }
    // const raschet_vozvrat = () => {
    //     setTo(to - razvrat)
    //     return null
    // }

    function resultNight() {
        raschetTOPercent()
        raschetCheki()
        raschetAverageReceipt()
        raschetCth()
        raschetService()
        raschet_tv()
        raschet_robots()
        raschet_stiki()
        raschet_cofee()
        setResultEnd(`
${name}
План: ${plan}
ТО: ${to} / ${toP}%
Чеки: ${cheki}
Ктч: ${cth}
Ср чек: ${averageReceipt}
Услуги: ${service} / ${serviceP}%
ТВ: ${tvSum} / ${tvPercent}%
Роботы: ${robotsSum} / ${robotsPercent}%
Стики: ${sticksSum} / ${sticksPercent}%
Кофе: ${coffeeSum} / ${coffeePercent}%
Халва: ${halvaCount} / ${halvaCountMonth}
FB: ${FBtoday} / ${FBmonth}
Новые: ${newClient}
Повтор: ${oldClient}
Халва ${halvaSum} FB ${FBtoday} Сбер ${sber}
Возврат: ${razvrat}`)
    }

    useEffect(() => {
        resultNight()
    })  

    return (
        <div className={styles.main}>
            <div className={styles.imput_container}>
                <div className={styles.name_container}>Вечерний</div>
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
                        <Input  name='тв' setValue={setTvSum} />
                        <div className={styles.input_name}>{"тв"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input
                            
                            name='роботы'
                            setValue={setRobotsSum}
                        />
                        <div className={styles.input_name}>{"роботы"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input
                            
                            name='стики'
                            setValue={setSticksSum}
                        />
                        <div className={styles.input_name}>{"стики"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input
                            
                            name='кофе'
                            setValue={setCoffeeSum}
                        />
                        <div className={styles.input_name}>{"кофе"}</div>
                    </div>
                    <div className={styles.double_input_conteiner}>
                        <div className={styles.input_name_container}>
                            <Input
                                name='сегодня'
                                setValue={setHalvaCount}
                            />
                            <div className={styles.input_name}>
                                {"халва сегодня"}
                            </div>
                        </div>
                        <div className={styles.input_name_container}>
                            <Input
                                name='месяц'
                                setValue={sethalvaCountMonth}
                                style_custom={"double_input"}
                            />
                            <div className={styles.input_name}>
                                {"халва месяц"}
                            </div>
                        </div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input
                            
                            name='халва сумма'
                            setValue={setHalvaSum}
                        />
                        <div className={styles.input_name}>{"халва сумма"}</div>
                    </div>
                    <div className={styles.double_input_conteiner}>
                        <div className={styles.input_name_container}>
                            <Input
                                
                                name='fb сегодня'
                                setValue={setFBtoday}
                            />
                            <div className={styles.input_name}>
                                {"fb сумм сегодня"}
                            </div>
                        </div>
                        <div className={styles.input_name_container}>
                        <InputMemory  setName={'fbmonth'} setPlaceholder={'fb месяц'} setValue={setFBmonth} />
                            <div className={styles.input_name}>
                                {"fb сумм месяц"}
                            </div>
                        </div>
                    </div>

                    <div className={styles.input_name_container}>
                        <Input  name='сбер' setValue={setSber} />
                        <div className={styles.input_name}>{"сбер"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input
                            name='новые'
                            setValue={setNewClient}
                        />
                        <div className={styles.input_name}>{"новые"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input
                            name='повтор'
                            setValue={setOldClient}
                        />
                        <div className={styles.input_name}>{"повтор"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <Input
                            
                            name='товары'
                            setValue={setTovar}
                        />
                        <div className={styles.input_name}>{"товары"}</div>
                    </div>
                    <div className={styles.input_name_container}>
                        <InputVozvrat
                            name='возврат сумм'
                            setValue={setRazvrat}
                            to={to}
                            setTo={setTo}
                        />
                        <div className={styles.input_name}>
                            {"возврат сумм"}
                        </div>
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

export default Night_srez
