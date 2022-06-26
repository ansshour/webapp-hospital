import styles from './BeforeHeader.module.css';
import Container from 'react-bootstrap/Container'
import { FaPhoneAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { useState } from 'react';
import { Modal } from '../../Modal/Modal';

export const BeforeHeader = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <Container>
            <div className={styles.wrapper}>
                <Link to="/"><div className={styles.logo}><img src='./image/logo.png'></img></div></Link>
                <div className={styles.number}><span className={styles.icon}><FaPhoneAlt /></span><a className={styles.phone} href='tel:+79218491015'>+7(921)849-10-15</a></div>
                <div className={styles.getServiceBtn}><a className={styles.btn} onClick={() => setModalActive(true)}>Запись на прием</a></div>
                <Modal active={modalActive} setActive={setModalActive}>
                <form className={styles.form}>
                    <h2>Предварительная запись на прием</h2>
                    <p>В заявке обязательно укажите свои контактные данные. Дата и время приема будут уточнены оператором в течение 1 рабочего дня.</p>

                    <div className={styles.inputGroup}>
                        <label>ФИО полностью<span className={styles.red}>*</span></label>
                        <input className={styles.input} type="text" name="name"></input>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Дата рождения<span className={styles.red}>*</span></label>
                        <input className={styles.input} type="text" name="name"></input>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Контактный телефон<span className={styles.red}>*</span></label>
                        <input className={styles.input} type="text" name="name"></input>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Место жительства (адрес)<span className={styles.red}>*</span></label>
                        <input className={styles.input} type="text" name="name"></input>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Адрес электронной почты<span className={styles.red}>*</span></label>
                        <input className={styles.input} type="text" name="name"></input>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Врач<span className={styles.red}>*</span></label>
                        <input className={styles.input} type="text" name="name"></input>
                    </div>
                    <div className={styles.inputGroup}>
                        <label>Удобная дата<span className={styles.red}>*</span></label>
                        <input className={styles.input} type="text" name="name"></input>
                    </div>

                    <div className={styles.inputGroupCheckbox}>
                        <input className={styles.input2} type="checkbox" name="name"></input>
                        <label>Я согласен на обработку персональных данных</label>
                    </div>

                    <div className={styles.inputGroupBtn}>
                        <input className={styles.btn} type="button" name="name" value="Отправить"></input>
                    </div>
                </form>
            </Modal>
            </div>
        </Container>
    )
}