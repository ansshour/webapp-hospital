import styles from "./Modal.module.scss";

type Props = {
    modalActive: boolean;
    setModalActive: (arg: boolean) => void;
    children: React.ReactNode;
}

export const Modal: React.FC<Props> = ({ modalActive, setModalActive, children }) => {
    return (
        <div className={modalActive ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => { setModalActive(false) }}>
            <div className={modalActive ? `${styles.content} ${styles.active}` : `${styles.content}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}