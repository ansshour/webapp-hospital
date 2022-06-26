import styles from "./NotFound.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <p className={styles.error}>К сожалению, страница не найдена :(</p>
                <Link to="/" className={styles.link}>Перейти на главную</Link>
            </div>
        </Container>
    )
}