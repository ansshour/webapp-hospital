import Container from 'react-bootstrap/esm/Container'
import styles from './Main.module.css'
import Row from 'react-bootstrap/Row'
import { AdvantagesCard } from './AdvantagesCard/AdvantagesCard'
import { Slider } from "./Slider/Slider";
import { TeamCard } from './TeamCard/TeamCard';

const AdvantagesData = [
    { image: "./image/3block/1.svg", title: "150 врачей", description: "Врачи разных специальностей" },
    { image: "./image/3block/2.svg", title: "72 кандидата", description: "медицинских наук" },
    { image: "./image/3block/3.svg", title: "18 докторов", description: "медицинских наук" },
    { image: "./image/3block/4.svg", title: "145 616 консультаций", description: "в 2021 г." },
    { image: "./image/3block/5.svg", title: "25 862 операции", description: "выполнено в 2021 г." },
    { image: "./image/3block/6.svg", title: "6 филиалов", description: "Стараемся быть ближе к нашим пациентам" },
    { image: "./image/3block/7.svg", title: "76500 исследований", description: "выполнено диагностических исследований" },
    { image: "./image/3block/8.svg", title: "3,5 дня", description: "средняя длительность лечения" },
]

const teamData = [
    { image: "url('./image/4block/3.png", name: "Иванов Максим Евгеньевич", text: "И.о. директора Клиники, врач - уролог, д.м.н." },
    { image: "url('./image/4block/2.jpg", name: "Дмитриченко Мигель Владимирович", text: "Заместитель директора по медицинской части (хирургия), главный специалист по хирургии Клиники, врач - хирург высшей категории, к.м.н., Заслуженный врач РФ" },
    { image: "url('./image/4block/1.jpg", name: "Жуков Андрей Дмитриевич", text: "Врач - хирург, эндокринолог, онколог хирургического (эндокринологического) отделения, д.м.н., профессор, Президент ассоциации эндокринных хирургов России (прием не ведет)" }
]

export const Main = () => {
    return (
        <div className={styles.containerOuter}>
            <Slider />
            <Container>
                <div className={styles.containerInfo}>
                    <h1 className={styles.globalTitle}>Клиника высоких медицинских технологий им. М.Е.Иванова</h1>
                    <Container>
                        <Row xl="4" lg='2' sm='2' xs="1">
                            {AdvantagesData.map(data => <AdvantagesCard image={data.image} title={data.title} description={data.description} />)}
                        </Row>
                    </Container>
                </div>
            </Container>
            <Container>
                <div className={styles.bestTeamContainer}>

                    <div className={styles.titleBlock}>
                        <h1 className={styles.title}>Ведущие специалисты</h1>
                        <p className={styles.desc}>Специалисты клиники обладают многолетним опытом работы. Среди них 18 докторов медицинских и биологических наук, 72 кандидата медицинских наук, 6 заслуженных врачей Российской Федерации. Многие из них стажировались в ведущих клиниках Великобритании, США, Германии, Швейцарии.
                        </p>
                    </div>

                    <div className={styles.teamCards}>
                        {teamData.map(data => <TeamCard image={data.image} name={data.name} text={data.text} />)}
                    </div>

                </div>
            </Container>
        </div >
    )
}