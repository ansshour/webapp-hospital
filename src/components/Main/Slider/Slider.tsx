import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/esm/Container'
import styles from "./Slider.module.css";

export const Slider = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/slider/1.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/slider/2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/slider/3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./image/slider/4.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}