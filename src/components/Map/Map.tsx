import { Map, YMaps, Placemark } from "react-yandex-maps"
import styles from "./Map.module.css"
import { Container } from "react-bootstrap"
import { useEffect } from "react"


export const LocationMap = () => {
    return (
        <Container>
            <div className={styles.wrapper}>
                <YMaps>
                    <Map defaultState={{
                        center: [59.861214, 30.244864],
                        zoom: 15
                    }} width="100%" height="350px">
                        <Placemark geometry={[59.861214, 30.244864]} />
                    </Map>
                </YMaps >
            </div>
        </Container>
    )
}