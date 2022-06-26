import Container from "react-bootstrap/esm/Container";
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <Container>
                    <div className={styles.container}>
                        <img src="./image/logo.png" height="40px"></img>
                        <div className={styles.mainPhone}>
                            <p className={styles.desc}>Контактный телефон</p>
                            <a className={styles.main} href="tel:+78125659793">+7 (812) 565-97-93</a>
                        </div>
                        <div className={styles.secondPhone}>
                            <p className={styles.desc}>Скорая помощь</p>
                            <a className={styles.main} href="tel:+78125614367">+7 (812) 561-43-67</a>
                        </div>
                        <div className={styles.email}>
                            <p className={styles.desc}>E-mail</p>
                            <a className={styles.main} href="mailto:email@yandex.ru">Связаться с нами</a>
                        </div>
                    </div>
                </Container >
            </div >

            <div className={`${styles.footer} ${styles.footer2}`}>
                <Container>
                    <p className={styles.offer}>
                        Информация представленная на сайте, является справочной и не является публичной офертой. Все материалы, размещенные на данном сайте разрешается использовать/копировать/размещать в открытом доступе на иных ресурсах только с письменного согласия.
                    </p>
                </Container>
            </div >
            <div className={`${styles.footer} ${styles.footer2} ${styles.footer3}`}>
                <Container>
                    <p className={styles.offer}>
                        © Все права защищены. Клиника высоких медицинских технологий им. М.Е. Иванова.
                    </p>
                </Container>
            </div >
        </>
    )
}