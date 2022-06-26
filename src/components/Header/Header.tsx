import styles from "./Header.module.css"
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
                                <NavDropdown.Item href="/about_clinic">Сведения о медицинской организации</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/working_hours">Режим и график работы</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/licenses">Лицензии</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/reviews">Отзывы</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Направления" id="basic-nav-dropdown" className={styles.dropdown}>
                                <NavDropdown.Item href="/therapy">Терапия</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/gynecology">Гинекология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/surgery">Хирургия</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/urology">Урология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/neurology">Неврология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/otorhinolaryngology">Оториноларингология</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/ophthalmology">Офтальмоголия</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/dentistry">Стоматология</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Специалисты" id="basic-nav-dropdown" className={styles.dropdown}>
                                <NavDropdown.Item href="/therapist">Терапевты</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/gynecologists">Гинекологи</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/surgeon">Хирурги</NavDropdown.Item>
                                <NavDropdown.Divider /> 
                                <NavDropdown.Item href="/urologist">Урологи</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/neurologist">Неврологи</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/otolaryngologist">Оториноларингологи</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/ophthalmologist">Офтальмологи</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/dentist">Стоматологи</NavDropdown.Item>
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
                            <Nav.Link href="/contacts">Контакты</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
