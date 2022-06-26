import styles from "./Licenses.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Licenses = () => {
    return (
        <Container>
            <h1>Лицензии и сертификаты</h1>
            <div className={styles.wrapper}>
                <p className={styles.content}>
                    <ul>
                        <p className={styles.text}><b>Лицензия на осуществление медицинской деятельности</b> ─ это особое разрешение на возможность занятия 
                        конкретным видом деятельности. </p>
                        <p className={styles.text}><b>Выписка из реестра лицензий по состоянию на 23.04.2021 -</b> <a className={styles.download} href="../../../public\image\6block\Licenses.pdf" download="">скачать</a></p>
                       
                    </ul>
                </p>
            </div>
        </Container>

    )
}