import styles from './BeforeHeader.module.css';
import Container from 'react-bootstrap/Container'
import { FaPhoneAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useState } from 'react';
import { Modal } from '../../Modal/Modal';
import axios from 'axios';

export const BeforeHeader = () => {

    const [modalActive, setModalActive] = useState(false)
    const [fio, setFio] = useState("");
    const [dateBirth, setDateBirth] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [mail, setMail] = useState("");
    const [doctor, setDoctor] = useState("");
    const [date, setDate] = useState("");
    const [validationError, setValidationError] = useState<boolean | null>(null);

    const sendForm = async () => {
        if (fio.length && dateBirth.length && phone.length && address.length && mail.length && doctor.length && date.length && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) && /(?:\+|\d)[\d\-\(\) ]{9,}\d/g.test(phone)) {
            fetch(`http://localhost:4000/sendmail?fio=${fio}&dateBirth=${dateBirth}&phone=${phone}&address=${address}&mail=${mail}&doctor=${doctor}&date=${date}`)
            setModalActive(false)
            setValidationError(false)
        } else {
            setValidationError(true)
        }

    }


    return (
        <Container>
            <div className={styles.wrapper}>
                <Link to="/"><div className={styles.logo}><img src='./image/logo.png'></img></div></Link>
                <div className={styles.number}><span className={styles.icon}><FaPhoneAlt /></span><a className={styles.phone} href='tel:+79218491015'>+7(921)849-10-15</a></div>
                <div className={styles.getServiceBtn}><a className={styles.btn} onClick={() => setModalActive(true)}>Запись на прием</a></div>
                <Modal active={modalActive} setActive={setModalActive}>

                    {validationError ? <p style={{ color: "red", fontWeight: "bold" }}>Ошибка!</p> : ""}

                    <form className={styles.form}>
                        <h2>Предварительная запись на прием</h2>
                        <p>В заявке обязательно укажите свои контактные данные. Дата и время приема будут уточнены оператором в течение 1 рабочего дня.</p>

                        <div className={styles.inputGroup}>
                            <label>ФИО полностью<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="name" value={fio} onChange={(e) => setFio(e.target.value)}></input>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Дата рождения<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="name" value={dateBirth} onChange={(e) => setDateBirth(e.target.value)}></input>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Контактный телефон<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="name" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Место жительства (адрес)<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="name" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Адрес электронной почты<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="name" value={mail} onChange={(e) => setMail(e.target.value)}></input>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Врач<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="name" value={doctor} onChange={(e) => setDoctor(e.target.value)}></input>
                        </div>
                        <div className={styles.inputGroup}>
                            <label>Удобная дата<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="name" value={date} onChange={(e) => setDate(e.target.value)}></input>
                        </div>

                        <div className={styles.inputGroupCheckbox}>
                            <input className={styles.input2} type="checkbox" name="name"></input>
                            <label>Я согласен на обработку персональных данных</label>
                        </div>

                        <div className={styles.inputGroupBtn}>
                            <input className={styles.btn} type="button" name="name" value="Отправить" onClick={sendForm}></input>
                        </div>
                    </form>
                </Modal>
            </div>
        </Container>
    )
}