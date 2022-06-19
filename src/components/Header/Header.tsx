import styles from "./Header.module.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BeforeHeader } from "./BeforeHeader/BeforeHeader";
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <BeforeHeader />
            <Navbar bg="dark" variant='dark' expand="lg" sticky='top' style={{ filter: "drop-shadow(0px 2px 8px rgba(120, 160, 190, 0.3))" }}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="О больнице" id="basic-nav-dropdown" className={styles.dropdown}>
                                <NavDropdown.Item href="#action/3.1">Сведения о медицинской организации</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Режим и график работы</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Лицензии</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Отзывы</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Направления" id="basic-nav-dropdown" className={styles.dropdown}>
                                <NavDropdown.Item href="#action/4.1">Терапия</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.2">Гинекология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.3">Хирургия</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.4">Урология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.5">Неврология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.6">Оториноларингология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.7">Офтальмоголия</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/4.8">Стоматология</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Специалисты" id="basic-nav-dropdown" className={styles.dropdown}>
                                <NavDropdown.Item href="#action/5.1">Терапевты</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/5.2">Гинекологи</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/5.3">Хирурги</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/5.4">Урологи</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/5.5">Неврологи</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/5.6">Оториноларингологи</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/5.7">Офтальмологи</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/5.8">Стоматологи</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Платные услуги" id="basic-nav-dropdown" className={styles.dropdown}>
                                <NavDropdown.Item href="#action/6.1">Консультации</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/6.2">Лучевая диагностика</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/6.3">Эндоскопическая диагностика</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/6.4">Ультразвуковая диагностика</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/6.5">Молекулярная-генитическое исследование</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#features">Контакты</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}