import styles from "./ReviewCard.module.css";

type Props = {
    name: string;
    text: string;
}


export const ReviewCard: React.FC<Props> = ({ name, text }) => {
    return (
        <div className={styles.container}>
            <p className={styles.name}>{name}</p>
            <p className={styles.review}>{text}</p>
        </div>
    )
}