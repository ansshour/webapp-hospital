import styles from "./Contacts.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Contacts = () => {
    return (
        <Container>
            <h1>Справочные телефоны, адрес и схема проезда</h1>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <p className={styles.text}><b>Полное наименование:</b>Клиника высоких медицинских технологий имени Максима Евгеньевича Иванова </p>
                    <p className={styles.text}><b>Сокращенное наименование:</b>Клиника высоких медицинских технологий им.М.Е.Иванова</p>
                    <p className={styles.text}><b>Телефон справочной службы:</b>+7 (812) 565-97-93</p>
                    <p className={styles.text}><b>Адрес:</b>198302, ул. Морской Пехоты, 8, корп. 3, Санкт-Петербург.</p>
                    <p className={styles.text}><b>Электронная почта:</b>email@yandex.ru</p>
                    <p className={styles.text}><b>Прием корреспонденции:</b>198302, ул. Морской Пехоты, 8, корп. 3, Санкт-Петербург.</p>
                    <p className={styles.text}><b>Ближайшие станции метро:</b>Автово, Кировский завод</p>
                    <p className={styles.text}><b>Схема проезда:</b></p>
                    <p className={styles.text}>От Ст.М. Автово - автобус №201,№229,№26,№2а,№300</p>
                    <p className={styles.text}>От Ст.М. Кировский завод - автобус №201,№229,№26,№2а,№300</p>

        
                </div>

            </div>
        </Container >
    )
}