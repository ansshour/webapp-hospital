import styles from "./TeamCard.module.css";

type Props = {
    image: string,
    name: string,
    text: string,
}

export const TeamCard = ({ image, name, text }: Props) => {
    return (
        <div className={styles.teamCard}>
            <div className={styles.image} style={{ backgroundImage: `${image}` }}></div>
            <div className={styles.name}>{name}</div>
            <div className={styles.teamDesc}>{text}</div>
        </div >
    )
}