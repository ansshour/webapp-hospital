import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv/config";
import mongoose from "mongoose";
import Reviews from "./Reviews.js";
import cors from "cors";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());


const start = async () => {

    const urlencodedParser = express.urlencoded({ extended: false });

    await mongoose.connect(`mongodb+srv://ansshour:EWPsmJqcoQxvVG4O@cluster0.wjzoova.mongodb.net/?retryWrites=true&w=majority`);

    app.get("/sendmail", (req, res) => {

        async function main() {
            const transpoter = nodemailer.createTransport({
                host: 'smtp.mail.ru',
                port: 465,
                secure: true,
                auth: {
                    user: 'clinica.ivanova@mail.ru',
                    pass: process.env.MAIL_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false,
                },
            });

            let info = await transpoter.sendMail({
                from: 'Clinica Ivanova <clinica.ivanova@mail.ru>',
                to: "clinica.ivanova@mail.ru",
                subject: "Запись",
                text: `
                ФИО: ${req.query.fio}\n
                Дата рождения: ${req.query.dateBirth}\n
                Телефон: ${req.query.phone}\n
                Адрес: ${req.query.address}\n
                Почта: ${req.query.mail}\n
                Доктор: ${req.query.doctor}\n
                Дата: ${req.query.date}`,
            });
        }

        main().catch(console.error);
    })

    app.get("/add_review", async (req, res) => {
        const name = req.query.name;
        const number = req.query.number;
        const mail = req.query.mail;
        const review = req.query.review;

        const reviews = await Reviews.create({ name: name, number: number, mail: mail, review: review })

        if (res.status(200)) {
            res.send("success")
        }
    })

    app.get("/get_reviews", async (req, res) => {
        const reviews = await Reviews.find();
        res.send(reviews)
    })



    app.listen(PORT, () => {
        console.log(`Server started on ${PORT} PORT`)
    })

}

start()

