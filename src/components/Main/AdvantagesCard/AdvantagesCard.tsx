import styles from "./AdvantagesCard.module.css"
import Col from 'react-bootstrap/Col'

type Props = {
    image: string,
    title: string,
    description: string,
}

export const AdvantagesCard = ({ image, title, description }: Props) => {
    return (
        <div>
            <Col>
                <div className={styles.cardWrapper}>
                    <div className={styles.first}><img src={image} height='70px' /></div>
                    <div className={styles.cardText}>
                        <p className={styles.title}>{title}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </Col>
        </div>
    )
}