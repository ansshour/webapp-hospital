import styles from "./Reviews.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { ReviewCard } from "./Reviews/ReviewCard"
import { useState, ChangeEvent, useEffect } from "react";



type reviewsData = {
    nameInput: string;
    phoneInput: string;
    emailInput: string;
    reviewInput: string;
}[]


export const Reviews = () => {



    const [formInput, setFormInput] = useState({ nameInput: "", phoneInput: "", emailInput: "", reviewInput: "" })

    const [renderData, setRenderData] = useState<reviewsData | []>([])

    const changeName = (e: ChangeEvent<HTMLInputElement>) => {
        setFormInput({ nameInput: e.target.value, phoneInput: formInput.phoneInput, emailInput: formInput.emailInput, reviewInput: formInput.reviewInput })
    }
    const changePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setFormInput({ nameInput: formInput.nameInput, phoneInput: e.target.value, emailInput: formInput.emailInput, reviewInput: formInput.reviewInput })
    }
    const changeMail = (e: ChangeEvent<HTMLInputElement>) => {
        setFormInput({ nameInput: formInput.nameInput, phoneInput: formInput.phoneInput, emailInput: e.target.value, reviewInput: formInput.reviewInput })
    }
    const changeReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormInput({ nameInput: formInput.nameInput, phoneInput: formInput.phoneInput, emailInput: formInput.emailInput, reviewInput: e.target.value })
    }

    const sendReview = async (e: any) => {
        e.preventDefault()
        let renderDataCurrent: any = renderData;
        renderDataCurrent.push(formInput);
        setRenderData([...renderDataCurrent])
    }

    return (
        <Container>
            <h1>Отзывы пациентов</h1>
            <div className={styles.wrapper}>
                <p className={styles.content}>
                    <ul>
                        <p className={styles.text}>Мы стремимся оказывать качественные услуги с высоким уровнем сервиса. Мы благодарны нашим пациентам за оказанное доверие и положительные отзывы о совместной работе. </p>
                    </ul>
                </p>
            </div>
            <div className={styles.reviewsContainer}>
                <p className={styles.reviewTitle}>Оставить отзыв о клинике</p>

                <div className={styles.form}>
                    <input className={styles.input} type="text" name="name" placeholder="Введите имя" value={formInput.nameInput} onChange={changeName}></input>
                    <input className={styles.input} type="text" name="phone" placeholder="Введите номер телефона" value={formInput.phoneInput} onChange={changePhone}></input>
                    <input className={styles.input} type="text" name="mail" placeholder="Введите e-mail" value={formInput.emailInput} onChange={changeMail}></input>
                    <textarea className={styles.review} placeholder="Введите отзыв" value={formInput.reviewInput} onChange={changeReview}></textarea>
                    <input className={styles.btn} type="button" value="Отправить" onClick={sendReview}></input>
                </div>
            </div>

            <div className={styles.reviewsList}>
                {renderData.map(({ nameInput, reviewInput }, i) => <ReviewCard name={nameInput} text={reviewInput} key={i} />)}
            </div>
        </Container>

    )
}